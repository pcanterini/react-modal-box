/**
 * Interfaces
 */
import Events from '../events/events.js';

export default {
  onModalShow(callback) {
    return Events.on("modal.show", callback);
  },
  onModalHide(callback) {
    return Events.on("modal.hide", callback);
  }
};
