function solution(myString) {
    /*
    아이디어
     x를 기준으로 myString을 split한다. 
     split된 배열을 사전순으로 정렬한다.
    
    시간복잡도
    O(n+nlogn) = O(nlogn);
    
    알고리즘
    정렬 알고리즘
    */
    
    const newArr= myString.split('x').filter(item=>item!=='');
    
    return newArr.sort();
    
}