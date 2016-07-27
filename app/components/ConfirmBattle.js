var React = require('react');

function ConfirmBattle(props) {
  return props.isLoading
    ? <p> It's loading fam! </p>
    : <p> Confirm Battle </p>
}

module.exports = ConfirmBattle;
