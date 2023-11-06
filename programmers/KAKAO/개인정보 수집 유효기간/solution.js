/*
<문제 풀이>
1. 문자열로 된 today 매개변수를 날짜로 변환한다.
2. 문자열로 된 terms 매개변수를 객체 형태로 만들기 위해 termType 변수를 만들어준다.
3. terms를 순회하며 공백을 기준으로 분리한 다음, 구조분해할당으로 각 변수에 저장한다.
4. termType에 type은 key로 term은 value 쌍으로 저장한다.
5. peivacies를 순회하며, 공백을 기준으로 분리한 후, 구조분해할당으로 각 변수에 저장한다.
6. 문자열로 된 date를 날짜 객체로 변환한다.
7. 해당 개인정보 유효기간을 더해주어 파기 날짜를 알아낸다. 이때 개월 단위이기 때문에
    new Date 객체를 이용하여 값을 변경한다.
8. 파기 날짜와 오늘 날짜를 비교하여 과거라면 파기 대상이기 때문에 해당 데이터의 인덱스를 추가한다.
    (index가 0부터 시작하기 때문에 1을 더 해준다.)
*/

function solution(today, terms, privacies) {
  const result = [];
  const expire = new Date(today);
  const termType = {};

  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = +term;
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const deadLine = new Date(date);

    deadLine.setMonth(deadLine.getMonth() + termType[type]);

    if (deadLine <= expire) result.push(idx + 1);
  });

  return result;
}