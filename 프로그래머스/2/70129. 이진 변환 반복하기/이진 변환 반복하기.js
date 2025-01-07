function solution(s) {
  // 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수 초기화
  let [changeCount, deleteZeroCount] = [0, 0];

  while (s !== "1") {
    changeCount++;

    // 1. x의 모든 0 제거
    let newS = s.match(/1/g).join("");
    deleteZeroCount += s.length - newS.length;
    //2. s의 길이를 2진법으로 표현한 문자열로 바꿉니다.
    s = newS.length.toString(2);
  }
  return [changeCount, deleteZeroCount];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));