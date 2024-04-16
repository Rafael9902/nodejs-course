// events
import { EventEmitter } from "events";

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const sales = new Sales();

sales.on("new emit", (name) => console.log(`emited ${name}`));

sales.emit("new emit", "rafael");
