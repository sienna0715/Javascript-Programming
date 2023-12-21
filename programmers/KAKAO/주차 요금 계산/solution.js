/*
TODO <문제 풀이> - 테스트케이스 3,4,8,10 실패
  (1)의 경우, records를 순회하며 차량 번호를 한 번만 객체 키로 등록한 후,
  배열에 push하는 형태로 제작하였음.
  
  (2)의 경우, 1시간에 60분이기 때문에 시간만 60을 곱하여 분과 더해서 총합의 분을 만들었음.
  
  (3)의 경우, 차량 번호가 작은 순으로 값을 반환해야하기 때문에 오름차순으로 정렬한 후에 순회하였음.
  출입이 있으면 반드시 출차가 있기 때문에 짝수이다. 때문에 각 차량번호의 배열 길이가 홀수이면 그날 하루까지의
  요금을 정산하기 때문에 23:59인 1439분을 배열에 추가하였다.
  이후 시간 차를 구한 다음 각 값들을 더해주면 누적 주차 시간을 구할 수 있다.
  기본 시간보다 누적 시간이 크면, 
  ! 기본요금 + ((누적시간 - 기본시간) / 단위시간) * 단위요금
  으로 계산한 값을 answer에 push하여 반환하면 끝!
*/

function solution(fees, records) {
  let answer = [];
  let parking = {};
  
  // ! (1) 차량 번호를 키로 가진 객체를 만드는 작업
  // ! '5961': [ '05:34', '07:59', '22:59', '23:00' ], ...
  records.forEach((el) => {
      let car = el.split(' ');
      if (!Object.keys(parking).includes(car[1])) {
          parking[car[1]] = [];
      }
      parking[car[1]].push(car[0])
  })
  
  // ! (2) '시:분'으로 된 형태를 분으로 만들어주는 작업
  // ! '5961': [ 334, 479, 1379, 1380 ], ...
  Object.keys(parking).forEach((car) => {
      let times = parking[car].map((time) => time.split(':'));
      let totalTime = times.map((time) => (+time[0] * 60) + +time[1])
      
      parking[car] = totalTime;
  })
  
  // ! (3) 최종적으로 주차 요금을 계산하는 작업
  Object.keys(parking).sort().forEach((car) => {
      let accTime = [];
      
      if (parking[car].length % 2 !== 0) {
          parking[car].push(1439)
      }
      
      for (let i=0; i<parking[car].length; i++) {
          accTime.push(parking[car][1] - parking[car][0]);
          parking[car].splice(0, 2)
      }
      
      accTime = accTime.reduce((acc, cur) => acc + cur);
      
      // ! fee = [기본시간, 기본요금, 단위시간, 단위요금]
      if (accTime > fees[0]) {
          answer.push(fees[1] + Math.ceil((accTime - fees[0]) / fees[2]) * fees[3]);
      } else {
          answer.push(fees[1]);
      }
  })
  
  return answer;
}

// TODO <다른 풀이 응용 풀이> - 성공
function solution(fees, records) {
  let answer = [];
  let parking = {};
  
  records.forEach((el) => {
      let [time, car, type] = el.split(' ');
      let [hour, minute] = time.split(':');
      
      time = hour * 60 + +minute;
      
      if (!parking[car]) {
          parking[car] = {time: 0};
      }
      
      parking[car].type = type;
      
      if (type === 'OUT') {
          parking[car].time += time - parking[car].InTime;
      }
      
      parking[car].InTime = time;
  })
  
  Object.keys(parking).sort().forEach((car) => {
      if (parking[car].type == 'IN') {
          parking[car].time += 1439 - parking[car].InTime;
      }
      
      if (parking[car].time > fees[0]) {
          answer.push(fees[1] + Math.ceil((parking[car].time - fees[0]) / fees[2]) * fees[3]);
      } else {
          answer.push(fees[1]);
      }
  })
  
  return answer;
}