
import java.util.*;
import java.io.*;

/*
 1. 아이디어
공유기 사이의 거리를 최대로하기위해서는 우선 양쪽 끝에 1개씩 설치하고 , left를 시작집인덱스, right을 끝집 인덱스 정의한다.
공유기를 전부 설치할때까지 반복하면서 mid 인덱스에 공유기를 설치하고 시작 또는 끝 인덱스를 재설정한다.
인덱스를 재설정하는 기준은 mid 인덱스의 좌표를 left,right 인덱스 좌표와 비교해서 설정한다.

 2. 시간복잡도
O(nlogn)
 3. 자료구조
 집 배열 : int[]
 집의 좌표 : int

 */

public class Main {
    public static int[] home;
    public static  int C,N;
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st= new StringTokenizer(br.readLine());

        N= Integer.parseInt(st.nextToken());
        C= Integer.parseInt(st.nextToken());

        home= new int[N];

        for(int i=0;i<N;i++){
            home[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(home);


        long result =binarySearch();

        System.out.println(result);

    }
    public static long binarySearch(){
        long left= 1;
        long right= home[N - 1] - home[0];
        long max= 0;

        while(left<=right){
          long mid= (left+right) / 2;
            if(canInstall(mid)){
                max= mid;
                left= mid+1;
            }else{
                right= mid-1;
            }
        }
        return max;
    }
    public static boolean canInstall(long d){
        int count=1;
        int last= home[0];

        for(int i=0;i<home.length;i++){
            if(home[i]-last >=d){
                last= home[i];
                count++;
            };
        }
        return count >=C ? true :false;
    }

}