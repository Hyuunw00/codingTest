function solution(str1, str2) {
   /*   
   1. 아이디어
   각각의 문자열을 소문자화한다.
   각각의 문자열을 순회하며 집합을 구한다.(영문자이외의 값이들어오면 버린다.) 
   두 집합의 교집합을 구한다. (원소가 중복될 경우 min)
   두 집합의 합집합을 구한다. (원소가 중복될 경우 max)
   자카드 유사도를 구하고 *65536후 toFixed(1);
   
   2. 시간복잡도
   n
   3. 자료구조
   Map
   */
    const newStr1= str1.toLowerCase();
    const newStr2= str2.toLowerCase();
    const map1= new Map();
    const map2= new Map();
    
    let map1Count=0;
    let map2Count=0;
    for(let i=0; i<newStr1.length-1;i++){
        const value= newStr1[i]+newStr1[i+1];
        if(/[^a-z]/g.test(value)){
            continue;
        }
        map1Count++;
        map1.set(value,(map1.get(value) || 0)+1)
    }
    
    for(let i=0; i<newStr2.length-1;i++){
        const value= newStr2[i]+newStr2[i+1]
          if(/[^a-z]/g.test(value)){
            continue;
        }
        map2Count++;
        map2.set(value,(map2.get(value) || 0)+1)
    }
    
    if(map1Count===0 && map2Count===0) return 65536;
    
    // 교집합 구하기
    let intersect= 0;
    const map1Arr= [...map1.entries()];
    
    for(let i=0;i<map1Arr.length;i++){
        const [str1,count1]= map1Arr[i];
        if(map2.has(str1)){
            intersect+= Math.min(count1,map2.get(str1));
        }
    }
    
    // 합집합 구하기
    let union= map1Count+map2Count - intersect;
    
    return Math.floor((intersect/union)*65536);


}