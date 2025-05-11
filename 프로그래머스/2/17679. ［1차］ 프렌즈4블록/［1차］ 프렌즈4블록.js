function solution(m, n, board) {
    /*
    1.아이디어
    board를 이중배열로 변환
    이중베열을 돌면서 2x2를 만족하는 위치 찾기
    만족하는 위치가 있다면 해당위치의 값을 0으로 변환
    
    이중배열 제일 밑에서부터 시작해서 0이 있는 위치에 끌어올수있는 값이 있는지 체크하고 끌어오기
    
    2. 시간복잡도
    구현능력이 중요하기 때문에 크게 신경 X
    3. 자료구조
    이중 배열
    */

  board = board.map((v) => v.split(""));

  while (true) {
    const arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          arr.push([i, j]);
        }
      }
    }
    if (!arr.length) {
      return [].concat(...board).filter((v) => !v).length;
    }

    for (let i = 0; i < arr.length; i++) {
      const col = arr[i][0];
      const row = arr[i][1];
      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    }

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
}
}