function solution(record) {
    /*
    1. 아이디어
    유저의 아이디로 유저를 구분해야한다
    record를 전부 돌았을때 유저의 아이디에 어떤 닉네임이 남았는지 저장한다.(객체에)
    
    다시 record를 돌면서 유저 아이디에 맞는 닉네임을 mapping해준다. 
    결과에 출력되는 값은 Enter나 Leave일때만 남긴다.
    
    2. 시간복잡도
    max:O(nlogn)
    
    split메서드는 시간복잡도가 평균적으로 n이지만 사용하는 곳의 최대갯수가 3이기때문에
    n^2이여도 문제없음
    
    3. 자료구조
    userid와 nickname을 담을 객체
    result 배열
    */
    
    const user= {};
    
    const actions={
        'Enter':'들어왔습니다.',
        'Leave':'나갔습니다.',
    }
    
    const result=[]
    
    record.forEach(el=>{
       const [action,userId,nickname]= el.split(' ');
        
        if(nickname){
            user[userId]= nickname;
        }
        if(action!=='Change'){
            result.push([action,userId]);
        }
    })
    
    return result.map(([action,userId])=>{
        return `${user[userId]}님이 ${actions[action]}`;
    })
    
}