var events = require("./src/events/events").default;

var fn = function (string) {
  console.log(`Hello ${string}`);
};

events.on("test", fn);

events.emit("test", "World!");

events.off("test", fn);

events.emit("test", "World! 2");