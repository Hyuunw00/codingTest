function solution(files) {
    
    /*
    1. 아이디어
    배열 files를 각각 head,number,tail로 변환한다.
 
    
    head에서  대소문자 구분이 없기때문에 모두 소문자로 바꾼후 비교한다.
    number에서 숫자는 숫자형으로 변환후 비교해야한다.
    head,number까지 같으면 두 값은 원래 정렬순서대로 정렬한다.
    
    2. 시간복잡도
    max: O(n^2)
    */
    const isNumber= (el)=>el>='0' && el<='9';
    
    const newFiles= files.map(file=>{
        let [head,number,tail]= ["","",""];
        const arr= [...file];
        
        let i=0;
        let len= file.length;
        
        while(i<len && !isNumber(file[i]) ){
            head+=file[i];
            i++;
        }
        
        while(i<len && isNumber(file[i]) && number.length<5){
            number+=file[i];
            i++;
        }
        
        tail+=file.slice(i);
        
        return [head,number,tail];
    })
    


    newFiles.sort((a,b)=>{
        
        const [headA,numA]= [a[0].toLowerCase(),Number(a[1])];
        const [headB,numB]= [b[0].toLowerCase(),Number(b[1])];
        
        if(headA > headB){
            return 1;
        }else if(headA<headB){
            return -1;    
        }else{
            if(numA > numB){
                return 1;
            }else if(numA < numB){
                return -1;
            }else{
                return 0;
            }
        }
    });
    

    return newFiles.map(file=>file.join(''));
}
