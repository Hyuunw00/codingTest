function solution(want, number, discount) {
        const map= new Map();
//     1. 정현이가 구매할 음식을  Map 객체로 정리
        want.forEach((item,index)=>{
            map.set(item, (map.get(item) || 0)+number[index]);
        })
        let count=0;
//     2. discount를 순회하면서 want의 길이만큼의 요소들울 Map객체에 저장된 요소에서 하나씩 뺀다.
    
        for(let i=0;i<discount.length-want.length;i++){
            const selectedItems= discount.slice(i,10+i);
            const copy= new Map([...map]);
            for(let j=0;j<selectedItems.length;j++){
                  if(copy.get(selectedItems[j])){
                    copy.set(selectedItems[j],copy.get(selectedItems[j])-1);
                }
            }
             //     3. 다 뺐을 때 하나라도 1이 있으면 해당 x
            [...copy.values()].some(item=>item>0) ? count: count++;
        }
    
    return count;

}

console.log(solution(["banana", "apple", "rice", "pork", "pot"],[3, 2, 2, 2, 1],["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]  ))

