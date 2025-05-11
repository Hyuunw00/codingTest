const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
    .toString()
    .trim()
    .split("\n");

const N= Number(input.shift());
const request= input.shift().split(' ').map(Number);
const M= Number(input.shift());

/*
1. 아이디어
배정되는 상한선 금액의 범위는 1~ 요청 예산의 최댓값이다.
이 범위를 이진탐색을 통해 총 예산을 넘지않는 최대 예산을 구할 수 있다.

2. 시간복잡도
max: O(nlogn)
 */


// 오름차순 정렬
request.sort((a,b)=>a-b);

let left= 1;
let right=  Math.max(...request);

let result= 0;

while(left<=right){
    const mid = Math.floor((left+right)/2);
    const sum= request.reduce((prev,cur)=>{
     if(cur>mid) return prev +mid;
     else return prev+cur;
    },0);

    if(sum> M) {
        right=mid-1;
    }else {
        left= mid+1;
        result= mid;
    }
}

console.log(result);