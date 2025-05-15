import java.util.*;
import java.io.*;

public class Main {
    
    public static ArrayList<Integer>[] graph;
    public static boolean[] visited;
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());
        
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        
        graph = new ArrayList[n+1];
        for(int i=0;i<=n;i++){
            graph[i] = new ArrayList<>();
        }
        for(int i=0;i<m;i++){
            st= new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            graph[start].add(end);
            graph[end].add(start);
        }
        visited= new boolean[n+1];
        int count=0;
         
        for(int i=1;i<=n;i++){
            if(!visited[i]){
              //dfs(i);
                bfs(i);
              count++;  
            } 
        }
        System.out.println(count);

    }
    
    public static void dfs(int node) {
        visited[node] = true;
        for(int i :graph[node]){
            if(!visited[i]){
                dfs(i);
            }
        }
    }
    public static void bfs(int node){
        Queue<Integer> queue= new LinkedList<>();
        visited[node]= true;
        queue.add(node);
        while(!queue.isEmpty()){
            int value= queue.poll();
                for(int i : graph[value]){
                     if(!visited[i]){
                        queue.add(i);
                        visited[i]= true;
                }
            }
         
        }
        
    }
}