function solution(n, words) {
  const storage = [];
  for (let i = 0; i < words.length; i++) {
    if (storage.includes(words[i]))
      return [(i % n) + 1, Math.ceil((i + 1) / n)];

    if (storage.length > 0) {
      if ([...storage[storage.length - 1]].pop() !== words[i][0])
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
    storage.push(words[i]);
  }
  return [0, 0];
}

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
