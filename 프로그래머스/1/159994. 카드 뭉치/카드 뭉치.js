function solution(cards1, cards2, goal) {
  while (goal.length > 0) {
    const word = goal[0];
    if (cards1[0] === word) {
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
      goal.shift();
    } else return "No";
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
