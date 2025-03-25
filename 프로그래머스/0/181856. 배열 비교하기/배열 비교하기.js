function solution(arr1, arr2) {
   // 1. arr1과 arr2의 길이를 비교한다. 다르다면 1 또는 -1을 return
    if(arr1.length!==arr2.length) return arr1.length>arr2.length ? 1 : -1; 
    
    // 2. 길이가 같다면 arr1과 arr2의 요소합을 구한다.
    const totalArr1= arr1.reduce((prev,cur)=>prev+cur,0);
    const totalArr2= arr2.reduce((prev,cur)=>prev+cur,0);
    
    // 3. 요소의 합을 비교한다. 다르다면 1 또는 -1을 , 같다면 0을 return한다.
    return totalArr1>totalArr2 ? 1 : totalArr1<totalArr2 ? -1 : 0;
}