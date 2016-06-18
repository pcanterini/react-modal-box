/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var events = __webpack_require__(1).default;

	var fn = function fn(string) {
	  console.log("Hello " + string);
	};

	events.on("test", fn);

	events.emit("test", "World!");

	events.off("test", fn);

	events.emit("test", "World! 2");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _operator = __webpack_require__(2);

	var _operator2 = _interopRequireDefault(_operator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  events: {},
	  on: function on(name, fn) {
	    return _operator2.default.ifTrueDo(_operator2.default.and(_operator2.default.ifFalseDo(_operator2.default.bool(name), function () {
	      return console.log("error", "You Didn't Specify Name!");
	    }), _operator2.default.ifFalseDo(_operator2.default.isFunction(fn), function () {
	      return console.log("error", "It's not function");
	    }), _operator2.default.ifFalseDo(_operator2.default.isArray(this.events[name]), function () {
	      return this.events[name] = [];
	    }, this)), function () {
	      return this.events[name].push(fn);
	    }, this);
	  },
	  off: function off(name, fn) {
	    var fnIndex = this.events[name].indexOf(fn);
	    return fnIndex >= 0 && this.events[name].splice(fnIndex, 1);
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
/* 2 */
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
	  ifTrueDo: function ifTrueDo(bool, fn) {
	    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    return bool && fn.call(context);
	  },
	  ifFalseDo: function ifFalseDo(bool, fn) {
	    var context = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    return bool || fn.call(context);
	  },
	  isArray: function isArray(array) {
	    return Object.prototype.toString.call(array) === '[object Array]';
	  },
	  isFunction: function isFunction(fn) {
	    return Object.prototype.toString.call(fn) === '[object Function]';
	  }
	};

/***/ }
/******/ ]);