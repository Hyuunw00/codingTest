function solution(arr1, arr2) {
    const rows = arr1.length;       // arr1의 행 개수
    const cols = arr2[0].length;    // arr2의 열 개수
    const common = arr2.length;  


    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let col = 0; col < cols; col++) {
            let sum = 0;
            for (let row = 0; row < common; row++) {
                sum += arr1[i][row] * arr2[row][col];  
            }
            result[i][col] = sum;
        }
    }
    
    console.log(result);
    return result;
}

