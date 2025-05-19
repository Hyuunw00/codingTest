import java.util.*;
import java.io.*;
/*
       1. 아이디어
        두 큐의 원소의 총합을 구한후 2로 나눈다
        만약 총합이 정수로 나눠떨어지지 않으면 -1 반환 
        
        각 큐의 원소 합을 비교해서 더 큰쪽에서 작업진행
        pop,insert될 원소가 총합/2보다 크면 -1 반환
        
        각 큐의 원소합이 같아지면 break
        2. 시간복잡도
        max:O(nlogn)
        원소의 합이 int 범위를 벗어날수있으므로 long타입 사용
        3. 자료구조
        queue
*/

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        Queue<Long> q1 = new LinkedList<>();
        Queue<Long> q2 = new LinkedList<>();
        
        long totalSum= 0;
        long q1Sum=0;
        long q2Sum=0;
        
        for(int i=0;i<queue1.length;i++){
            q1.add((long)queue1[i]);
            q1Sum+=(long)queue1[i];
  
        }
         for(int i=0;i<queue2.length;i++){
            q2.add((long)queue2[i]);
            q2Sum+=(long)queue2[i];
        }
        if((q1Sum+q2Sum) % 2!=0) return -1;
        
        long targetSum= (q1Sum+q2Sum) /2;
        int count=0;
        
        long maxMoves= q1.size() *2 + q2.size() *2;
        
        while(q1Sum!=q2Sum && count <=maxMoves){
            if(q1Sum>q2Sum){
                long value= q1.poll();
                if(value>targetSum) {
                    count= -1;
                    break;
                }
                q2.add(value);
                q1Sum-=value;
                q2Sum+=value;                
            }else{
                long value= q2.poll();
                if(value>targetSum) {
                    count =-1;
                    break;
                }
                q1.add(value);
                q2Sum-=value;
                q1Sum+=value;      
            }
            count++;
        }
       return q1Sum==q2Sum ? count :-1;
        
    }
}