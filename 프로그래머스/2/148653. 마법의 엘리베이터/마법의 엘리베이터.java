import java.util.*;
import java.io.*;

/*
1. 아이디어
X층에 있을때 일의 자릿수부터 가장 큰 자릿수까지 돌면서 0인지 확인하고 0이면 넘어간다.
0이 아닐경우 각자릿수가 5보다 크면 10-5만큼 count에 더하고 다음 자릿수에 1을 더해준다.
만약 자릿수가 10이되면 마찬가지로 0으로 바꾸고 다음 자릿수에 1을 더해준다.
이렇게 자릿수를 확인하면서 count값을 갱신시켜준다.

2. 시간복잡도
o(n) 
3. 자료구조
각자릿수 배열 int[] 

*/

class Solution {
    public int solution(int storey) {
        
        ArrayList<Integer> arr= new ArrayList<>();
        
        while(storey>0){
            arr.add(storey % 10);
            storey /= 10;
        }
        
        
        int count=0;
        boolean isAdd= false;
        
        
        for(int i=0;i<arr.size();i++){
            if(isAdd) arr.set(i,arr.get(i)+1);
            
            if(arr.get(i)==10){
                isAdd= true;
                 arr.set(i, 0);
            }
            else if(arr.get(i)<5){
                 count+=arr.get(i);
                 isAdd= false;
            }else if(arr.get(i)>5){
                count+= 10- arr.get(i);
                isAdd= true;
            }else { 
                int next= i+1 <arr.size() ? arr.get(i+1) : 0;
                if(next>=5) {
                    count+=5;
                    isAdd= true;
                }else{
                    count+=5;
                    isAdd= false;
                }
            }
        }
        
        return isAdd ? count+1 : count;


    }
}