/**
 * Operators
 */
import operator from '../utilities/operator.js';

export default {
  events: {},
  on(name, fn) {
    return operator.ifTrueDo(operator.and(
      operator.ifFalseDo(operator.bool(name), function () {
        return console.log("error", "You Didn't Specify Name!");
      }),
      operator.ifFalseDo(operator.isFunction(fn), function () {
        return console.log("error", "It's not function");
      }),
      operator.ifFalseDo(operator.isArray(this.events[name]), function () {
        return this.events[name] = [];
      }, this)
    ), function () {
      return this.events[name].push(fn);
    }, this);
  },
  off(name, fn) {
    const fnIndex = this.events[name].indexOf(fn);
    return (fnIndex >= 0) && this.events[name].splice(fnIndex, 1);
  },
  emit(name, ...args) {
    return this.events[name] && this.events[name].forEach(function (fn) {
        return fn.apply(null, args);
    });
  }
};