/*
TODO <문제 풀이>
  유저의 마지막 입장 닉네임 또는 마지막 변경된 닉네임으로 결정되기 때문에 
  각 유저의 아이디를 키로 만들어 닉네임 값을 할당하고 최종적으로 마지막 값이 
  해당 유저의 닉네임으로 확정되는 것이다.

  이후 Enter, Leave를 기준으로 문자 메시지를 반환한다.
*/

function solution(record) {
    const answer = [];
    const records = record.map((el) => el.split(' '));
    const user = {};
    // console.log(records)
    
    records.forEach((el) => {
        if (el[0] === 'Enter' || el[0] === 'Change') {
            user[el[1]] = el[2]
        }
    })
    // console.log(user)
    
    records.forEach((el) => {
        if (el[0] === 'Enter') {
            answer.push(`${user[el[1]]}님이 들어왔습니다.`)
        } else if (el[0] === 'Leave') {
            answer.push(`${user[el[1]]}님이 나갔습니다.`)
        }
    })
    
    return answer;
} 