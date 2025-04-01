const fs= require('fs');
const input= fs.readFileSync(process.platform==='linux'? '/dev/stdin':'./test.txt').toString().trim().split('\n');

const [K,N]= input.shift().split(' ').map(Number);
const lines= input.map(Number);

//---------------

/*
    1.아이디어
    K개의 렌선의 합을 N으로 나누어 평균적인 렌선의 길이를 구한다.
    렌선의 길이를 기준으로 K개의 렌선을 순회하면서 갯수를 구한다. 나온 결과와 N을 비교한다.

    2.시간복잡도
    n
    3.자료구조

 */

    const sum= lines.reduce((prev,cur)=>prev+cur);
    lines.sort((a,b)=>a-b);

    let min = 1;
    let max= Math.max(...lines);

    while(min<=max){
        const mid =Math.floor((min+max)/2);
        const count= lines.map(line=>Math.floor(line/mid)).reduce((prev,cur)=>prev+cur);

        if(count < N){
            max= mid-1;
        }
        else{
            min= mid+1;
        }
    }

    console.log(max);