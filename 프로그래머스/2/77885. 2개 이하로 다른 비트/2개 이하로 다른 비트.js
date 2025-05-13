function solution(numbers) {
  /*
  1. 아이디어
  1개 또는 2개의 비트를 변경해서 각각의 수를 넘어서는 가장 작은 수를 구해야한다.
  
  1)주어진 값을 이진수로 변환하였을때 연속된 1로 이루어져 있다면 가장 왼쪽 1을 0으로 바꾸고 왼쪽에 있는 0을 1로 
  바꾼다.(2개 변환)
  
  2)만약 한개이상의 0이 존재하면 가장 우측에 있는 0을 1로 바꾼다.(1개 변환)
    
  예외사항) 111011 -> 111101
  2. 시간복잡도
  O(nlogn)
  3. 자료구조
  */
    const result= [];
    for(let i=0;i<numbers.length;i++){ // n
    
        const arr= [...numbers[i].toString(2)];
        const idx= arr.lastIndexOf('0');
        if(idx===-1){
            arr[0]= '0';
            arr.unshift('1');
        }else{
            arr[idx]= '1';
            if(arr[idx+1]){
                arr[idx+1] = '0';
            }
   
        }
        const value= arr.join('');
        result.push(parseInt(value,2));        
    }
    
    return result;

}