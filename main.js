import { readFile, writeFile } from "node:fs/promises";

const text = await readFile("input.txt", "utf-8");

const output = `Content: ${text} \nCreated on: ${Date.now()}`;

await writeFile("output.txt", output);

console.log("file writing");
