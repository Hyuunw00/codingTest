import java.io.*;
import java.util.*;


/*
 1. 아이디어
 적어도 M미터의 나무를 가져가기위한 절단기 높이의 최대값을 구하는 문제로
 그러한 절단기의 높이를 이진탐색으로 탐색하며 최대높이를 계속해서 갱신해준다.
 절단기 높이: 1 ~ 최대 나무 높이

 M미터의 나무가 잘리지 않았다면 절단기의 높이를 낮춰야하고, M미터 이상의 나무가 잘렸다면 최대높이를 갱신하고 절단기의 높이를 높인다.

 2. 시간복잡도
 max: O(nlogn)

 3. 자료구조
 나무의수 N: int
 가져갈 나무의 길이 M: int
 나무의 높이  : int 
 
 */

public class Main {
    public static int[] nArr;
    public static int M;
    public static void main(String  args[]) throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st= new StringTokenizer(br.readLine());
        int N= Integer.parseInt(st.nextToken());
        M= Integer.parseInt(st.nextToken());

        nArr =new int[N];
        st= new StringTokenizer(br.readLine());
        for(int i=0;i<N;i++){
            nArr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(nArr);

        int result= binarySearch();

        System.out.println(result);
    
    }
    public static int binarySearch(){
        int left= 0;
        int right= nArr[nArr.length-1];

        int height= 0;

        while(left<=right){
            int mid =(left+right)/2;
            long sum=0;
            for(int i=0;i<nArr.length;i++){
                if(nArr[i]>mid){
                    sum+=nArr[i]- mid;
                }
            }
            if(sum>=M){
                height= Math.max(height,mid);
                left= mid +1;
            }else{
                right= mid-1;
            }
        }
        return height;
    }
}
