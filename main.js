import { readFile } from "node:fs/promises";

// Event lopp test
setTimeout(() => console.log("Timer 1 finished"), 0);

setImmediate(() => console.log("Inmediate 1 finished"));

const fileContent = await readFile("input.txt", "utf-8");

console.log(fileContent, "File Content");

console.log("top-level-code");

process.nextTick(() => console.log("hello"));
