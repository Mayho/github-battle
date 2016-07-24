var React = require('react');
var transparentBg = require('../styles').transparentBg;

var Prompt = React.createClass({
  render: function() {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
        <h1>{this.props.header}</h1>
        <div col-sm-12>
          <form onSubmit={this.props.onSubmitUser}>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='github username'
                onChange={this.props.onUpdateUser}
                value={this.props.username}
                type='text' />
            </div>
            <div className='form-group col-sm-4 col-sm-offset-4'>
              <button
                className='btn btn-block btn-success'
                type='submit'>
                continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Prompt;
