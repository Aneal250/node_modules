import { EventEmitter } from "node:events";
import { v4 as uuidv4 } from "uuid";

console.log("uuid", uuidv4());

export class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuidv4(), msg });
  }
}
