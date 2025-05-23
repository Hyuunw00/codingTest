import java.util.*;
import java.io.*;

/*
1. 아이디어
어차피 가로의 길이는 100이므로 n^2의 시간복잡도도 괜찮다.

덤프횟수가 다될때까지 while문을 돌리며 반복한다
HashMap을 활용해서 상자 높이 : 상자 갯수 정의한다.
키를 돌면서  최대 최소를 구한후 최대 --, 최소 --한다.
만약 키가 0이라면 hashmap에서 제거한다.


2. 시간복잡도
max: O(n^2*10) = 약 1000만
3. 자료구조
가로= 100 = int
1<=상자 높이<=100 = int
1<=덤프횟수 <=1000 = int

3. 자료구조
hashmap
 */

public class Solution {
    public static void main(String args[]) throws Exception
	{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        for(int i=1;i<=10;i++){
            int N= Integer.parseInt(br.readLine());
            int[] boxes= new int[100];
            StringTokenizer st= new StringTokenizer(br.readLine());

            for(int j=0;j<boxes.length;j++){
                boxes[j] = Integer.parseInt(st.nextToken());
            }

            HashMap<Integer,Integer> hm = new HashMap<>();

            for(int k=0;k<boxes.length;k++){
                if(hm.get(boxes[k])==null) hm.put(boxes[k],0);
                hm.put(boxes[k],hm.get(boxes[k])+1);
            }

            int min;
            int max;

            while(true){
 
                min= Integer.MAX_VALUE;
                max= Integer.MIN_VALUE;

                for(int height: hm.keySet()){
                    if(height>max && hm.getOrDefault(height,0)>0) max= height;
                    if(height<min && hm.getOrDefault(height,0)>0) min= height;
                }

                 if(N==0) break;
                 hm.put(max,hm.get(max)-1); 
                 hm.put(min,hm.get(min)-1);
                 hm.put(max-1,hm.getOrDefault(max-1,0)+1);
                 hm.put(min+1,hm.getOrDefault(min+1,0)+1);      
                 N--;
            }

         
            System.out.println("#"+ i + " " +(max-min));
        }
        
    }
}
