/*
<문제풀이1 - 실패>
1. 문자열을 배열 형태로 저장한다.
2. 현재 인덱스 값과 다음 인덱스 값이 일치하면 제거 후, index를 0으로 초기화
3. 일치하지 않다면, 인덱스를 1 더한다.
4. 배열의 길이가 0이라면 0을 반환, 아니라면 1을 반환한다.

<결과>
정확성 테스트는 성공했지만, 효율성 테스트에서 시간 초과로 실패하였다...
*/

function solution(s) {
    let splited = s.split('');
    let index = 0;
    
    while (index < splited.length) {
        if (splited[index] === splited[index+1]) {
            splited.splice(index, 2);
            index = 0;
        } else {
            index++;
        }
    }
    
    return splited.length === 0 ? 1 : 0;
}

/*
<문제풀이1 - 성공>
stack으로 풀면 효율성에 통과한다는 힌트를 얻어 문제를 다시 풀어보았다.

1. 문자열을 배열 형태로 저장한다.
2. stack이라는 빈 배열을 생성한다.
3. 기존의 while문 대신 명확한 반복 횟수를 가진 for문을 사용하여 순회한다.
4. stack에 splited[i]를 추가하여 다음에 올 문자와 일치하면 pop, 그렇지않으면 push한다.
5. 이때 제일 최근에 push 된, 즉 가장 마지막 요소와 비교한다.
6. 결국 한 쌍이 되지 못한 문자만 남게된다.
*/

function solution(s) {
    let splited = s.split('');
    let stack = [];
    
    for (let i=0; i<splited.length; i++) {
        if (stack[stack.length - 1] === splited[i]) stack.pop();
        else stack.push(splited[i]);
    }
    
    return stack.length === 0 ? 1 : 0;
}