/*
5
4 1 5 2 3
5
1 3 7 9 5
*/


import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        
        int n = Integer.parseInt(br.readLine());
        int[] nArr= new int[n];
         StringTokenizer st= new StringTokenizer(br.readLine());
        for(int i=0;i<nArr.length;i++){
            nArr[i] = Integer.parseInt(st.nextToken());
        }
        
         int m = Integer.parseInt(br.readLine());
         int[] mArr= new int[m];
        st= new StringTokenizer(br.readLine());
        for(int i=0;i<mArr.length;i++){
            mArr[i] = Integer.parseInt(st.nextToken());
        }
        
        // nArr 정렬
        Arrays.sort(nArr);
        StringBuilder sb =new StringBuilder();
        
        for(int i=0;i<mArr.length;i++){
            int target= mArr[i];
            
            int left =0;
            int right= n -1;
            boolean isBinary= false;
            while(left<=right){
                int mid= (left+right) / 2;
                if(nArr[mid]==target){
                    sb.append("1\n");
                    isBinary= true;
                    break;
                }
                else if(nArr[mid]>target){
                    right= mid-1;
                }else {
                    left= mid+1;
                }
            }
            if(!isBinary) sb.append("0\n");
        }
        
        System.out.println(sb.toString());
    }
   
}