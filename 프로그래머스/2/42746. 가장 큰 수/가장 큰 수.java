import java.util.*;

class Solution {
    public String solution(int[] numbers) {
       /*
       1. 아이디어
       numbers의 원소들을 문자형으로 변환
       두 원소를 비교할때 가장 왼쪽부터 비교해서 더 큰 값을 내림차순
        3과 30의 경우 3과 3을 비교하고 같으면 3과 0을 비교해서 큰값을 내림차순
       */
        
        String[] strArr= new String[numbers.length];
        
        for(int i=0;i<numbers.length;i++){
            strArr[i] = numbers[i]+"";
        }
        Arrays.sort(strArr, (a,b)->(b+a).compareTo(a+b));
        
        
        StringBuilder sb= new StringBuilder();
        
        for(String s : strArr){
            sb.append(s);
        }
        String result= sb.toString();
        if(result.charAt(0)=='0') return "0";
        else return result;
    }
}