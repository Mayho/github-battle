var React = require('react');
var PropTypes = React.PropTypes;

function pre(object) {
  return <pre> {JSON.stringify(object, null, 2)} </pre>
}

function Results(props) {
  return (
    <div>Results: {pre(props)}</div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;
