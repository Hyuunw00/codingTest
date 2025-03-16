function solution(elements) {
  const sumArr = [];

  for (let i = 0; i < elements.length; i++) {
    if (sumArr.length < elements.length) {
      sumArr.push(...elements);
    } else {
      const newSumArr = sumArr
        .slice(-elements.length)
        .map((item, index) => item + elements[(index + i) % elements.length]);

      sumArr.push(...newSumArr);
    }
  }
  return [...new Set(sumArr)].length;
}

console.log(solution([7, 1, 4]));

