function solution(n, words) {
  for (let i = 0; i < words.length; i++) {
    if (
      (i > 0 && words[i - 1].split("").pop() !== words[i][0]) ||
      i > words.indexOf(words[i])
    )
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
  }
  return [0, 0];
}

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);

