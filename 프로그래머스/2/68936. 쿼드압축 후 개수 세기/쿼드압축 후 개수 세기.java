import java.util.*;
import java.io.*;
class Solution {
    private static int[] result;
    public static int[] solution(int[][] arr) {
       result= new int[2];
        quad(arr,0,0,arr.length);
        
        return result;
    }
    
    private static void quad(int[][] arr, int row, int col, int size){
        int value= arr[row][col];
        boolean canZip = true;
        // 압축여부 체크
        for(int y=row;y<row+size;y++){
            for(int x=col;x<col+size;x++){
                if(arr[y][x]!=value){
                    canZip= false;
                    break;
                }
            }
            if(!canZip) break;
        }
        if(canZip){
            if(value == 1) result[1]++;
            else result[0]++;
        }else{
            quad(arr,row,col,size/2);
            quad(arr,row+size/2,col,size/2);
            quad(arr,row,col+size/2,size/2);
            quad(arr,row+size/2,col+size/2,size/2);
            
        }
    }
}

/*
1. 아이디어
주어진 범위의 이중배열을 순회하는 재귀함수 생성해서 범위에 따라서 재귀함수 돌리기
2. 시간복잡도
O(2^n * 2^n *4) = 약 4백만
3. 자료구조
이중배열
결과배열
*/