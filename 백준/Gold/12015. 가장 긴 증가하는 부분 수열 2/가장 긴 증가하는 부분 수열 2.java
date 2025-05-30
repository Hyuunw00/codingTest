import java.util.*;
import java.io.*;

/*
 1. 아이디어

 배열을 순회하면서 현재 원소가 추가한 결과배열의 가장 우측 원소보다 크면 결과배열에 원소삽입
 만약 작다면 이진탐색을 통해 현재 위치에 맞는 곳으로 원소 삽입하고 원래 원소 삭제..

 
 2. 시간복잡도
 max:O(nlogn)

 3. 자료구조
 결과배열 :int[]
 */

public class Main {
    public static ArrayList<Integer> result;
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        int A= Integer.parseInt(br.readLine());
        int[] aArr= new int[A];
        StringTokenizer st= new StringTokenizer(br.readLine());
        for(int i=0;i<A;i++){
            aArr[i]  = Integer.parseInt(st.nextToken());
        }

        result= new ArrayList<>();

        result.add(aArr[0]);

        for(int i=1;i<aArr.length;i++){
            if(aArr[i] > result.get(result.size()-1)) result.add(aArr[i]);
            else if(aArr[i] < result.get(result.size()-1)){
                int index= binarySearch(aArr[i]);
                result.set(index, aArr[i]);
            }
        }

        System.out.println(result.size());


    }
    public static int binarySearch(int target){
        int left=0;
        int right= result.size()-1;
        while(left<=right){
            int mid= (left+right) / 2;
            
            if(result.get(mid) > target){
                right= mid-1;
            }else if(result.get(mid) < target){ 
                left= mid+1;
            }else{ 
                return mid;
            }
        }
        return left;
   
    }
}
