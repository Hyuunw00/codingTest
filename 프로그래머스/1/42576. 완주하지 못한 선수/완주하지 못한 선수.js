// completion 배열을 순회하면서 들어온 참가자 추가하기
// participant 배열 순회하면서 참여한 참가자 제거하기
// 순회가 끝났을때 갯수가 0이 아닌 애가 완주하지 못한 선수

function solution(participant, completion) {
  const runner = new Map();
  // 1
  completion.forEach((c) => {
    runner.set(c, runner.get(c) + 1 || 1);
  });

  // 2
  for (let p of participant) {
    if (!runner.get(p)) return p;
    else runner.set(p, runner.get(p) - 1);
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
