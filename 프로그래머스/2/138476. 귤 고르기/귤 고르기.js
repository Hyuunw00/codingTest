function solution(k, tangerine) {
  const map = new Map();

  for (let i of tangerine) {
    map.set(i, map.get(i) + 1 || 1);
  }
  const newArr = [...map.values()].sort((a, b) => b - a);

  let count = 0;
  while (k > 0) {
    if (k <= newArr[0]) {
      count++;
      return count;
    } else {
      count++;
      k -= newArr[0];
      newArr.shift();
    }
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [3, 3, 3, 2, 2, 1, 1]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
