(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactModalBox"] = factory(require("React"));
	else
		root["ReactModalBox"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Modal = exports.Modal = __webpack_require__(1).default;
	var ModalMixin = exports.ModalMixin = __webpack_require__(5).default;
	var EventsMixin = exports.EventsMixin = __webpack_require__(7).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _events = __webpack_require__(3);

	var _events2 = _interopRequireDefault(_events);

	var _modalMixin = __webpack_require__(5);

	var _modalMixin2 = _interopRequireDefault(_modalMixin);

	var _operator = __webpack_require__(4);

	var _operator2 = _interopRequireDefault(_operator);

	var _modal = __webpack_require__(6);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Modal = _react2.default.createClass({
	  displayName: 'Modal',

	  mixins: [_modalMixin2.default],
	  getDefaultProps: function getDefaultProps() {
	    return {
	      customStyles: null,
	      customIcon: null
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      header: null,
	      content: null,
	      footer: null,
	      opened: false
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    return _operator2.default.ifTrueDo(_operator2.default.bool(this.props.customStyles), function () {
	      return _operator2.default.objectEach(this.props.customStyles, function (prop, value) {
	        return _modal2.default[prop] = _operator2.default.extend(_modal2.default[prop], value);
	      });
	    }, this);
	  },
	  componentDidMount: function componentDidMount() {
	    _events2.default.on("modal.show", this.show);
	    _events2.default.on("modal.hide", this.hide);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _events2.default.off("modal.show", this.show);
	    _events2.default.off("modal.hide", this.hide);
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    return _operator2.default.ifTrueDoElse(nextState.opened, function () {
	      return _modal2.default.modalBackdrop = _operator2.default.extend(_modal2.default.modalBackdrop, {
	        display: "block",
	        visibility: "visible",
	        opacity: 1
	      });
	    }, function () {
	      return _modal2.default.modalBackdrop = _operator2.default.extend(_modal2.default.modalBackdrop, {
	        display: "none",
	        visibility: "hidden",
	        opacity: 0
	      });
	    }, this);
	  },
	  show: function show(header, content, footer) {
	    return this.setState({
	      header: header,
	      content: content,
	      footer: footer,
	      opened: true
	    });
	  },
	  hide: function hide(header, content, footer) {
	    return this.setState({
	      header: header,
	      content: content,
	      footer: footer,
	      opened: false
	    });
	  },
	  ESCKeyHide: function ESCKeyHide(e) {
	    return (e.keyCode === 27 || e.charCode === 27) && this.hide();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: _modal2.default.modalBackdrop, tabIndex: '1', onClick: this.modalHide, onKeyUp: this.ESCKeyHide },
	      _react2.default.createElement(
	        'div',
	        { style: _modal2.default.modalContainer, onClick: function onClick(e) {
	            return e.stopPropagation();
	          } },
	        _react2.default.createElement(
	          'button',
	          { style: _modal2.default.modalDismiss, onClick: this.modalHide, type: 'button' },
	          _operator2.default.ifTrueDoElse(_operator2.default.bool(this.props.customIcon), function () {
	            return this.props.customIcon;
	          }, function () {
	            return _react2.default.createElement(
	              'i',
	              { style: _modal2.default.modalIcon },
	              'X'
	            );
	          }, this)
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _modal2.default.modalHeader },
	          this.state.header
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _modal2.default.modalContent },
	          this.state.content
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _modal2.default.modalFooter },
	          this.state.footer
	        )
	      )
	    );
	  }
	}); /**
	     * React Modal Box
	     */


	exports.default = Modal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _operator = __webpack_require__(4);

	var _operator2 = _interopRequireDefault(_operator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  events: {},
	  on: function on(name, fn) {
	    return _operator2.default.ifTrueDo(_operator2.default.and(_operator2.default.ifFalseDo(_operator2.default.bool(name), function () {
	      return console.log("Error", "No Event name was specified!");
	    }), _operator2.default.ifFalseDo(_operator2.default.isFunction(fn), function () {
	      return console.log("Error", "No callback function was specified!");
	    }), _operator2.default.ifFalseDo(_operator2.default.isArray(this.events[name]), function () {
	      return this.events[name] = [];
	    }, this)), function () {
	      return this.events[name].push(fn);
	    }, this);
	  },
	  off: function off(name, fn) {
	    var fnIndex = this.events[name].indexOf(fn);
	    return _operator2.default.gte(fnIndex, 0) && this.events[name].splice(fnIndex, 1);
	  },
	  emit: function emit(name) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return this.events[name] && this.events[name].forEach(function (fn) {
	      return fn.apply(null, args);
	    });
	  }
	}; /**
	    * Operators
	    */

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  or: function or() {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return args.some(function (value) {
	      return _this.bool(value);
	    });
	  },
	  and: function and() {
	    var _this2 = this;

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return args.every(function (value) {
	      return _this2.bool(value);
	    });
	  },
	  bool: function bool(val) {
	    return !!val;
	  },
	  eq: function eq(first, second) {
	    return first === second;
	  },
	  not: function not(val) {
	    return !val;
	  },
	  gt: function gt(first, second) {
	    return first > second;
	  },
	  lt: function lt(first, second) {
	    return first < second;
	  },
	  gte: function gte(first, second) {
	    return first >= second;
	  },
	  lte: function lte(first, second) {
	    return first <= second;
	  },
	  ifTrueDo: function ifTrueDo(value, fn) {
	    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    return value && fn.call(context, value);
	  },
	  ifFalseDo: function ifFalseDo(value, fn) {
	    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    return value || fn.call(context, value);
	  },
	  ifTrueDoElse: function ifTrueDoElse(value, fn, def) {
	    var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	    return value && fn.call(context, value) || def.call(context, value);
	  },
	  ifFalseDoElse: function ifFalseDoElse(value, fn, def) {
	    var context = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	    return (value || fn.call(context, value)) && def.call(context, value);
	  },
	  isArray: function isArray(arr) {
	    return Object.prototype.toString.call(arr) === '[object Array]';
	  },
	  isFunction: function isFunction(fn) {
	    return Object.prototype.toString.call(fn) === '[object Function]';
	  },
	  isObject: function isObject(obj) {
	    return Object.prototype.toString.call(obj) === '[object Object]';
	  },
	  isUndefined: function isUndefined(target) {
	    return typeof target === 'undefined';
	  },
	  extend: function extend(target, source) {
	    var result = {};
	    this.objectEach(target, function (prop, value) {
	      return result[prop] = value;
	    }, this);
	    this.objectEach(source, function (prop, value) {
	      return result[prop] = value;
	    }, this);
	    return result;
	  },
	  objectEach: function objectEach(source, callback) {
	    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        callback.call(context, prop, source[prop], source);
	      }
	    }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(3);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  modalShow: function modalShow(header, content, footer) {
	    return _events2.default.emit("modal.show", header, content, footer);
	  },
	  modalHide: function modalHide() {
	    return _events2.default.emit("modal.hide", null, null, null);
	  }
	}; /**
	    * Interfaces
	    */

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  modalBackdrop: {
	    display: "none",
	    visibility: "hidden",
	    opacity: 0,
	    position: "fixed",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    width: "100%",
	    height: "100%",
	    background: "rgba(66, 81, 90, 0.5)",
	    overflow: "hidden",
	    zIndex: 1000
	  },
	  modalContainer: {
	    position: "absolute",
	    top: "50%",
	    left: "50%",
	    transform: "translate(-50%, -50%)",
	    WebkitTransform: "translate(-50%, -50%)",
	    MsTransform: "translate(-50%, -50%)",
	    width: "560px",
	    background: "#ffffff",
	    padding: "0 50px",
	    overflow: "hidden"
	  },
	  modalDismiss: {
	    display: "inline-block",
	    position: "absolute",
	    top: "5px",
	    right: "5px",
	    background: "none",
	    border: "none",
	    width: "30px",
	    height: "30px",
	    fontSize: "30px",
	    lineHeight: "30px",
	    outline: "none",
	    padding: 0
	  },
	  modalIcon: {
	    color: "#DDDDDD",
	    cursor: "pointer",
	    fontStyle: "normal",
	    fontSize: "16px",
	    fontWeight: "bold",
	    verticalAlign: "middle"
	  },
	  modalHeader: {
	    margin: "20px 0"
	  },
	  modalContent: {
	    margin: "20px 0"
	  },
	  modalFooter: {
	    margin: "20px 0"
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(3);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  onModalShow: function onModalShow(callback) {
	    return _events2.default.on("modal.show", callback);
	  },
	  onModalHide: function onModalHide(callback) {
	    return _events2.default.on("modal.hide", callback);
	  }
	}; /**
	    * Interfaces
	    */

/***/ }
/******/ ])
});
;