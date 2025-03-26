function solution(numbers) {
  const arr = [];
  numbers.forEach((num, index) => {
    for (let i = index + 1; i < numbers.length; i++) arr.push(num + numbers[i]);
  });
  return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
