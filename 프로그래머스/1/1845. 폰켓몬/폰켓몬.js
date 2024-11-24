
 function solution(nums) {
  const pickCount = Math.floor(nums.length / 2);

  return new Set(nums).size < pickCount ? new Set(nums).size : pickCount;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
