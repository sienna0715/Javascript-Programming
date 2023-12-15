/*
TODO <문제 풀이>
  1. 게임 동안 나온 값들을 담을 문자열 형태의 변수(temp)를 만들어 준다.
  2. 0부터 차례대로 말하는 게임이기 때문에 이를 나타낼 변수(index)도 만들어 준다.
  3. 게임이 진행되는 동안 튜브는 t개의 숫자를 말해야 하며, m번씩 돌아가기 때문에 t*m을 하면 게임 진행 횟수를 얻을 수 있다.
    게임에 나온 숫자들의 길이가 게임 횟수가 될 때까지 while문을 돌릴 것이다.
  4. temp 변수에 담을 때는 진수로 변환한 값을 합쳐준다.
  ! 이제 만들어진 temp 변수를 튜브가 말해야 할 숫자만 뽑아줄 것이다.
  5. for문에서 index는 0부터 시작하기 때문에 p-1로 시작하여 인원 수만큼 지나가도록 순회시키면 튜브가 말해야하는 값만 얻을 수 있다.
    (문자열은 유사배열객체인 점을 활용하였다.)
  6. 마지막으로 16진수에서는 10~15는 a~f 알파벳으로 반환하며, 조건에서 이를 대문자로 반환하라고 하였기 때문에 return 전에 대문자 변환 메서드를 사용한다.
*/

function solution(n, t, m, p) {
  let answer = '';
  let temp = '';
  let index = 0;
  
  while(temp.length < t*m) {
      temp += index.toString(n);
      index++;
  }
  
  for (let i = p-1; i < temp.length; i += m) {
      answer += temp[i];
  }
  
  return answer.slice(0, t).toUpperCase();
}

//* 다른 풀이
/* 다른 점이라면 for문에서 temp의 길이가 아닌 게임의 횟수까지 순회하면 더 깔끔하게 값을 얻을 수 있다. */

function solution(n, t, m, p) {
  let answer = '';
  let temp = '';
  let index = 0;
  
  while(temp.length < t*m) {
      temp += index.toString(n);
      index++;
  }
  
  for (let i = p-1; i < t*m; i += m) {
    answer += temp.charAt(i);
  }
  
  return answer.toUpperCase();
}