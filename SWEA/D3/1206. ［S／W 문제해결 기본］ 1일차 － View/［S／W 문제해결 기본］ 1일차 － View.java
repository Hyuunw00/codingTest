
import java.util.*;
import java.io.*;

/*
 1. 아이디어
가장 쉬운 방법은 단순히 빌딩배열을 돌면서 해당 순서의 -2~ 해당 빌딩은 +2 까지 다시 돌면서 대소비교를 하고 크면 종료, 작으면 max값에 저장하는 것이다.
다 돈후, 빌딩의 높이에서 max를 빼준값이 세대 수 가된다.

 2. 시간복잡도
O(n^2)= 약 100만
 3. 자료구조
N<=1000
0<=높이<255
 */
public class Solution {
    public static void main(String[] args) throws IOException {

        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        for(int i=0;i<10;i++){
            int N= Integer.parseInt(br.readLine());
            int[] building= new int[N];
            StringTokenizer st= new StringTokenizer(br.readLine());
            for(int j=0;j<N;j++){
                building[j]= Integer.parseInt(st.nextToken());
            }
            
            int count= 0;
            for(int j=2;j<building.length-2;j++){
                int max= -1;
                for(int k=j-2;k<=j+2;k++){
                    if( k!=j && building[k] >= building[j]) {
                        max= -1;
                        break;
                    }
                    else if(k!=j && building[k] < building[j]){
                        max= Math.max(max,building[k]);
                    }
                }
                if(max>-1){
                    count+= building[j]  - max;
                }
            }

            System.out.println("#" +(i+1) + " " + count);
           

        }
    }
    
}
