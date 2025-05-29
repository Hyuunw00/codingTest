import java.util.*;
import java.io.*;

/*
1. 아이디어
배열을 오름차순 정렬해놓고 투포인터 방식으로 진행
두 값이 같으면 count 증가시키고 left+1 , right+1
안같으면 left에 거리 4, right에 3,2  또는 left에 3, right에 2 주면서 조건에 맞는지 체크한다. (총 3가지 경우)


2. 시간복잡도
max: O(nlogn)
3. 자료구조

*/

class Solution {
    public long solution(int[] weights) {
        HashMap<Double,Integer> hm =new HashMap<>();
        Arrays.sort(weights);
        long count=0;
        
        for(int i: weights){
            double a= i *1.0 ;
            double b= (i *2.0 )/ 3.0;
            double c =(i *2.0) / 4.0;
            double d =(i *3.0 )/ 4.0;
            
            if(hm.containsKey(a)) count+= hm.get(a);
            if(hm.containsKey(b)) count+=hm.get(b);
            if(hm.containsKey(c)) count+=hm.get(c);
            if(hm.containsKey(d)) count+=hm.get(d);
            
            hm.put( i*1.0 , hm.getOrDefault((i*1.0),0) + 1);
        }
        return count;
    }
}