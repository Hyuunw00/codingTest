function solution(skill, skill_trees) {
   /*
   1. 아이디어
  ex) CBDEAF
   1) 가능한 경우  : CB, CBD, CBDE,CBDEA, CBDEAF
    
   2) skill_trees에서 skill에 있지 않은 알파벳은 제거
   
   3) skill_trees 돌면서 가능한 경우 배열에 있으면 count++
   1. BCD / X
   2. CBD / O
   3. CB /  O
   4. BD / X
   
   2. 시간복잡도
    O(n^2)
   3. 자료구조
   가능한 스킬트리 배열 
   */
    
    const avail= new Set();
    const alphabet= new Set();
    
    let spell='';
    for(let s of skill){
        spell+=s;
        avail.add(spell);
        alphabet.add(s);
    }
    
   skill_trees=  skill_trees.map(skill=>[...skill].filter(s=>alphabet.has(s)).join(''))
    let count=0;
    for(let skill of skill_trees){
        if(avail.has(skill) || skill==='') count++;
    }
    return count;
}