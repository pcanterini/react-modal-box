/**
 * Interfaces
 */
import Events from '../events/events.js';

export default {
  modalShow(header, content, footer) {
    return Events.emit("modal.show", header, content, footer);
  },
  modalHide() {
    return Events.emit("modal.hide", null, null, null);
  }
};
