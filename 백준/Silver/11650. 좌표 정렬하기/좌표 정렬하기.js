const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
    .toString()
    .trim()
    .split('\n');


const N= Number(input.shift());

const location= input.map(el=>el.split(' ').map(Number));

/*
1. 아이디어
x좌표순으로 오름차순, 같으면 y좌표순으로 오름차순


2. 시간복잡도
O(nlogn)

3.자료구조
 */


location.sort((a,b)=>{
    if(a[0] >b[0]){
        return 1;
    }else if(a[0]<b[0]){
        return -1;
    }else{
        return a[1]<b[1] ? -1 : 1;
    }
})

const result =location.map(el=>el.join(' '));
console.log(result.join('\n'));
