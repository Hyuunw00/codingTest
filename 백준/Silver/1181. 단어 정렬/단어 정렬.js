const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const words = input;

/*
1. 아이디어
단어의 길이가 짧은 순 , 같으면 오름차순
단 중복된 단어는 없어야함

중복된 단어가 없어야되니까 배열을 Set을 활용해 중복을 제거해준다
이후 단어의 길이가 짧은순으로 우선적으로 정렬하고, 같으면 사전순(오름차순) 정렬한다



2. 시간복잡도
max: O(nlogn)
3. 자료구조
Set
*/

const set = new Set(words);

const result = [...set];

const str = result
  .sort((a, b) => {
    if (a.length === b.length) {
      return a < b ? -1 : 1;
    } else {
      return a.length - b.length;
    }
  })
  .join("\n");

console.log(str);
