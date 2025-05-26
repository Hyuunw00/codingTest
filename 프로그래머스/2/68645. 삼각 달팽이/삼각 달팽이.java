import java.util.*;
import java.io.*;

/*
1. 아이디어
반시계 방향으로 돌면서 이중배열의 원소를 채운후 이중배열을 하나의 배열로 풀어야한다
이중배열의 전체 크기는 n이고 각각의 배열의 크기는 1~n이 된다.
1부터 시작해서 원소를 집어넣고 방이 다 찰때까지 반복한다.
순방향일 겅우 
현재배열의 최대한 앞쪽에 수를 채우고 다음배열이 비어있다면 인덱스++, 다음 숫자를 다음배열의 최대한 앞에 넣는다.
비어있지않다면 현재배열이 다찰때까지 순차적으로 값을 넣어주고 역방향으로 전환 , 인덱스 --

역방향일 경우
현재배열의 최대한 마지막에 수를 채우고 다음 배열이 비어있다면 인덱스 -- 시키고 다음숫자를 다음배열의 최대한 마지막에 넣는다.

2. 시간복잡도
max: O(nlogn)
3. 자료구조
이중배열
*/

class Solution {
    public int[] solution(int n) {
        
        int[][] list= new int[n][n];

        int x=0;
        int y=0;
        int currentNum= 1;
        int[] dy= {1, 0, -1};
        int[] dx= {0, 1, -1};
        int direction = 0;
        
        
        for(int i=0;i<n*(n+1)/2;i++){
            list[y][x] = currentNum++;
            
            int ny = y + dy[direction];
            int nx=  x + dx[direction];
            
            if(ny>=n || nx>=n || ny<0 || nx<0 || list[ny][nx]!=0){
                direction = (direction + 1) % 3;
                ny= y+ dy[direction];
                nx= x+ dx[direction];
            }
            y= ny;
            x= nx;
        }
  
        int[] result= new int[n*(n+1)/2];
        int order=0;
       for(int i=0;i<n;i++){
           for(int j=0;j<list[i].length;j++){
               if(list[i][j] !=0) result[order++] =list[i][j];
           }
       }
        
        return result;
    }
}