function solution(land) {
  /*
  1. 아이디어
  두번째 행부터 이전 행에서 자신의 열을 제외한 나머지 열중에 최댓값을 더한 값이 현재행에서는 
  최대가 되는 경우이다.
  따라서 DP로 해결해야한다.
  
  2. 시간복잡도
  O(n)
  
  3. 자료구조
  dp 이중배열
  */
 
  let dp= land;
    
  dp[0]= land[0];
    
  for(let i=1;i<land.length;i++){
        dp[i][0] +=  Math.max(dp[i-1][1],dp[i-1][2],dp[i-1][3]);
        dp[i][1] +=  Math.max(dp[i-1][0],dp[i-1][2],dp[i-1][3]);
        dp[i][2] +=  Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][3]);
        dp[i][3] +=  Math.max(dp[i-1][0],dp[i-1][1],dp[i-1][2]);
  }

    
  return Math.max(...dp[dp.length-1])
}
