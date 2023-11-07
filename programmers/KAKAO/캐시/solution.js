/*
<문제 풀이1>
1. 빈 배열을 만들어 준다.
2. 실행 시간을 반환할 변수를 만들어 준다.
3. cachSize가 0일 때는 모든 경우가 cache miss이기 때문에 cities의 길이에 5를 곱한다.
4. cities를 forEach로 순회하며 LPU를 구현할 것이다.
5. 소문자로 시작하는 나라 이름도 있기 때문에 요소들을 대문자로 변경하여 사용할 것이다.
6. 첫번째 조건: 임의의 배열 길이가 cacheSize보다 작을 경우
    6-1. 배열에 같은 도시 이름이 있을 경우 -> 같은 도시 이름의 인덱스를 알아낸 후, 해당 인덱스를 제거 후 도시를 배열 앞에 넣어준다.
    6-2. 배열에 같은 도시 이름이 없을 경우 -> 배열 앞에 넣어준다.
7. 두번째 조건: 임의의 배열 길이가 cacheSize보다 클 경우
    7-1. 배열에 같은 도시 이름이 있을 경우 
    7-2. 배열에 같은 도시 이름이 없을 경우 -> 맨 뒤 요소를 pop 시킨 다음, 도시를 배열 앞에 넣어준다.
*/

function solution(cacheSize, cities) {
  let memory = [];
  let time = 0;
  
  if (cacheSize === 0) {
      return cities.length * 5;
  } 
  
  cities.forEach((city) => {
      let UpperCity = city.toUpperCase();
      if (memory.length < cacheSize) {  
          if (memory.includes(UpperCity)) {
              let findIdx = memory.indexOf(UpperCity);
              if (findIdx !== 0) {
                  memory.splice(findIdx, 1);
                  memory.unshift(UpperCity);
              }
              time += 1;
          } else {
              memory.unshift(UpperCity);
              time += 5;
          }
      } else {
          if (memory.includes(UpperCity)) {
              let findIdx = memory.indexOf(UpperCity);
              if (findIdx !== 0) {
                  memory.splice(findIdx, 1);
                  memory.unshift(UpperCity);
              }
              time += 1;
          } else {
              memory.pop();
              memory.unshift(UpperCity);
              time += 5;
          }
      }
  })
  
  return time;
}