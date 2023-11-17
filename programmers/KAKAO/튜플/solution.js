/*
<문제 풀이1>
문제를 보자마자 반복문으로 풀면 쉽겠다는 생각을 했고, 이를 위해서는 중괄호를 제거해야했다.
1. slice로 가장 바깥 중괄호들을 제거한 후, 숫자 사이사이 남은 '},{' 형태 기준으로 배열을 만들어 준다.
2. 튜플이 표현하는 집합을 찾기위해 배열의 길이 기준 오름차순으로 정렬을 하여 비교를 할 것이다.
3. 1,2번의 과정을 거친 임의의 변수를 forEach문으로 순회한다.
4. 요소 하나 하나를 배열로 만들어 준다.
5. 이때 해당 요소를 순회하면서 answer 배열에 없는 값만 push해준다.
6. 숫자값으로 모든 요소를 변경하여 값을 반환한다.
*/

function solution(s) {
    let answer = [];
    let tuples = s.slice(2, -2).split("},{").sort((a, b) => a.length - b.length);

    tuples.forEach(el => {
      let tuple = el.split(',');
      answer.push(tuple.find(e => !answer.includes(e)));
    });

    return answer.map(e => +(e));
}