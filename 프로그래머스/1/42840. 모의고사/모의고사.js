
function solution(answers) {
  const person = ["12345", "21232425", "3311224455"];
  const point = [0, 0, 0];

  answers.forEach((answer, index) => {
    for (let [pIndex, pValue] of person.entries()) {
      if (answer === Number(pValue[index % pValue.length])) point[pIndex]++;
    }
  });

  const max = Math.max(...point);
  return point
    .map((item, index) => (item < max ? "" : index + 1))
    .filter((item2) => item2 !== "");
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
