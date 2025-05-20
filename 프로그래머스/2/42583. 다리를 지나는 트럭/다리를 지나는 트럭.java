import java.util.*;
import java.io.*;


class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
         
        Queue<Integer> queue= new LinkedList<>();
        int sum=0;
        int time=0;
        
        for(int i=0;i<truck_weights.length;i++){
            int currentTruck =truck_weights[i];
            
            while(true){
                
                // 큐가 비어있는 경우
                if(queue.isEmpty()){
                    queue.add(currentTruck);
                    sum+=currentTruck;
                    time++;
                    break;
                }
                // 큐가 다리 크기만큼 다 찬경우
                else if(queue.size()==bridge_length){
                    sum-=queue.poll();
                }
                  // 큐가 다리 크기만큼 다 차지 않은 경우
                else{
                    if(weight>= sum + currentTruck){
                        queue.add(currentTruck);
                        sum+=currentTruck;
                        time++;
                        break;
                    }else{
                        queue.add(0);
                        time++;
                    }
                }
            }
            
            

            
        }

              return time+ bridge_length;
            
    }
}

/*
1. 아이디어
도착완료한 트럭 배열이 다 찰때까지 반복
다리를 지나는 중인  우선순위큐를 하나 만들어서 bridge_length와 비교, 지나는중인 트럭의 무게합을 weight와 비교
만족하면 새 트럭 추가, 만족안하면 pass
지나는 중인 배열은 time = bridge_lengh * n +1 때마다 한개 빠진다.
우선순위큐를 활용하여 {weight, endTime}형태로 저장하고 endTime이 짧은 순으로 우선순위를 구현한다.

2. 시간복잡도
max: O(nlogn);
3. 자료구조
우선순위큐
다리를 지나는중인 트럭 배열
도착완료한 트럭 배열
*/