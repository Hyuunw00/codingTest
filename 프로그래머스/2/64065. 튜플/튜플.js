function solution(s) {
    
    
    // 순서가 유지되면서 중복이 없는 튜플들을 집합 {} 로 모아서 표현할 수 있다. 
    // 집합의 원소는 순서가 바뀌어도 상관없다.
    
    // 그렇지만 집합안의 원소의갯수가 1개일 경우 그 값은 무조건 튜플의 제일 앞 값이다.
  
    // 1. s를 배열화시켜서 집합의 원소갯수가 작은 순으로 정렬한다.
    // 이걸 어떻게 배열화시키지?
    
    const sArr= s.split('},{');
    const newArr= sArr.map((item,index)=>{
        return item.replace(/[{}]/g, "");;
    })
    
    // 2.배열을 순회하면서 숫자의 길이가 적은 순으로 정렬한다.
    const  sortedArr= newArr.map(item=>item.split(',')).sort((a,b)=>a.length-b.length);
    

    // 3. 정렬된 배열을 전부 하나로 합친 후, 중복을 제거해준다.
    const result= sortedArr.flat().map(Number);
    return [...new Set(result)];
    
    
}