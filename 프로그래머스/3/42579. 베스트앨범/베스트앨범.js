/*
노래를 뽑는 기준
1순위: 가장 많이 들은 장르에서 먼저 뽑기
2순위: 해당 장르에서 가장 많이 들은 노래순
3순위: 들은횟수가 같은 노래가 있으면 배열의 인덱스(고유번호)가 낮은 순

 객체에 무엇을 저장할 것인가?

 */
function solution(genres, plays) {
  const result = [];

  const obj = {};
  for (let i = 0; i < genres.length; i++) {
    if (!obj[genres[i]]) obj[genres[i]] = plays[i];
    else obj[genres[i]] = obj[genres[i]] + plays[i];
  }

  const sortedGenres = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  const allInfoObj = genres.map((genre, index) => {
    return {
      genre,
      index,
      playCount: plays[index],
    };
  });

  sortedGenres.forEach((item) => {
    const arr = [];
    for (let info of allInfoObj) {
      if (info.genre === item[0]) {
        arr.push(info);
      }
    }

    arr.sort((a, b) => b.playCount - a.playCount);
    arr.forEach((item, index) => {
      if (index < 2) result.push(item.index);
    });
  });
  return result;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [800, 600, 150, 800, 2500]
  )
);

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

