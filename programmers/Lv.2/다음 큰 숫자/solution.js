/*
<문제풀이1>
1. n보다 1이 더 큰 자연수부터 반복문을 돌린다.
2. n의 이진수 1의 갯수와 비교하여 일치하는 수를 골라낸다.
3. 가장 작은 수를 반환한다. -> 가장 첫번째로 일치하는 수가 작은 수이다.
*/

function solution(n) {
  let answer = 0;
  let x = n+1;
  let binaryN = n.toString(2).split('').filter((el) => el === '1').length;
  
  while(true) {
      let binaryX = x.toString(2).split('').filter((el) => el === '1').length;
      if(binaryN === binaryX) {
          answer = x;
          break;
      } else {
          x++;
      }
  }

  return answer;
}