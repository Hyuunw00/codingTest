function solution(want, number, discount) {
     let count=0;
    for(let i=0;i<discount.length-9;i++){
        if(check(want,number,discount.slice(i,i+10)))  count++;
    }
    
    function check(want,number,filtered){
        
        const map =new Map();
        
        for (let item of filtered) {
            if (!map.has(item)) map.set(item, 0);
            map.set(item, map.get(item) + 1);
        }
 
        for(let j=0;j<number.length;j++){
            if(!map.get(want[j])) return false;
            if(map.get(want[j])<number[j]) return false;
        }
        return true;
    }
    return count;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"],[3, 2, 2, 2, 1],["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]  ))

