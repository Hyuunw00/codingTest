import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException{
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        
        int n= Integer.parseInt(br.readLine());
        
        ArrayList<int[]> dp= new ArrayList<>();

        for(int i=0;i<n;i++){
            StringTokenizer st= new StringTokenizer(br.readLine());
            int[] row= new int[i+1];
            for(int j=0;j<i+1;j++){
                row[j] =  Integer.parseInt(st.nextToken());
            }
            dp.add(row);
        }


        for(int i=1; i<n;i++){
            int[] prevArr= dp.get(i-1);
            int[] curArr= dp.get(i);

            for(int j=0;j<curArr.length;j++){
                if(j==0) curArr[j] += prevArr[j];
                else if(j==prevArr.length) curArr[j]+= prevArr[prevArr.length-1];
                else{
                    curArr[j] += Math.max(prevArr[j-1],prevArr[j]);
                }
            }

            dp.set(i,curArr);
        }
      
        System.out.println(Arrays.stream(dp.get(dp.size()-1)).max().getAsInt());

     
    

    }
}
