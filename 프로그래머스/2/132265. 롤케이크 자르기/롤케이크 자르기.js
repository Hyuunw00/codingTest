function solution(topping) {
    /*
    아이디어
    전체 토핑 가짓수를 Map에 저장해놓는다.
    topping 갯수만큼 순회하면서 새로운 Map에 추가하고 size 파악
    이때 전체 토핑 가짓수 Map에서 토핑 제거후, size 파악
    각자의 size를 비교해서 같으면 count++
    
    시간복잡도
    O(n)
    자료구조
    Map
    
    */
    let count=0;
    const all=  new Map();
    for(let i of topping){
        all.set(i,(all.get(i) || 0)+1);
     }
    
    const cheolsu= new Set();
    for(let j of topping){
        cheolsu.add(j)
        all.get(j)===1 ? all.delete(j) :all.set(j,all.get(j)-1);
        if(cheolsu.size===all.size) count++;
    }
    return count;
    
    
}