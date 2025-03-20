function solution(str) {
  const numberSet = new Set();

  //     1. set 객체에 모든 조합의 수 넣기
  recursive("", str);

  //     2.  set에 들어있는 값들중 소수만 찾아서 갯수 반환
  const arr = [...numberSet];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) count++;
  }
  return count;

  function recursive(comb, others) {
    if (comb !== "") {
      numberSet.add(Number(comb));
    }
    for (let i = 0; i < others.length; i++) {
      recursive(
        comb + others[i],
        others.substring(0, i) + others.substring(i + 1)
      );
    }
  }

  function isPrime(num) {
    if (num === 0 || num === 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

console.log(solution("011"));

