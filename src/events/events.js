/**
 * Operators
 */
import operator from '../utilities/operator.js';

export default {
  events: {},
  on(name, fn) {
    return operator.ifTrueDo(operator.and(
      operator.ifFalseDo(operator.bool(name), function () {
        return console.log("Error", "No Event name was specified!");
      }),
      operator.ifFalseDo(operator.isFunction(fn), function () {
        return console.log("Error", "No callback function was specified!");
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
    return operator.gte(fnIndex, 0) && this.events[name].splice(fnIndex, 1);
  },
  emit(name, ...args) {
    return this.events[name] && this.events[name].forEach(function (fn) {
      return fn.apply(null, args);
    });
  }
};