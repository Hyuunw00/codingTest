function solution(order) {
 /*
 1. 아이디어
 
 
 2. 시간복잡도
 
 3. 자료구조
 보조 컨테이너 벨트 역할을할 stack 배열
 */
    
    
 let num=1;
 let targetIndex=0;
 let count=0;
 const stack=[];
    
 while(targetIndex<order.length){
     if(num === order[targetIndex]){
         count++;
         targetIndex++;
         num++;
     }else if(stack[stack.length-1]===order[targetIndex]){
         stack.pop();
         count++;
         targetIndex++;
     }else if( num < order[targetIndex]){
         stack.push(num);
         num++;
     }else{
         break;
     }
 }
    return count;
}