var React = require('React');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div col-sm-12>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="github username"
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = PromptContainer;
