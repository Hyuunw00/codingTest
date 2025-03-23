function solution(progresses, speeds) {
    const deployResult= [];
    // [5, 10, 1, 1, 20, 1]
    
    // 1.각 기능마다 몇일만에 기능이 완성되는지 파악한다.
     const restDay= progresses.map((item,index)=>{
        return Math.ceil((100-item) / speeds[index]);
     })
    
    let count=1;
    let maxDay=0;
    // 2. 현재 기능 요일과 다음 기능의 요일 크기를 비교한다.
    for(let i=0;i<restDay.length;i++){
        
        if(Math.max(restDay[i],maxDay)>=restDay[i+1]){
            count++;
            maxDay= Math.max(restDay[i],maxDay);
        }
        else{
            deployResult.push(count);
            count=1;
        }
    }
    
    return deployResult;
}