const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const commands = input;

const stack = [];
const result = [];

for (let command of commands) {
  const c = command.split(" ");

  switch (c[0]) {
    case "push":
      stack.push(Number(c[1]));
      break;
    case "pop":
      result.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length ? 0 : 1);
      break;
    case "top":
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(result.join("\n"));
