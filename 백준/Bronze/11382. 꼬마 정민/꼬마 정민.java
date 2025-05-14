import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Main {
    public static void main(String[] args)throws IOException{
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in) );
        String[] nums = br.readLine().split(" ");
          long a= Long.parseLong(nums[0]);
          long b= Long.parseLong(nums[1]);
          long c= Long.parseLong(nums[2]);
        System.out.println(a+b+c);
        
        }
}