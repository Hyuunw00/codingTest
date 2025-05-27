import java.util.*;
import java.io.*;

/*
1. 아이디어
sequence는 기본적으로 오름차순되어있다.
투포인터 기법을 이용해서 sequence를 돌면서 합이 k를 만족하면
배열에  {startIndex, endIndex, length: endIndex+1 -startIndex} 이런형태로 저장한다.
이후 배열을 조건에 맞게 정렬한후 가장 앞에 있는 원소의 endIndex, startIndex를 결과배열에 저장후 반환

2. 시간복잡도
max:O(nlogn)
3. 자료구조
배열의 크기: int[]
배열 원소: int
원소의 합: int

*/
class Third {
    int startIndex;
    int endIndex;
    int length;
    
    public Third(int startIndex,int endIndex,int length){
        this.startIndex= startIndex;
        this.endIndex= endIndex;
        this.length= length;
    }
}

class Solution {
    public int[] solution(int[] sequence, int k) {
        
        int start=0;
        int end= 0;
        int sum= sequence[0];
        
        ArrayList<Third> list= new ArrayList<>();
        
        while(start<=end && end<sequence.length){
            if(sum==k) {
                list.add(new Third(start,end, end+1-start));
                sum-=sequence[start];
                start++;
            }
            else if(sum>k){
                sum-=sequence[start];
                start++;
            }else{
                end++;
                if(end<sequence.length) sum+=sequence[end];
            }
        }
        Collections.sort(list, (a,b)-> a.length !=b.length  ? a.length-b.length  : a.startIndex - b.startIndex);
        
        int[] result= new int[2];
        
        result[0]= list.get(0).startIndex;
        result[1]= list.get(0).endIndex;
        return result;
    }

}