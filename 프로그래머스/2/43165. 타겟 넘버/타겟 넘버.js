function solution(numbers, target) {
    
    let count=0;
    
    dfs(0,0);
    
    function dfs(index,sum){
        if(index===numbers.length) {
            if(target===sum) {
                count++;
            }
            return;
        }
        dfs(index+1,sum+numbers[index]);
        dfs(index+1,sum-numbers[index]);
        
    }
    return count;
}
