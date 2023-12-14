/*
이번 문제는 오랜 시간 고민하였지만, 결합된 문자를 어떻게 찾아야할 지 방법이 떠오르지 않아
결국 다른 사람의 풀이로 이해하였다...

<문제 풀이>
1. 알파벳으로 이루어진 배열 사전을 만들어준다.
2. 빈 문자열을 만들어 준다.
3. 입력된 문자의 길이만큼 순회하는 반복문을 만들어준다.
4. 빈 문자열에 msg의 요소를 하나씩 더한다.(합친다) = str
5. 이때 합쳐진 문자열(str)이 사전(배열)에 없는 경우의 조건문을 만들어준다.
6. 이미 사전에 있는 문자의 인덱스를 추가하기 위해 맨 앞에서 부터 일정 부분까지 자른 문자열을 사전에 찾아서 인덱스를 반환한다.
7. 이후 현재 상태의 str을 사전에 새로운 문자로 등록한다.
8. 현재 입력된 문자부터 시작하기 위해 str에 msg의 i번째 문자를 재할당한다.
9. 이미 사전에 있는 str 문자는 사전에서 인덱스에 1을 더한 값으로 반환한다. (index는 0부터 시작하기 때문에)

*/

function solution(msg) {
  let answer = [];
  let dictionary = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97).toUpperCase());
  let str = "";
  
  for (let i=0; i<msg.length; i++) {
      str += msg[i];

      if (!dictionary.includes(str)) {
          answer.push(dictionary.indexOf(str.slice(0, -1))+1)
          dictionary.push(str);
          str = msg[i];
      }
  }
  if (str) answer.push(dictionary.indexOf(str)+1)
  return answer;
}