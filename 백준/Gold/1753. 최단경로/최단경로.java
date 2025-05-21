import java.util.*;
import java.io.*;

class Node implements Comparable<Node> {
    int vertex;
    int distance;

    public Node(int vertex, int distance) {
        this.vertex =vertex;
        this.distance =distance;
    }
    @Override
    public int compareTo(Node other) {
        return this.distance - other.distance;
    }
   
}
public class Main {
    private static  ArrayList<Node>[] graph;
    private static  int[] distances;
    private static  int V,E,K;
    public static void main(String args[]) throws IOException{
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st= new StringTokenizer(br.readLine());
        
        V= Integer.parseInt(st.nextToken());
        E= Integer.parseInt(st.nextToken());

        st= new StringTokenizer(br.readLine());
        K=  Integer.parseInt(st.nextToken()); // 1

    
        graph= new ArrayList[V+1];
        // 그래프 초기화
        for (int i = 0; i <= V; i++) { 
                graph[i]= new ArrayList<>();
        }
        // 인접리스트 만들기
        for(int i=1;i<=E;i++){
            st= new StringTokenizer(br.readLine());
            int u= Integer.parseInt(st.nextToken());
            int v= Integer.parseInt(st.nextToken());
            int w= Integer.parseInt(st.nextToken());
            graph[u].add(new Node(v,w));
        }

        dijkstra(K);

        StringBuilder sb= new  StringBuilder();

        // 1~V번 노드 출력
        for(int i=1;i<=V;i++){
            if(distances[i]==Integer.MAX_VALUE) sb.append("INF\n");
            else sb.append(distances[i]).append("\n");
        }

        System.out.println(sb);


    }

    public  static void dijkstra(int startVertex){
            PriorityQueue<Node> pq=  new PriorityQueue<>();
            distances= new int[V+1];
            boolean[] visited= new boolean[V+1];
            Arrays.fill(distances,Integer.MAX_VALUE);
            distances[startVertex]  = 0;
            pq.add(new Node(startVertex,0));

            while(!pq.isEmpty()){
                Node current=  pq.poll();
                int currentVertex= current.vertex;
                int currentDistance= current.distance;  
                
                if(visited[currentVertex]) continue;
                visited[currentVertex] =true;

                for(Node neighbor : graph[currentVertex]){
                    int newDistance= neighbor.distance + currentDistance;

                    if(newDistance< distances[neighbor.vertex]){
                        distances[neighbor.vertex] = newDistance;
                        pq.add(new Node(neighbor.vertex,newDistance));
                    }
                }

            }
    }
}
