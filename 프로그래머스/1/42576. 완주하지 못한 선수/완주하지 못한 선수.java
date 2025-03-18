import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
         Arrays.sort(participant);
         Arrays.sort(completion);

         for(int i=0;i<completion.length;i++){
            if(!participant[i].equals(completion[i])) return participant[i];
         }
         return participant[participant.length-1];
    }

    public static void main(String[] args){
        String[] part= {"leo", "kiki", "eden"};
        String[] com = {"eden", "kiki"};

        Solution sol=  new Solution();
        System.out.println(sol.solution(part,com));
    }
}


