/**
 * Example Code!
 */
import React      from 'react';
import ReactDOM   from 'react-dom';

import { Modal, ModalMixin, EventsMixin } from '../../src/index.js';

var App = React.createClass({
  mixins:[ModalMixin, EventsMixin],
  show() {
    return this.modalShow(
      <h1>Title</h1>,
      <p>Content</p>,
      <button onClick={this.hide}>Close Button</button>
    );
  },
  hide() {
    return this.modalHide();
  },
  render() {

    this.onModalShow(function () {
      console.log("Modal Shown!");
    });

    this.onModalHide(function () {
      console.log("Modal Hidden!");
    });

    return (
      <div>
        React Modal Box
        <button onClick={this.show}>Open Modal</button>
        <button onClick={this.hide}>Hide Modal</button>
        <Modal customStyles={{
          modalBackdrop: {
            background: "rgba(0, 0, 0, 0.8"
          },
          modalContainer: {
            boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.9)"
          }
        }} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));