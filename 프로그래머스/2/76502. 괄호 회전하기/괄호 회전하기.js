function solution(s) {
  let count = 0;
  const sArr = [...s];
  for (let i = 0; i < sArr.length; i++) {
    const arr = [];
    for (let j = 0; j < sArr.length; j++) {
      if (sArr[j] === ")" && arr[arr.length - 1] === "(") arr.pop();
      else if (sArr[j] === "}" && arr[arr.length - 1] === "{") arr.pop();
      else if (sArr[j] === "]" && arr[arr.length - 1] === "[") arr.pop();
      else arr.push(sArr[j]);
    }

    if (arr.length === 0) count++;
    sArr.push(sArr.shift());
  }
  return count;
}

console.log(solution("[](){}"));
