/* 
주어진 숫자배열에서 순서를 재배치해서 만들수 있는 가장 큰 수 만들기

가장 큰수가 되려면 숫자요소를 문자열로 인식하고 내림차순정렬한 다음 그 요소들을 붙이면 됨
근데 조건 처리를 해줘야함 0~1000이기 때문에 998 999의경우는 ..? -> 조건처리로 푸는 문제가 아닌듯

*/

function solution(numbers) {
  const newNumbers = numbers.map((num) => String(num));
  const resultNum = newNumbers.sort((a, b) => b + a - (a + b));
  return resultNum.every((val) => val == 0) ? "0" : resultNum.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0, 0, 0]));
