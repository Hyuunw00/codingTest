function solution(n, left, right) {

    const result=[];
    for(let i=left;i<=right;i++){
       const row= parseInt(i/n);
        const col= i%n;
        result.push(Math.max(row,col)+1)
    }
    console.log(result);
    return result;
}

// console.log(solution(3,2,5));
// console.log(solution(4,7,14));