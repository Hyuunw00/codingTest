import java.util.*;
import java.io.*;


/*
 1. 아이디어
 N배열의 크기가 최대 50만이고, 찾아야할 타겟숫자배열의 크기가 최대 1000만이기때문에 시간복잡도는 O(nlogn) 이하여야한다.
 N배열을 오름차순 정렬한다.
 타겟 숫자배열을 돌면서 이진탐색을 돌리는데 lower_bound 한번, upper_bound 한번  총 2번 돌린다.
 얻은 인덱스의 차를 구한다.

2. 시간복잡도
max:O(nlogn)

3. 자료구조
n배열 : int[]
타겟배열 : int[]
 */

public class Main {
    public static int[] nArr;
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        int N= Integer.parseInt(br.readLine());
        StringTokenizer st= new StringTokenizer(br.readLine());
        nArr= new int[N];
        for(int i=0;i<N;i++){
            nArr[i]= Integer.parseInt(st.nextToken());
        }


        int M= Integer.parseInt(br.readLine());
         st= new StringTokenizer(br.readLine());
        int[] targetArr= new int[M];
        for(int i=0;i<M;i++){
            targetArr[i]= Integer.parseInt(st.nextToken());
        }

        Arrays.sort(nArr);

        StringBuilder sb= new StringBuilder();
        for(int i=0;i<targetArr.length;i++){
            int start= lowerBoundSearch(targetArr[i]);
            int end= upperBoundSearch(targetArr[i]);
            sb.append(end-start + " ");
        }

        System.out.println(sb);

    }
    public static int lowerBoundSearch(int target){
        int left=0;
        int right= nArr.length-1;

        while(left<=right){
            int mid= (left+right)/2;

            if(nArr[mid]>=target){
                right= mid-1;
 
            }else{
                left= mid+1;
            }
        }

        return left;

    }
    public static int upperBoundSearch(int target){
        int left=0;
        int right= nArr.length-1;

        while(left<=right){
            int mid= (left+right)/2;

            if(nArr[mid]<=target){
                left= mid+1;
               
            }else{
                right= mid-1;
            }
        }
        return left;

    }
}
