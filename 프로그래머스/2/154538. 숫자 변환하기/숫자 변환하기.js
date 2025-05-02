function solution(x, y, n) {
    /*
    1. 아이디어
    연산할 수 있는 방법을 전부 적용시키고 queue에 집어넣은 다음 연산 횟수를 증가시킨다.
    queue에서 하나 빼내서 y와 같으면 끝
    
    2. 시간복잡도
    
    3. 자료구조
    queue 배열
    */
    
    
    const queue=[[x, 0]];
    let result = -1;
   const visited = new Set([x]); 
   let index=0;
   
    bfs();
    
    function bfs(){
        while(index <queue.length){
            const [cur,cnt]= queue[index++];
         
            if(cur===y){
                result = cnt;
                return;
            }
            const nexts= [cur+n, cur*2, cur*3];
            for(let next of nexts){
               if(next<=y && !visited.has(next)){
                visited.add(next);
                queue.push([next,cnt+1]);
              } 
            }
            
        }
    }

   return result 
    
}