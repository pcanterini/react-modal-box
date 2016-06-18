export default {
  stopPropagation(e) {
    return e.stopPropagation();
  },
  onKeyExecute(key, cb) {
    return (e) => (e.keyCode === key || e.charCode === key) && cb();
  }
};
