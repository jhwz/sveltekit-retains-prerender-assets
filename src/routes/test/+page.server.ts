import * as fs from "fs";

export const prerender = true;

export function load() {
  const data = fs.readFileSync("src/routes/test/somefile.txt", "utf-8");
  return {
    message: data,
  };
}
