
import java.util.*;
import java.io.*;

/*
 1. 아이디어
 A->B까지 가는 최단 경로를 구하는 문제이므로 다익스트라 문제
즉 어떤 시작 노드에서 어떤 노드까지 가는데 걸리는 최단 거리 구하기

 2. 시간복잡도
O(Elogv) = 10만 * 3 = 30만

3. 자료구조
거리배열 : int[]
최소힙 : PriorityQueue
도시, 버스 : int

 */
class Node implements Comparable<Node> {
    int vertex;
    int distance;

    public Node(int vertex,int distance){
        this.vertex= vertex;
        this.distance =distance;
    }
    @Override
    public int compareTo(Node other){
        return this.distance- other.distance;
    }
}

public class Main {
    static ArrayList<ArrayList<Node>> graph;
    static int[] dist;
    static int N,M;
    public static void main(String args[]) throws IOException{ 
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));

        N= Integer.parseInt(br.readLine());
        M= Integer.parseInt(br.readLine());

        graph= new ArrayList<>();   

        // 그래프 초기화
        for(int i=0;i<=N;i++){
            graph.add(new ArrayList<>());
        }
        // 인접리스트 완성
        for(int i=1;i<=M;i++){
            StringTokenizer st= new StringTokenizer(br.readLine());
            int s= Integer.parseInt(st.nextToken());
            int e= Integer.parseInt(st.nextToken());
            int w= Integer.parseInt(st.nextToken());

            graph.get(s).add(new Node(e,w));
        }

        StringTokenizer st= new StringTokenizer(br.readLine());
        int startCity= Integer.parseInt(st.nextToken());
        int endCity= Integer.parseInt(st.nextToken());

        dijkstra(startCity);

        System.out.println(dist[endCity]);


    }

    static void dijkstra(int startNode){
        PriorityQueue<Node> pq = new PriorityQueue<>();
        dist= new int[N+1];
        Arrays.fill(dist,Integer.MAX_VALUE);
        dist[startNode] = 0;
        pq.add(new Node(startNode,0));


        while(!pq.isEmpty()){
            Node current= pq.poll();
            int currentVertex= current.vertex;
            int currentDistance= current.distance;

            if(currentDistance!= dist[currentVertex]) continue; //이미 더 짧은 거리로 해당 정점을 방문한 적이 있다면 무시함

            for(Node neighbor : graph.get(currentVertex)){
                int newDistance= currentDistance + neighbor.distance;
                if(dist[neighbor.vertex] > newDistance ) {
                    dist[neighbor.vertex] = newDistance;
                    pq.add(new Node(neighbor.vertex,newDistance));
                }
            }
        }
    }
    
}
