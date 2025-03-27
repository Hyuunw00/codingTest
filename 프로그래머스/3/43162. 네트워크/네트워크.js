function solution(n, computers) {
    
    let network =0;
    let visited= new Array(n).fill(false);
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i,visited,computers);
            network++;
        }        
    }
    
    function dfs(index,visted,computers){
        visited[index]= true;
        for(let i=0;i<computers.length;i++){
            if(visited[i]===false && computers[index][i]===1){
                dfs(i,visited,computers);
            }
        }
    }
    return network;
}
