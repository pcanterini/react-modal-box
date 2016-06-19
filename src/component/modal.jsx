/**
 * React Modal Box
 */
import React       from 'react';
import Events      from '../events/events.js';
import operator    from '../utilities/operator.js';
import modalStyles from '../styles/_modal.js';

const Modal = React.createClass({
  getDefaultProps() {
    return {
      customStyles: null,
      customIcon: null
    };
  },
  getInitialState() {
    return {
      header: null,
      content: null,
      footer: null,
      opened: false
    };
  },
  componentWillMount() {
    return operator.ifTrueDo(operator.bool(this.props.customStyles), function () {
      return  operator.objectEach(this.props.customStyles, function (prop, value) {
        return (modalStyles[prop] = operator.extend(modalStyles[prop], value));
      });
    }, this);
  },
  componentDidMount() {
    Events.on("modal.show", this.show);
    Events.on("modal.hide", this.hide);
  },
  componentWillUnmount() {
    Events.off("modal.show", this.show);
    Events.off("modal.hide", this.hide);
  },
  componentWillUpdate(nextProps, nextState) {
    return operator.ifTrueDoElse(nextState.opened, function () {
      return modalStyles.modalBackdrop = operator.extend(modalStyles.modalBackdrop, {
        display: "block",
        visibility: "visible",
        opacity: 1
      });
    }, function () {
      return modalStyles.modalBackdrop = operator.extend(modalStyles.modalBackdrop, {
        display: "none",
        visibility: "hidden",
        opacity: 0
      });
    }, this);
  },
  show(header, content, footer) {
    return this.setState({
      header,
      content,
      footer,
      opened: true
    });
  },
  hide() {
    return this.setState({
      opened: false
    });
  },
  ESCKeyHide(e) {
    return (e.keyCode === 27 || e.charCode === 27) && this.hide();
  },
  render() {
    return (
      <div style={modalStyles.modalBackdrop} tabIndex="1" onClick={this.hide} onKeyUp={this.ESCKeyHide}>
        <div style={modalStyles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <button style={modalStyles.modalDismiss} onClick={this.hide} type="button">
            {operator.ifTrueDoElse(operator.bool(this.props.customIcon), function () {
              return this.props.customIcon;
            }, function () {
              return <i style={modalStyles.modalIcon}>X</i>;
            }, this)}
          </button>
          <div style={modalStyles.modalHeader}>{this.state.header}</div>
          <div style={modalStyles.modalContent}>{this.state.content}</div>
          <div style={modalStyles.modalFooter}>{this.state.footer}</div>
        </div>
      </div>
    );
  }
});

export default Modal;
