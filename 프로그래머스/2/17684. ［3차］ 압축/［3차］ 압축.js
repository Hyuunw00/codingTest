function solution(msg) {
 /*
 1. 아이디어
 사전 배열을 하나 만든다.
 
 2. 시간복잡도
 O(N^2)
 3. 자료구조
 사전 배열
 결과 배열
 */
    const dictionary= ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   
    const result =[];
    while(msg.length){
       let w= msg[0];
        for(let i=1;i<msg.length;i++){
            if(!dictionary.includes(w+msg[i])) break;
            w+=msg[i];
        }
        result.push(dictionary.indexOf(w));
        msg= msg.slice(w.length);
        if(msg[0]) dictionary.push(w+msg[0]);
    }
    
    return result;
    
}
