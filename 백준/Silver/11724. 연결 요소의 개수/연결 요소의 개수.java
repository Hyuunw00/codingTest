import java.util.*;
import java.io.*;

public class Main {
    
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());
        
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        
        List<List<Integer>> graph = new ArrayList<>();
        for(int i=0;i<=n;i++){
            graph.add(new ArrayList<>());
        }
        
        for(int i=0;i<m;i++){
            st= new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            graph.get(start).add(end);
            graph.get(end).add(start);
        }
        boolean[] visited= new boolean[n+1];
        int count=0;
         
        for(int i=1;i<=n;i++){
            if(!visited[i]){
              dfs(graph, i, visited);
              count++;  
            } 
        }
        
        System.out.println(count);

    }
    
    public static void dfs(List<List<Integer>> graph,int node,  boolean[] visited ) {
        visited[node] = true;
        for(int i :graph.get(node)){
            if(!visited[i]){
                dfs(graph, i, visited);
            }
        }
    }
}