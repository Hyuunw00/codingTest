function solution(targetWord) {
    const alphabet= ['A','E','I','O','U'];
    let flag=false;
    let count=0;
    dfs('');
    
  
    function dfs(cur){
        if(cur.length>5 || flag) return;
        if(cur===targetWord){
            flag=true;
            return;
        }
        count++;
        for(let i=0;i<alphabet.length;i++){
            dfs(cur+alphabet[i]);
        }
        
    }
    return count;
}



