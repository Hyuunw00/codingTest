function solution(fees, records) {
  /*
    1. 아이디어
    차량 번호가 작은 차부터 청구할 주차 요금을 배열로 반환해야한다
    1) 기본 주차 시간과 요금제, 추가시간과 요금제 정보는 fees에 들어있다.
    
    2) map객체를 생성한후 records를 돌면서 차량번호의 값이 존재한다면 해당순서는 out의 차례일 것이다.
    따라서 비용을 계산한후 결과 객체의 맞는 위치에 값을 더해준다. 
    
    3) 결과 객체의 키값을 기준으로 오름차순 하고 값을 반환한다.
    
    
    2. 시간복잡도
    O(nlogn)
    3. 자료구조
    
    
    */

  const [basicMin, basicFee, addMin, addFee] = fees;

  const input = {}; // 입출차 입력값
  const result = {}; // 내야할 주차 비용
  const accuMin = {}; // 누적시간

  for (let record of records) {
    const [timeString, carNum, io] = record.split(" ");

    if (!input[carNum]) {
      input[carNum] = timeString;
    } else {
      const [outHour, outMin] = timeString.split(":");
      const [inHour, inMin] = input[carNum].split(":");

      const dif = Number(outMin) + 60 * outHour - (Number(inMin) + 60 * inHour);
 
      accuMin[carNum] = (accuMin[carNum] || 0) + dif;
      delete input[carNum];
    }
  }

  //   출차 기록이 없는 차량 누적시간 계산
  for (let [carNum, timeString] of Object.entries(input)) {
    const [inHour, inMin] = timeString.split(":");
    const [outHour, outMin] = [23, 59];
    const dif = Number(outMin) + 60 * outHour - (Number(inMin) + 60 * inHour);
    accuMin[carNum] = (accuMin[carNum] || 0) + dif;
  }

  // 내야할 주차비용 계산
  for (let [carNum, min] of Object.entries(accuMin)) {
    result[carNum] =
      min <= basicMin
        ? (result[carNum] || 0) + basicFee
        : basicFee + Math.ceil((min - basicMin) / addMin) * addFee;
  }

  // 차량번호가 작은 차부터 출력되어 반환
  return Object.entries(result)
    .sort((a, b) => a[0] - b[0])
    .map((item) => item[1]);
}

