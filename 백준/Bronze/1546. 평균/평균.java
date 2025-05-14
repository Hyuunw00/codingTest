/*
3
40 80 60

점수들중 가장 큰 값을 찾고
점수 배열을 돌면서 계산된 결과를 sum값에 더해주기
sum을 점수 갯수만큼 나누기
*/
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
  public static void main(String args[]) throws  IOException {
      BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

      
      int n = Integer.parseInt(br.readLine());
      int[] arr= new int[n];
      StringTokenizer st= new StringTokenizer(br.readLine());
              
      int max=-1;
      int sum=0;
      for(int i=0;i<n;i++){
          arr[i]= Integer.parseInt(st.nextToken());
          max= Math.max(max,arr[i]);
          sum+=arr[i];
      }
      
      double result= sum *100.0 / max / n;
      System.out.println(result);
  }
}


