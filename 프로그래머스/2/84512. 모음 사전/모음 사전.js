function solution(targetWord) {
 /*
 
 1. 아이디어
 A~ UUUUU 까지 모든 경우의 수를 배열에 저장해놓고
 주어진 word의 index를 파악한다. 
 순서를 구해야하기 때문에 +1해준다.
 
 2. 시간복잡도
 각자릿수마다 올 수 있는 경우의수는 6가지(아무 단어도 안쓸때 포함)이므로 단어를 만들 수 있는 전체 경우의 수는 6^5 
 3. 자료구조
 전체 단어 조합 배열
*/
    const totalWord= [];
    const alphabets= ['A','E','I','O','U','X'];
    
    let word='';
    for(let i=0;i<alphabets.length;i++){
        word='';
        makeWord(word,alphabets[i]);
    }
    
    function makeWord(beforeWord, alphabet){
        beforeWord+=alphabet;
        
        if(beforeWord.length===5) {
            totalWord.push(beforeWord);
            return;
        }
        for(let i=0;i<alphabets.length;i++){
            makeWord(beforeWord,alphabets[i]);
        }
    }
    const result= totalWord.map(word=>word.replaceAll('X',''));
    return [...new Set(result.sort())].indexOf(targetWord);
}
//AAAAA AAAAE AAAAI AAAAO AAAAU AAAAX  AAAEA AAAEE AAAEI AAAEO AAAEU



