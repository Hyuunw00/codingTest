function solution(a, b) {
  const dayArr = `SUN,MON,TUE,WED,THU,FRI,SAT`.split(",");
  return dayArr[new Date(2016, a - 1, b).getDay()];
}

console.log(solution(5, 24));
