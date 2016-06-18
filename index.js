var React    = require("react");
var ReactDOM = require("react-dom");

var ModalMixin = require("./src/mixins/modal.mixin.jsx").default;

var Modal = require("./src/modal.jsx").default;

var events = require("./src/events/events").default;

var App = React.createClass({
  mixins:[ModalMixin],
  show() {
    return this.modalShow(
      <h1>Hey</h1>,
      <p>Title</p>,
      <button>Hello</button>
    );
  },
  hide() {
    return this.modalHide();
  },
  render() {
    return (
      <div>
        React Modal Box
        <button onClick={this.show}>Open Modal</button>
        <button onClick={this.hide}>Hide Modal</button>
        <Modal customStyles={{
          modalBackdrop: {

          }
        }} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));