const fs= require('fs');
const input= fs.readFileSync(process.platform==='linux'? "/dev/stdin" : "./test.txt").toString().trim();

const [N,M] = input.split(' ').map(Number);

/*
1. 아이디어
1~N까지 중에서 중복없이 M개 뽑은 모든 경우의수 출력

ex) 4 2 -> 1 2 3 4 중에서 순서를 유지하며 중복없이 2개 뽑기
1 2 / 1 3 / 1 4 / 2 1 / 2 3 /  ....

몇개 뽑는지에 따라 중첩 반복문의 횟수가 달라짐 -> 재귀함수 활용

2. 시간복잡도
m,n은 1~8이므로 시간복잡도 신경 X

3. 자료구조
 */

const numArr = Array.from({ length: N }, (_, idx) => idx + 1);
const result = [];

function recursion(arr) {
    if (arr.length === M) {
        result.push(arr.join(' '));
        return;
    }

    for (let num of numArr) {
        if (arr.includes(num)) continue;
        arr.push(num);
        recursion(arr);
        arr.pop();
    }
}

for (let num of numArr) {
    recursion([num]);
}

console.log(result.join('\n'));


