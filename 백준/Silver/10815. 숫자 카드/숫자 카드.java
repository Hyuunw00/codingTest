import java.util.*;
import java.io.*;

/*
 1.아이디어
 전형적인 타겟별 이진탐색 문제이다.
 M개의 타겟 숫자를 이진탐색을 통해 N배열에 존재하지는지 확인한다.

 2. 시간복잡도
O(nlogn) : 1000만 * 5 =약 5천만
 3. 자료구조
nArr 크기<= 50만 :int[]
nArr 원소 크기 <=1000만 : int
타겟Arr 크기<=50만 : int[]
타겟Arr 원소 크기 <=1000만 : int

 */

public class Main {
    public static void main(String args[]) throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st= new StringTokenizer(br.readLine());

        int[] nArr= new int[N];

        for(int i=0;i<nArr.length;i++){
            nArr[i] = Integer.parseInt(st.nextToken());
        }
        int M = Integer.parseInt(br.readLine());
         st= new StringTokenizer(br.readLine());

        int[] mArr= new int[M];

        for(int i=0;i<mArr.length;i++){
            mArr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(nArr);


        StringBuilder sb= new StringBuilder();
        for(int i=0;i<mArr.length;i++){
            int result= Arrays.binarySearch(nArr, mArr[i]);
            if(result>=0) sb.append("1" +" ");
            else sb.append("0" +" ");
        }

        System.out.println(sb);

    }
}
