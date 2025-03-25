function solution(priorities, location) {
    
    // 1. priorities에 따른 인덱스를 저장할 배열을 만든다.
    const indexes= Array.from({length:priorities.length},(_,index)=>index);
    let count =1;
    
    // 2.  location과 index가 같을때까지 반복하면서 count값을 증가시킨다.
    while(true){
         const shiftPri= priorities.shift();
         const shiftIndex= indexes.shift();
        // priorities[0]가 우선순위가 젤 높다면
        const maxPri = Math.max(...priorities);
        if(shiftPri >= maxPri){
        // 만약 index값이 location이랑 같다면 return count
            if(shiftIndex===location) return count;
        // 같지 않으면 count++
         count++;
        }
        // 우선순위가 젤 높지 않다면
        else{
        priorities.push(shiftPri);
        indexes.push(shiftIndex);
        }
    }
    // 3. count값을 반환한다.
    return count;


}