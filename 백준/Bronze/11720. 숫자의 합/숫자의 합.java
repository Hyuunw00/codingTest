import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
     public static void main(String args[]) throws IOException {
         BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
         //StringTokenizer st= new StringTokenizer(br.readLine());
         
         String n = br.readLine();
         String str= br.readLine();
         char[] arr= str.toCharArray();
         
         int sum= 0;
         for(char c : arr){
             sum+= c - '0';
         }
         System.out.println(sum);
         
     }
    
    
}