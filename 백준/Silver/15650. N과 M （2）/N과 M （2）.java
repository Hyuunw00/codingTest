
import java.io.*;
import java.util.*;

/*
1. 아이디어
1~N까지 수 중 중복되지않게 M개고르기, 이때 고른 수들은 오름차순
중첩for문을 활용해 수를 고를 수 없기 때문에 재귀함수 활용(이때 이전에 뽑은 값보다 큰값이어야한다)
뽑힌 값이 담긴 리스트의 크기가 M이 되면 return

2. 시간복잡도
1<M<=N<=8

3. 자료구조

*/
public class Main {
    static int N,K;
    static StringBuilder sb= new StringBuilder();

    public static void main(String args[]) throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st= new StringTokenizer(br.readLine());
         N= Integer.parseInt(st.nextToken());
         K= Integer.parseInt(st.nextToken());


        ArrayList<Integer>arr= new ArrayList<>();

        for(int i=1;i<=N;i++){
            recursive(i, arr);
            arr.clear(); // arr 초기화
        }

        System.out.println(sb);


    }   
    public static void recursive(int prevValue,ArrayList<Integer> arr){
        arr.add(prevValue);

        if(arr.size()==K) {
            for(int i=0;i<arr.size();i++){
                sb.append(arr.get(i)).append(" ");
            }
            sb.append("\n");
            return; 
        }

        for(int i=1;i<=N;i++){
            if(i<=prevValue) continue;
            recursive(i,arr);
            arr.remove(arr.size()-1);
        }
    }
}
