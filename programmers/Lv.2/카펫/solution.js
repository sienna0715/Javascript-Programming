/*
<문제풀이1>
1. 전체 면적의 약수를 구할 것이기 때문에 전체 면적까지 반복문을 돌려준다.
2. 전체 면적을 구하는 조건문을 만든 다음, 약수 (x, y) 구조로 만든다.
3. 노란색 면적을 구하는 식과 실제 yellow 값의 일치 여부를 확인하여 true이면 answer에 push한다.
*/

function solution(brown, yellow) {
    let answer = [];
    let size = brown + yellow;
    
    for (let i=1; i<=size; i++) {
        if (size % i === 0) {
            let x = i;
            let y = size / i;
            
            if (x >= y && (x-2) * (y-2) === yellow) {
                answer.push(x);
                answer.push(y);
            }
        }
    }
    
    return answer;
}