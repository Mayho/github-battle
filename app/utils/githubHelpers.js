var Axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return Axios.get('https://api.github.com/users/' + username)
}

function getRepos(username) {
  return Axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=200');
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData(user) {
  return getRepos(user.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: user.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}

var helpers = {
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return Axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn('Error in battle', err);
      });
  },
  getPlayersInfo: function(players) {
    return Axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      });
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    });
  }
};

module.exports = helpers;
