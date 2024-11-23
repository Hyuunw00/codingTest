function solution(n) {
  const lenbinaryN = n.toString(2).replaceAll("0", "").length; // n의 이진수에서 1의 갯수 
  let nextNum = n + 1; // 조건1 : n보다는 무조건 커야함

  while (true) {
    const lenbinaryNum = nextNum.toString(2).replaceAll("0", "").length; // n 다음 숫자의 이진수에서 1의 갯수
    if (lenbinaryN === lenbinaryNum) return nextNum; // 1의 갯수가 같은 값이 나오면 반복문 종료
    else nextNum++; // 또다른 숫자와 비교를 위해 1을 더해줌
  }
}

console.log(solution(78));
console.log(solution(15));
