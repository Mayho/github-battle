var React = require('react');

function pre(object) {
  return <pre> {JSON.stringify(object, null, 2)} </pre>
}

function ConfirmBattle(props) {
  return props.isLoading
    ? <p> It's loading fam! </p>
    : <div> Confirm Battle: {pre(props)} </div>
}

module.exports = ConfirmBattle;
