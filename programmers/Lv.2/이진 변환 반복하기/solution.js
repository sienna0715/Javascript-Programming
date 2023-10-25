/*
<문제 풀이>
1. 매개 변수가 "1"이 아닐 때까지 반복문을 돌린다. ("1"이면 끝)
2. 문자열로 된 매개변수 s를 순회하며 "1" 요소만 남긴 후 갯수를 변수에 저장한다.
3. 변환이 일어났기 때문에 변환 횟수를 1 올려준다.
4. 1로 변환되지 않은 매개변수 s의 길이에서 1로만 구성된 변수를 빼서 제거된 0의 갯수를 추가한다.
5. 2번의 변수를 2진수로 변환하여 원본에 저장 후, 위의 과정 반복
*/

function solution(s) {
  const answer = [0, 0];
  
  while (s !== '1') {
      s = s.split('');
      let temp = s.filter(v => v === '1').length;
      answer[0]++;
      answer[1] += s.length - temp
      s = temp.toString(2);
  }
  
  return answer;
}