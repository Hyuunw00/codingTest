function solution(names, yearnings, photos) {
  const map = new Map();

  names.forEach((name, index) => {
    map.set(name, yearnings[index]);
  });

  return photos.map((photo) => {
    return photo.reduce((prev, cur) => prev + (map.get(cur) ?? 0), 0);
  });
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
