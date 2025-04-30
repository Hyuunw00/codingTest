const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const numArr = input.map(Number);

/*
1. 아이디어
최소한의 비교가 되려면 최대한 묶음 갯수가 작은 애들끼리 비교하며 시작해야한다.
따라서 묶음된 숫자 카드를 내림차순 정렬하고 묶음 숫자카드 배열의 길이가 2보다 작을때까지 반복하며 비교횟수를 더해준다. -> N이 최대 10만까지이기 때문에 불가능

힙 자료구조의 우선순위큐 방식을 활용 해야 한다. -> 이진 힙 class를 만들어야함.

2. 시간복잡도
O(nlogn)
3. 자료구조
*/
//100 60 50 40 20 10

class Minheap {
  constructor() {
    this.values = [];
  }

  // 오름차순 정렬되도록 삽입
  insert(value) {
    this.values.push(value);
    let currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[parentIndex] <= this.values[currentIndex]) break;
      const temp = this.values[currentIndex];
      this.values[currentIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      currentIndex = parentIndex;
    }
  }
  //  최솟값 추출하고 오름차순 정렬
  extractMin() {
    if (this.values.length === 1) return this.values.pop();
    const min = this.values[0];
    this.values[0] = this.values.pop();

    let currentIndex = 0;

    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let swapIndex = null;

      let element = this.values[currentIndex];
      let leftChild = this.values[leftIndex];
      let rightChild = this.values[rightIndex];

      if (leftIndex < this.size()) {
        if (leftChild < element) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < this.size()) {
        if (
          (rightChild < element && swapIndex === null) ||
          (rightChild < leftChild && swapIndex !== null)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;
      this.values[currentIndex] = this.values[swapIndex];
      this.values[swapIndex] = element;
      currentIndex = swapIndex;
    }
    return min;
  }
  size() {
    return this.values.length;
  }
}
const heap = new Minheap();

for (let num of numArr) {
  heap.insert(num);
}

if (N === 1) {
  console.log(0);
} else {
  let result = 0;

  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();
    const sum = first + second;
    result += sum;

    heap.insert(sum);
  }
  console.log(result);
}
