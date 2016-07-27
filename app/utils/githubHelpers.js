var Axios = require('axios');

function getUserInfo(username) {
  return Axios.get('https://api.github.com/users/' + username)
}

var helpers = {
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
