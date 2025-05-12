const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
    .toString()
    .trim()
    .split("\n");


const A= input[0];
const arr= input[1].split(' ').map(Number);

/*
1. 아이디어
수열을 순회하면서 배열의 마지막요소와 비교후 크면  결과 배열에 push 작으면 결과배열을 이진탐색을 통해 현재 타겟이 위치할곳을 찾은후 기존의 원소와 바꿔준다.
이과정을 반복한후 결과배열의 길이를 출력
2. 시간복잡도
O(nlogn)
3. 자료구조
결과 배열

 */

let result= [];

result.push(arr[0]);

for(let i=1;i<arr.length;i++){

        if(arr[i] > result[result.length-1]){
            result.push(arr[i]);
        }else{
            // 이진탐색
            let left=0;
            let right= result.length-1;

            while(left<right){
                const mid= Math.floor((left+right)/2);

                 if(result[mid]<arr[i]){
                    left= mid+1;
                }else{
                    right=mid;
                }
            }
            result[left]= arr[i];
    }
}
console.log(result.length)
