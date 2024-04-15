import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";

const text = await readFile("input.txt", "utf-8");

const output = `Content: ${text} \nCreated on: ${Date.now()}`;

await writeFile("output.txt", output);

console.log("file writing");

// SERVER

const server = createServer((req, res) => {
  res.end("Hello World");
});

server.listen(8000, "127.0.0.1", () => console.log("Listening at port 8000"));
