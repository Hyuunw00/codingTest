/*
5 3
5 4 3 2 1
1 3
2 4
5 5
*/

import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());
        int n= Integer.parseInt(st.nextToken());
        int m= Integer.parseInt(st.nextToken());
        
       
        
        st= new StringTokenizer(br.readLine());
        int[] s= new int[n+1];
       
        for(int i=1;i<=n;i++){
            s[i]= s[i-1] + Integer.parseInt(st.nextToken());
        }
        
        
        for(int k=0;k<m;k++){
            st= new StringTokenizer(br.readLine());
            int i=  Integer.parseInt(st.nextToken());
            int j=  Integer.parseInt(st.nextToken());

           System.out.println(s[j]- s[i-1]);                
        }
    }
    
}