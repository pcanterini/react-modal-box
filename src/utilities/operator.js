export default {
  or(...args) {
    return args.some((value) => this.bool(value));
  },
  and(...args) {
    return args.every((value) => this.bool(value));
  },
  bool(val) {
    return !!val;
  },
  eq(first, second) {
    return first === second;
  },
  not(val) {
    return !val;
  },
  gt(first, second) {
    return first > second;
  },
  lt(first, second) {
    return first < second;
  },
  gte(first, second) {
    return first >= second;
  },
  lte(first, second) {
    return first <= second;
  },
  ifTrueDo(value, fn, context = null) {
    return value && fn.call(context, value);
  },
  ifFalseDo(value, fn, context = null) {
    return value || fn.call(context, value);
  },
  isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  },
  isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  },
  isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  },
  isUndefined(target) {
    return (typeof target) === 'undefined';
  },
  extend(target, source) {
    const result = {};
    this.objectEach(target, function (prop, value) {
      return result[prop] = value;
    }, this);
    this.objectEach(source, function (prop, value) {
      return result[prop] = value;
    }, this);
    return result;
  },
  objectEach(source, callback, context = null) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        callback.call(context, prop, source[prop], source);
      }
    }
  }
};
