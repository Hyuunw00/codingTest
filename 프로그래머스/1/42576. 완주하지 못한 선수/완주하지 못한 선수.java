import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        /*
        1. 아이디어
        참여자들을 돌면서 참여한 인원의 명수를 HashMap에 저장
        완주한자들을 돌면서 HashMap에 있으면 --;
        HashMap의 keySet을 돌면서 아직도 존재하면 그사람이 미완주자
        
        2. 시간복잡도
        O(logn)
        3. 자료구조
        HashMap
        */
        
        HashMap<String,Integer> hm = new HashMap<>();
        for(String p : participant){
            if(hm.get(p)==null) hm.put(p,0);
            hm.put(p,hm.get(p) +1);
        }
        
        for(String c : completion){
            if(hm.get(c) > 0) hm.put(c,hm.get(c) - 1);
        }

        String result="";
        for(String key : hm.keySet()){
            if(hm.get(key)>0) result= key;
        }
        return result;
    }
}