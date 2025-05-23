import java.util.*;
import java.io.*;

/*
 1. 아이디어
 줄마다 문자열을 받아오면서 start,end 를 설정한다. 초기에는 가운데값을 start,end로 설정
start,end가 같으면 sum에 하나만 더한다.
아닐경우 start~end까지 값을 sum에 더한다.

 2. 시간복잡도
O(n)
 3. 자료구조
총합 변수
시작, 끝 변수
 */

public class Solution{
    public static void main(String args[]) throws Exception {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        for(int i=1;i<=T;i++){
            int N= Integer.parseInt(br.readLine());
            
            int start= N/2;
            int end= N/2;
            int sum=0;
            int move= 1;

            for(int j=0;j<N;j++){
                String  str= br.readLine();

                if(start==end){
                    sum+=str.charAt(end)-'0';
                }else{
                    for(int k=start;k<=end;k++){
                        sum+=str.charAt(k)-'0';
                    }
                }
                if(start-1<0 && end+1>=N) {
                   move= -1;
                }
                start-=move;
                end+=move;
             
               
            }

            System.out.println("#"+i+" "+sum);
        }

    }
}
