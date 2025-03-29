function solution(number, k) {
    /*
    1.아이디어
    자릿수와 상관없이 k개를 제거했을때 숫자의 자릿수는 모두 동일하므로
    가장 작은 숫자부터 제거해야한다.
    그러나.. 가장작은 숫자부터 제거했을때 반례가 존재함
    
    아직 k가 0보다 클때 담겨있는 값의 가장 뒷 값이 현재 값보다 작을 경우가 생기면 안된다.(최대가 아니므로)
    numbers배열을 돌면서 k>0 && result의 마지막 값이 현재값보다 작으면 pop() , k--
    조건을 만족하지 않을때까지 반복
    이후 현재값 push
    
    2. 시간복잡도
    n
    3. 자료구조
    결과값을 담을 stack

    */
    const result =[];
    
    for(let current of number){
        while(k>0 && result[result.length-1] < current){ 
            result.pop();
            k--;
        }
        result.push(current);
    }
    return result.splice(0,number.length-k).join('');
    
}