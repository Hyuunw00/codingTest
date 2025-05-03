const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

let index = 0;

const gem = [];

for (let i = 0; i < N; i++) {
  gem.push(input[index++].split(" ").map(Number));
}
const bag = [];
for (let i = 0; i < K; i++) {
  bag.push([Number(input[index++])]);
}

/*
1. 아이디어
가방의 갯수에는 최대 1개의 보석이 들어가고 가방의 무게와 보석의 무게를 고려해 최대한 비싼 보석들을 훔쳐야한다
최대한 비싼 보석들을 훔쳐야하니까 가장 비싼 보석부터 확인해야한다
최대힙을 활용해 정렬하는데 걸리는 시간을 logn으로 줄여야한다

보석들과 가방을 무게를 기준으로 오름차순 정렬
가방의 무게를 순회하면서 가방의 무게보다 작거나 같은 보석을 가격이 비싼순으로 삽입(최대 힙)
가장 비싼 보석을 꺼내서 money에 더해주기


2. 시간복잡도
보석, 가방은 최대 30만개
시간복잡도는 O(nlogn)을 넘으면 안됨
3. 자료구조

4. 엣지케이스
보석의 무게와 가격이 0일 수 있다

*/

class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[currentIndex] <= this.values[parentIndex]) break;

      [this.values[currentIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[currentIndex],
      ];

      currentIndex = parentIndex;
    }
    return this.values;
  }
  extractMax() {
    if (this.values.length === 1) return this.values.pop();

    const maxValue = this.values[0];
    this.values[0] = this.values.pop();

    let index = 0;
    let swapIndex = index;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      const length = this.values.length;
      if (
        leftIndex < length &&
        this.values[leftIndex] > this.values[swapIndex]
      ) {
        swapIndex = leftIndex;
      }
      if (
        rightIndex < length &&
        this.values[rightIndex] > this.values[swapIndex]
      ) {
        swapIndex = rightIndex;
      }

      if (swapIndex === index) break;

      [this.values[swapIndex], this.values[index]] = [
        this.values[index],
        this.values[swapIndex],
      ];

      index = swapIndex;
    }
    return maxValue;
  }
  size() {
    return this.values.length;
  }
}

const heap = new MaxHeap();

bag.sort((a, b) => a - b); // 무게가 작은 순으로 정렬

gem.sort((a, b) => a[0] - b[0]); // 무게가 작은 순으로 정렬

let money = 0;
let j = 0;
for (let i = 0; i < bag.length; i++) {
  while (j < N && bag[i] >= gem[j][0]) {
    heap.insert(gem[j][1]);
    j++;
  }
  if (heap.size()) {
    money += heap.extractMax();
  }
}

console.log(money);
