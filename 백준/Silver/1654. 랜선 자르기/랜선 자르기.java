import java.util.*;
import java.io.*;


/*
 1. 아이디어
 가지고 있는 K개의 랜선들을 ?로 잘랐을때 나오는 렌선의 갯수가 N개 이상 나올때 자를 수 있는 렌선의 최댓값 찾기
 자를 수 있는 렌선의 길이는 1~ K개의 랜선중 최대 길이이다.
 렌선의 길이를 이진탐색하면서 잘랐을때 나오는 같은 길이의 렌선 갯수가 N개 이상인지 체크하고 N개 이상이면 렌선의 길이를 늘리고 최댓값 갱신 
 작으면 렌선의 길이를 줄인다.

 2. 시간복잡도
 O(nlogn)

 3. 자료구조
 가지고 있는 렌선의 갯수 K <=10만: int
 가지고 있는 렌선의 길이 <=10억 : int
 만들 렌선의 갯수 N<=100만: int

 */

public class Main {
    public static int[] kArr;
    public static int N;
    public static void main(String args[]) throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());

        int K= Integer.parseInt(st.nextToken());
        N= Integer.parseInt(st.nextToken());

        kArr = new int[K];

        for(int i=0;i<K;i++){
            kArr[i]= Integer.parseInt(br.readLine());
        }
        Arrays.sort(kArr);

        long result= binarySearch();

        System.out.println(result);


    }
    public static long binarySearch(){
        long left= 1;
        long right= kArr[kArr.length-1];
        long max=0;

        while(left<=right){
            long mid =(left+right)/2;

            int count=0;
            for(int i=0;i<kArr.length;i++){
                count += kArr[i] / mid;
            }

            if(count>=N){
                max= Math.max(max,mid);
                left= mid+1;
            }else{
                right= mid-1;
            }
        }

        return max;
    }
}
