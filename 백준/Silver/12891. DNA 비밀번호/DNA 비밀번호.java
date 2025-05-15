/*
9 8
CCTGGATTG
2 0 1 1

1. 아이디어
슬라이딩 윈도우 기법을 활용해서 초기A,C,G,T의 비율을 설정하고 n번 돌면서 A,C,G,T 비율을 최신화한후 만족하는지 확인
만족하면 count 증가
2. 시간복잡도
O(n*4) = 400만
3. 알고리즘

*/

import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());
        
        int S = Integer.parseInt(st.nextToken());
        int P = Integer.parseInt(st.nextToken());
        
        char[] arr= br.readLine().toCharArray();
           
        HashMap<Character, Integer> hm= new HashMap<>();
        hm.put('A', 0);
        hm.put('C', 1);
        hm.put('G', 2);
        hm.put('T', 3);
        
        st= new StringTokenizer(br.readLine());
        int[] answer= new int[4];
        for(int i=0;i<4;i++){
            answer[i]= Integer.parseInt(st.nextToken());
        }
        
        int[] current= new int[4];
        int count= 0;
        for(int i=0;i<P;i++){
            int idx= hm.get(arr[i]);
            current[idx]++;
        }
        boolean isCorrect= true;
        for(int i=0;i<4;i++){
            if(answer[i]>current[i]){
                isCorrect= false;
                break;
            }
        }
        if(isCorrect) count++;

        for(int i=P;i<S;i++){
            int idx= hm.get(arr[i-P]);
            current[idx]--;
            current[hm.get(arr[i])]++;
            boolean isPerfect= true;
            for(int j=0;j<4;j++){
                if(answer[j]>current[j]){
                isPerfect= false;
                break;
                }
            }
            if(isPerfect) count++;
        }
        
        System.out.println(count);
    }
}













