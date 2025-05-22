import java.util.*;
import java.io.*;
/*
1. 아이디어
결과배열이 비어있으면 그냥 넣고,
원소가 존재하면 가장 끝에있는 원소와 현재 문자를 비교해서 현재원소가 더크면 결과배열에서 하나 꺼낸다.
더이상 만족하지 않을때 까지 반복한다. 이렇게 반복하면 결과배열은 큰숫자기준으로 정렬된다.

2. 시간복잡도
max:O(nlogn)

3. 자료구조
결과배열: 100만 = ArrayList
*/
class Solution {
    public String solution(String number, int k) {
        
        ArrayList<Integer> result= new ArrayList<>();
        
        for(char c : number.toCharArray()){
            int value= c- '0';
            while(k>0 && result.size()>0 && result.get(result.size()-1) < value){
                result.remove(result.size()-1);
                k--;
            }
            result.add(value);
        }  
        
       StringBuilder sb= new StringBuilder();
        
        for(int i=0;i<result.size()-k;i++){
            sb.append(result.get(i));
        }
        return sb.toString();

    }
}