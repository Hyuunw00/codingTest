function solution(n, t, m, p) {
    /*
    1. 아이디어
    전체 인원수와 튜브가 말해야하는 숫자를 곱해 전체 숫자를 미리 구한다.
    t번 돌면서 n진수에 맞는 값을 result 배열에 넣는다.
    
    2. 시간복잡도
    n
    3. 자료구조
    결과 배열
    
    
    */
    
    let i=1;
    let str='';
   while(t*m>=str.length){
       str+= (i===1 ? '0'+i.toString(n) :i.toString(n));
       i++;
   }
    const result=[];
    const newStr= str.slice(0,t*m);
    for(let i=p;i<=newStr.length;i+=m){
        result.push(newStr[i-1]);
    }
    return result.join('').toUpperCase();
}

