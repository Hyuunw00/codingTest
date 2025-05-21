
import java.util.*;
import java.io.*;

/*
1. 아이디어
k번연속되는 정수들의 합이 최대가 되는 값을 찾아야하므로
슬라이딩윈도우 방식을 활용
0~K-1번째 인덱스까지 합을 구한후 최대로 지정
1~N-K번까지 돌면서 최대값 비교후 갱신(이전 값 빼고 현재값 더해주는 방식)

2. 시간복잡도
max: O(nlogn)
2<=N<=10만
1<=K<=10만

3. 자료구조
정수 배열
 */
public class Main {
    public static void main(String args[])throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st= new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        st= new StringTokenizer(br.readLine());

        int[] arr= new int[N];
        for(int i=0;i<N;i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int sum= 0;
        for(int i=0;i<K;i++){
            sum+=arr[i];
        }
        int maxSum= sum;

        for(int i=1;i<=N-K;i++){
            sum= sum-arr[i-1]+ arr[i-1+K];
            maxSum = Math.max(maxSum,sum);
        }

        System.out.println(maxSum);

    }
    
}
