/**
 * Interfaces
 */
import Events from '../events/events.js';

export default {
  modalShow(header, content, footer) {
    Events.emit("modal.show", header, content, footer);
  }
};
