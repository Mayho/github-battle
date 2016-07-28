var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;

function pre(object) {
  return <pre> {JSON.stringify(object, null, 2)} </pre>
}

function ConfirmBattle(props) {
  return props.isLoading
    ? <p> It's loading fam! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-6'>
            <p className='lead'>Player One</p>
            {pre(props.playersInfo[0])}
          </div>
          <div className='col-sm-6'>
            <p className='lead'>Player Two</p>
            {pre(props.playersInfo[1])}
          </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              FIGHT!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
