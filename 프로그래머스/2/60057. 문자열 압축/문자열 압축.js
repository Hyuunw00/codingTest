function solution(s) {
    /*
    1. 아이디어
    1~ s/2  단위로 잘랐을때 문자열 길이의 최솟값을 출력
    
    2. 시간복잡도
    O(n^3) = 못통과할것같은데...
    3. 자료구조
    */
    
    let min= Infinity;
    
    const halfLen= Math.floor(s.length/2);
    
    for(let i=1;i<=halfLen;i++){
        let copyString= '';
        let count=1;
        let value= s.slice(0,i);
        for(let j=i;j<s.length;j+=i){
            let currentValue= s.slice(j,j+i);
            if(value===currentValue) count++;
            else {
                copyString+= count===1 ? value : count + value;
                count=1;
                value=s.slice(j,j+i);
            }
        }
        copyString += count===1 ?  value: count + value ;
        min= Math.min(min, copyString.length);
    }
    return min===Infinity ? 1: min;
}