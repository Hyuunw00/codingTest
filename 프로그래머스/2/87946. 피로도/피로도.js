function solution(k, dungeons) {
    let  max=0;

const isVisited= new Array(dungeons.length).fill(false);
travel(k,0); 
    
    
    //  1. 재귀함수를 사용해서 완전탐색 진행
    function travel(hp,count){
        for(let i=0;i<dungeons.length;i++){
            if(hp>=dungeons[i][0] && !isVisited[i]){
                isVisited[i]= true;
                travel(hp-dungeons[i][1],count+1);
                isVisited[i]= false;
            }
        }
        max= Math.max(max,count); // travel 재귀함수가 종료가될때마다 max값 최신화
    }
    return max;
}
console.log(solution(80,[[80,20],[50,40],[30,10]]))