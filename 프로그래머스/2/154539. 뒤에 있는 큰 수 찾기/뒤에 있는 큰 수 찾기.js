function solution(numbers) {
    /*
    1.아이디어
    -1로 초기화된 배열 생성
    다음 값이 현재 값보다 작을 경우 인덱스 저장하는 stack배열
    2.시간복잡도
    o(n)
    3.자료구조
    결과 배열
    */
    
    const result= new Array(numbers.length).fill(-1);
    const stack= [];
    
    for(let i=0;i<numbers.length;i++){
        while(stack.length && numbers[stack.at(-1)] <numbers[i]){
            result[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return result;
}   