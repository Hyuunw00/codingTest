// n마리중 2/n번 뽑아야함
// 문제는 중복되지 않는 포켓몬들을 최대한 많이 뽑아야된다.
//  중복을 제거한 후의 포켓몬과 n/2을 비교
// 만약 서로다른 포켓몬의 갯수 >= n/2  ->n/2개
// 서다른 포켓몬의 갯수 < n/2 -> 서로다른 포켓몬의 갯수
function solution(nums) {
  const poketmon = [...new Set(nums)];
  const pickCount = Math.floor(nums.length / 2);

  return poketmon.length >= pickCount ? pickCount : poketmon.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
