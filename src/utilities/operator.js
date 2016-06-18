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
  ifTrueDo(bool, fn, context = null) {
    return bool && fn.call(context);
  },
  ifFalseDo(bool, fn, context = null) {
    return bool || fn.call(context);
  },
  isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  },
  isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  }
};
