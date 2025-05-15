/*
4 6
101111
101010
101011
111011

1. 아이디어
최단 경로로 (n,m)까지 이동 -> bfs
2. 시간복잡도
O(V^2) = 10000
3. 자료구조
이중 배열
*/

import java.util.*;
import java.io.*;

public class Main {
    public static int[][] map;
    public static int[][] visited;
    public static int count= 1;
    public static int n, m;
    public static void main(String args[]) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());
        
        n= Integer.parseInt(st.nextToken());
        m= Integer.parseInt(st.nextToken());
        
        map= new int[n][m];
        visited= new int[n][m];
        
        // map 채우기
        for(int row=0;row<n;row++){
            char[] charArr =  br.readLine().toCharArray();
            for(int col=0;col<m;col++){
                map[row][col]= charArr[col] -'0';
            }
        }
        
        bfs(0,0);
        System.out.println(count);
        
    }
    public static void bfs(int y,int x){

        int[] dy= {0,1,0,-1};
        int[] dx= {1,0,-1,0};
        Queue<int[]> queue= new LinkedList<>();
        visited[y][x] = 1;
        queue.offer(new int[] {y,x});

        while(!queue.isEmpty()){
        int len= queue.size();
            for(int i=0;i<len;i++){
                   int[] value= queue.poll();
                    int cury= value[0];
                    int curx =value[1];
                  for(int j=0;j<4;j++){
                    int ny= cury + dy[j];
                    int nx= curx + dx[j];
                    if(nx>=0 && nx<m && ny>=0 && ny<n && visited[ny][nx]==0 && map[ny][nx]==1){
                        if(nx==m-1 && ny==n-1) {
                            count++;
                            return;
                        }
                        queue.offer(new int[] {ny,nx});
                        visited[ny][nx]= 1;
                   }
                }       
            }
            count++;       
       }
     
        
    }
}













