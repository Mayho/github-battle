var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Traplord',
  username: 'Mayho',
  image: 'https://avatars1.githubusercontent.com/u/3915230?v=3&s=460'
};

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <h1>Steezy Traplords Unlimited</h1>
    );
  }
});

var Content = React.createClass({
  render: function() {
      return (
        <img src={USER_DATA.image} />
      );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
