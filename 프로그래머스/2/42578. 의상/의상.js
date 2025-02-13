/* 
서로다른 조합의 의상을 입을 경우의수를 구하는 문제
전체 경우의수에서 조합으로 치지 않는 경우의수를 제외하면 된다.
조합이 안되는 경우는 아무것도 입지 않는 경우이다.

전체 경우의수를 구해서 -1을 한다.

*/
function solution(clothes) {
  //   const map = new Map();
  //   for (i = 0; i < clothes.length; i++) {
  //     if (!map.get(clothes[i][1])) map.set(clothes[i][1], []);
  //     map.get(clothes[i][1]).push(clothes[i][0]);
  //   }
  const totalClothes = Object.values(
    clothes.reduce((prev, cur) => {
      prev[cur[1]] = prev[cur[1]] ? prev[cur[1]] + 1 : 1;
      return prev;
    }, {})
  );
  return totalClothes.reduce((prev, cur) => prev * (cur + 1), 1) - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);

