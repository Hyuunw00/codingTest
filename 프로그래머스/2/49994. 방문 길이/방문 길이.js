function solution(dirs) {
    /*
    1. 아이디어
    set에다 각 좌표마다 지나간 경로를 문자열화해서 저장.(중복 생략)
    만약 해당 좌표에서 이동한 결과가 경계선을 넘어가면 pass
    없다면 set에 추가. 이때 전 후 좌표값을 서로 반대로하여 총 두번 더해줘야한다.
    왜냐하면 반대편 좌표에서 온 경로도 결국 이동한 경로이기 때문이다. 
    나중에 set의 크기를 2로 나눠주면 된다.
    
    2. 시간복잡도
    O(n^2)
    3. 자료구조
    Map
    */
    
    const keyboard= {
        'U' : [0,1],
        'L' : [-1,0],
        'R' : [1,0],
        'D' : [0,-1],
    }
    let start= [0,0]
    const set= new Set();
    for(let i of dirs){
        let nowX= start[0] + keyboard[i][0];
        let nowY= start[1] + keyboard[i][1];
        
        if(nowX<-5 || nowX>5 || nowY >5 || nowY <-5){
            continue;
        }    
        set.add(""+start[0] + start[1] + nowX +nowY);
        set.add(""+nowX +nowY + start[0] + start[1]);
        start= [nowX,nowY];
    }
    
    return set.size/ 2;    
}