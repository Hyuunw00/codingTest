class Solution {
    boolean solution(String s) {
        s=  s.toLowerCase();
        
        int pCount= 0;
        int yCount= 0;
        
        char[] c= s.toCharArray();
        
        for(char i :c){
            if(i=='p') pCount++;
            if(i=='y') yCount++;
        }
       
        return pCount==yCount ? true:  false;
        
    }
}