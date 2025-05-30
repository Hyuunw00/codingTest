import java.io.*;
import java.util.*;


public class Main {
    public static int[] arr;
    public static  int[] result;
    public static int min= Integer.MAX_VALUE;
    public static void main(String args[]) throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));

        int N= Integer.parseInt(br.readLine());
        StringTokenizer st= new StringTokenizer(br.readLine());
        arr= new int[N];
        for(int i=0;i<arr.length;i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(arr);

        int start =0;
        int end= arr.length-1;
        int minValue= Integer.MAX_VALUE;
        int[] result= new int[2];

        while(start<end) {
            int value= arr[start]+ arr[end];
            if(minValue> Math.abs(value)){
                result[0]= arr[start];
                result[1]= arr[end];
                minValue= Math.abs(value);
            }
            if(value > 0){ 
                end--;
            }else if(value <0){
                start++;
            }else{
                break;
            }
        }
        
        StringBuilder sb= new StringBuilder();

        sb.append(result[0]).append(" ").append(result[1]);
        System.out.println(sb);
    }
   

}
