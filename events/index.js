import { EventEmitter } from "node:events";

//Create class
class MyEmitter extends EventEmitter {}

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on("event", () => {
  console.log("an event occurred!");
});

//Init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
