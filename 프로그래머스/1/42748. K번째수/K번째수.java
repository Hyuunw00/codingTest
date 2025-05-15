import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
       
        int[] result= new int[commands.length];
        
        for(int c=0;c<commands.length;c++){
            int[] command= commands[c];
            int i = command[0];
            int j= command[1];
            int k= command[2];
            int[] newArr= Arrays.copyOfRange(array,i-1,j);
            Arrays.sort(newArr);

            result[c] = newArr[k-1];
        }
        return result;
    }
}