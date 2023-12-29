/*
TODO <문제 풀이>
    1. 숫자가 나오기 직전까지의 문자열을 추출하여 소문자형태로 각 head에 저장한다.
    2. headA가 headB를 비교했을 때 음수를 반환하면 유지, 양수를 반환하면 a와 b의 자리를 바꾼다.
    3. 숫자를 추출하여 그 숫자가 0으로 시작한다면 0을 제거하여 각 num에 저장한다.
    4. 숫자의 차를 반환하여 음수이면 유지, 양수이면 자리를 바꾼다.
    * /^\D+/ : 문자열의 시작이(^) 숫자가 아닌 문자(\D)이고 최소 한 번이상 반복되는(+) 문자
    * /\d+/: 숫자(\d)가 최소 한 번이상 반복되는(+) 문자
    * /^0+/: 0으로 시작(^0)하고 한 번 이상 반복되는(+) 문자
*/

function solution(files) {
    return files.sort((a,b) => {
        const headA = a.match(/^\D+/)[0].toLowerCase();
        const headB = b.match(/^\D+/)[0].toLowerCase();
        
        if (headA < headB) return -1;
        if (headA > headB) return 1;
        
        const numA = a.match(/\d+/)[0].replace(/^0+/, '');
        const numB = b.match(/\d+/)[0].replace(/^0+/, '');
        
        return numA - numB
    })
}

// TODO <문제 풀이> - 다른 사람의 실패 풀이법이지만 좋아서 가져옴
function solution(files) {
    let answer = [];
    let fileName = [];
    
    files.forEach(file => {
        let head = '', number = '', tail= '';
        
        [...file].forEach(spell => {
            if (isNaN(+spell) && number.length === 0) head += spell;
            else if (!isNaN(+spell) && tail.length === 0) number += spell;
            else tail += spell;
        })
        fileName.push({
            name: file,
            head,
            number: +number
        })
    })
    
    fileName.sort((a,b) => a.number - b.number);
    fileName.sort((a,b) => a.head.toLowerCase() < b.head.toLowerCase() ? -1 : 1)
    
    for (let i = 0; i < fileName.length; i++ ) answer.push(fileName[i].name);
    
    return answer;
}

// TODO 정규표현식 사용 안 하고 응용 풀이 but 실패
function solution(files) {
    return files.sort((a, b) => {
        let headA = '', headB = '';
        let idxA = 0, idxB= 0;
        
        while (idxA < a.length) {
            if (isNaN(a[idxA])) {
                headA += a[idxA];
                idxA++;
            } else {
                break;
            }
        }
        
        while (idxB < b.length) {
            if (isNaN(b[idxB])) {
                headB += b[idxB];
                idxB++;
            } else {
                break;
            }
        }
        // console.log(headA, '/', headB)
                    
        if (headA.toLowerCase() < headB.toLowerCase()) return -1;
        if (headA.toLowerCase() > headB.toLowerCase()) return 1;
        
        let numA = '', numB = '';
        
        while (idxA < a.length) {
            if (!isNaN(a[idxA])) {
                numA += a[idxA];
                idxA++;
            } else {
                break;
            }
        }
        
        while (idxB < b.length) {
            if (!isNaN(b[idxB])) {
                numB += b[idxB];
                idxB++;
            } else {
                break;
            }
        }
        // console.log(numA, numB)
        
        
        return Number(numA) - Number(numB)
    })
        
}