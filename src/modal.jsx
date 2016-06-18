/**
 * Libraries
 */
import React      from 'react';
import classnames from 'classnames';

/**
 * Interfaces
 */
import Events from './events/events.js';

/**
 * Constants
 */
import KEYCODE from './utilities/keycode.const.js';

/**
 * Mixins
 */
import eventMixin from './mixins/event.mixin.jsx';

const Modal = React.createClass({
  mixins: [eventMixin],
  getInitialState() {
    return {
      header: null,
      content: null,
      footer: null,
      opened: false
    };
  },
  componentDidMount() {
    Events.on("modal.show", this.show);
  },
  componentWillUnmount() {
    Events.off("modal.show", this.show);
  },
  show(header, content, footer) {
    return this.setState({
      header,
      content,
      footer,
      opened: true
    });
  },
  dismiss() {
    return this.setState({
      opened: false
    });
  },
  render() {
    const modalStyles    = classnames("modal");
    const backdropStyles = classnames("modal-backdrop", {
      opened: this.state.opened
    });
    return (
      <div className={backdropStyles}
        tabIndex="1"
        onClick={this.dismiss}
        onKeyUp={this.onKeyExecute(KEYCODE.ESC, () => this.dismiss())}>
        <div className={modalStyles} onClick={this.stopPropagation}>
          <button type="button" className="modal-dismiss" onClick={this.dismiss}>
            <i className="icon-check" />
          </button>
          <div className="modal-header">
            {this.state.header}
          </div>
          <div className="modal-content">
            {this.state.content}
          </div>
          <div className="modal-footer">
            {this.state.footer}
          </div>
        </div>
      </div>
    );
  }
});

export default Modal;
