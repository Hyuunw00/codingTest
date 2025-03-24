function solution(cacheSize, cities) {
    /*
    아이디어
    캐싱할 빈 배열을 하나 만든다.
    도시 이름 배열을 순회하면서 캐싱 배열에 들어있는지 비교한다.
    존재하면 +1하고 존재하지않으면 +5 후 캐싱배열을 최신화한다.
       
    시간복잡도
    도시배열은 최대 100000이고 cache배열은 최대 30이므로 이 문제는 적어도 O(n^2) 이하의 시간복잡도여야한다.
    그러나 n^3도 통과했다 -> 아마 총 연산횟수가 1억번안이라 가능한듯. 원래는 불가능
    
    알고리즘
    Queue 자료구조 활용
    */
    
    let runtime=0;
    const lowerCities= cities.map(city=>city.toLowerCase()); // 대소문자 구분없이
    const cache= [];
    
    if(cacheSize===0) return 5 * lowerCities.length;
    
    for(let i=0;i<lowerCities.length;i++){
        const cacheIndex= cache.indexOf(lowerCities[i]);
        
        if(cacheIndex!==-1){
            runtime++;
            cache.splice(cacheIndex,1);
        }
        else{
           if(cache.length>=cacheSize) cache.shift();
           runtime+=5;
        }
        cache.push(lowerCities[i]);
    }
    return runtime;
}