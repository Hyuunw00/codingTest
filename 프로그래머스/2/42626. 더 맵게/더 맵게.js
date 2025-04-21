function solution(scoville, K) {
  /*
  1. 아이디어
  힙 자료구조 활용
  2. 시간복잡도
  O(nlogn)
  3. 자료구조
  */
  
    class MinHeap{
        constructor(){
            this.values= [];
        }
        
        // 오름차순 정렬되도록 삽입
        push(value){
            this.values.push(value);
            let currentIndex= this.values.length-1;
            
            while(currentIndex>0){
                const parentIndex= Math.floor((currentIndex-1)/2);
              if (this.values[parentIndex] <= this.values[currentIndex]) break;
                const temp= this.values[currentIndex];
                this.values[currentIndex]= this.values[parentIndex];
                this.values[parentIndex]= temp;
                
                currentIndex= parentIndex;
            }
        }
        // 오름차순 정렬되도록 빼내기
        pop(){
            if(this.values.length===1) {
                return this.values.pop();
            }
            const minValue= this.values[0];
            this.values[0]=  this.values.pop();
            
            let currentIndex=0;
            let leftIndex= currentIndex  *2 +1;
            let rightIndex= currentIndex  *2 +2;
            
            while(this.values[currentIndex] > this.values[leftIndex] ||
                 this.values[currentIndex] > this.values[rightIndex]){
                
                if(this.values[leftIndex]> this.values[rightIndex]){
                    const temp = this.values[rightIndex];
                    this.values[rightIndex]= this.values[currentIndex];
                    this.values[currentIndex]= temp;
                    currentIndex = rightIndex;
                    
                }else{
                     const temp = this.values[leftIndex];
                    this.values[leftIndex]= this.values[currentIndex];
                    this.values[currentIndex]= temp;
                    currentIndex = leftIndex;
                }
                leftIndex=currentIndex *2 +1;
                rightIndex=currentIndex *2 +2;
            }
            return minValue;
        }
    }
    
    const heap =new MinHeap();
    let count=0;
    
    for(let i of scoville){
        heap.push(i);
    }
    
   while(heap.values.length>=2 && heap.values[0] <K){

       const firstMin= heap.pop();
       const secondMin= heap.pop();
       const result= firstMin + secondMin *2;

       heap.push(result);
       count++;
   }

    return heap.values[0] >=K ? count: -1;
}