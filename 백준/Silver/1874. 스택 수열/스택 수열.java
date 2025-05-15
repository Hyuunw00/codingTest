import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        
        int n= Integer.parseInt(br.readLine());
        Stack<Integer> stack= new Stack<>();
        
                   
        int num=1;
        boolean result =true;
        StringBuffer sb= new StringBuffer();
        
        for(int i=0;i<n;i++){
            int targetNum = Integer.parseInt(br.readLine());

            if(num<=targetNum){
                while(num<=targetNum){
                  stack.push(num++);
                  sb.append("+\n");
                }
                stack.pop();
                sb.append("-\n");
            }else{
                int value= stack.pop(); 
                if(value > targetNum){
                    System.out.println("NO");
                    result= false;
                    break;
                }else{
                   sb.append("-\n");
                }
            }
        }
        if(result) System.out.println(sb.toString());
    }
}