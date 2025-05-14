import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        
        int n= Integer.parseInt(br.readLine());
        
   
        int count= 1;
        
        int start=1;
        int end=1;
        int sum= 1;
        while(start<n){
            if(sum<n){
                end+=1;
                sum+=end;
            }else if(sum>n){
                sum-=start;
                start+=1;
            }else if(sum==n){
                count++;
                sum-= start;
                start+=1;
            }
        }
        System.out.println(count);
    }
}