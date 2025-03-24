function solution(myString) {
    /*
    아이디어
    정규표현식과 math 메서드를 활용해서 x만 빼고 뽑아낸다. 
     
    
    시간복잡도
    O(n+nlogn) = O(nlogn);
    
    알고리즘
    정렬 알고리즘
    */
    
    const newArr= myString.match(/[^x]+/g);
    
    return newArr.sort();
    
}