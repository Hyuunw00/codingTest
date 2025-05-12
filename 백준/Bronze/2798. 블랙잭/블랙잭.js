const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
    .toString()
    .trim()
    .split("\n");

const [N,M]= input.shift().split(' ').map(Number);
const numArr= input[0].split(' ').map(Number);

/*
1. 아이디어
n개의 카드중에서 3장을 뽑는 경우의수를 구하려면 모든 카드를 3번  중복순회하면서 나머지 카드중에서 한장씩 뽑아야한다.


2. 시간복잡도
o(n^3) =약 100만
3. 자료구조

 */
let max= -1;


for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
        for(let k=j+1;k<N;k++){
                const sum= numArr[i] + numArr[j] + numArr[k];
                if(sum<=M){
                    max= Math.max(max,sum);
                }
            }
        }
}

console.log(max);