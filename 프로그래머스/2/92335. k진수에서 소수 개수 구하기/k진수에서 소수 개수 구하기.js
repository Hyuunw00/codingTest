function solution(n, k) {
   /*
   1. 아이디어
   주어진 수 n을 k진수로 변환한다.
   0을 기준으로 split('');
   배열의 요소를 돌면서 요소를 10진수로 바꿨을때 소수인지 판별
   소수면 결과배열에 추가 
   결과배열 갯수 반환
   
   2. 시간복잡도
   O(n)
   
   
   3. 자료구조

   */
    const translation= n.toString(k);
    
    const arr= translation.split(0).filter(item=> item!=='');
    let count=0;

    for(let i=0;i<arr.length;i++){
        const num= Number(arr[i]);
        if(isPrime(num)) count++;
    }
    
    function isPrime(num){
        if(num===1 ) return false;
        
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i ===0) return false;
        }
        return true;
    }
    return count;
}   