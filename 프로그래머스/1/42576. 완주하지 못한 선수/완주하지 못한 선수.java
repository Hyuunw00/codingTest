import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String result ="";
        HashMap<String, Integer> map = new HashMap<>();
        
        for (String player : participant) {
            map.put(player, map.getOrDefault(player, 0) + 1);
        }

       for (String player : completion) {
            map.put(player, map.get(player)-1);
        }

        for(String key : map.keySet()){
            if(map.get(key)!=0) {
                result= key;
                break;
            }
        }
        
        return result; 
    }

    public static void main(String[] args) {
        String[] participant = {"leo", "kiki", "eden"};
        String[] completion = {"eden", "kiki"};

        Solution sol = new Solution();
        System.out.println(sol.solution(participant, completion));  // 메서드 호출
    }
}