
import java.util.*;
import java.io.*;

/*
 1. 아이디어
 분배할 수 있는 예산은 1~ 지방의 최대 예산 요청이 된다.
 분배할 수 있는 예산을 이진탐색하여 정해진 총액과 총 예산을 비교함을 반복해 최대한 총예산에 가까워지도록 예산을 분배한다.

 2. 시간복잡도
 O(nlogn)
 3. 자료구조
 지방 배열 : int[]
 지방 원소 : int
 총 예산 <=1억 : int

 */

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        int N= Integer.parseInt(br.readLine());


        StringTokenizer st =new StringTokenizer(br.readLine());
        int[] nArr= new int[N];
        for(int i=0;i<N;i++){
            nArr[i] = Integer.parseInt(st.nextToken());
        }
        int M= Integer.parseInt(br.readLine());

        Arrays.sort(nArr);

        long result= binarySearch(nArr,M);
        System.out.println(result);
    }
    
    public static  long  binarySearch(int[] nArr,int M){
        int left= 1;
        int right= nArr[nArr.length-1];
        long max =0;

        while(left<=right){
            int mid =(left+right) / 2;
            int sum=0;
            for(int i=0;i<nArr.length;i++){
                if(nArr[i] >= mid){
                    sum+=mid;
                }else{
                    sum+= nArr[i];
                }
            }

            if(sum <=M){
                max= Math.max(max, mid);
                left= mid+1;
            }else{
                right= mid-1;
            }
        }

        return max;
    }
}
