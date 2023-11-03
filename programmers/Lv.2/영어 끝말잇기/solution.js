/*
<문제풀이1 -  실패>
1. answer을 [0, 0]으로 설정한다.
2. 끝말잇기를 이어가면서 나온 단어들을 넣을 배열을 만들어 준다. 이때 첫번째 단어는 넣어준다. (첫번째 단어는 검증을 할 필요가 없기 때문)
3. 매개변수 words의 단어들을 두번째 단어(word[1])부터 순회할 수 있도록 반복문을 작성한다.
4. 첫번째 조건인 말한 단어가 이전 단어의 끝 문자와 같은지의 여부를 알기위해 slice와 charAt을 이용하여 일치여부를 확인한다.
5. 두번째 조건인 이전에 말한 단어들과 일치하는 단어를 말했는지 여부를 알기위해 includes 메서드를 이용하여 값을 확인한다.
6. 두 조건 중 하나만 해당되더라도 반복문은 멈추게 된다. 
7. 이때 [ 몇 번째 사람이, 몇 번째 순회에서 ] 틀렸는 지에 대한 정보를 담은 값을 반환해야한다.

<결과>
테스트 케이스 17, 19, 20번 실패
*/

function solution(n, words) {
    let answer = [0, 0];
    let relay = [words[0]];

    for (let i=1; i<words.length; i++) {
        let lastSpell = words[i-1].slice(-1);
        let firstSpell = words[i].charAt(0);
        
        if (lastSpell !== firstSpell || relay.includes(words[i])) {
            relay.push(words[i]);
            answer[0] = i % n + 1;
            answer[1] = Math.floor(i / n) + 1;
            break;
        } 
    }    

    return answer;
}

/*
<문제풀이1 -  성공>
실패 원인을 생각해보니 relay라는 변수를 잘못 사용하고 있다는 것을 깨달았다. 
relay는 현재 단어가 이전에 나온 단어들과 일치하는게 있는지 여부를 확인해야하기 때문에
미리 현재 단어를 push해서도 안 되고 판단 여부가 끝났을 때 추가해야 한다. 
때문에 기존에 논리 연산자로 한 번에 작성된 코드를 분기한 후, relay라는 배열에 같은 문자가 없을 때만 값을 추가하도록 코드를 변경하였더니
실패한 테스트 케이스에 통과하였다.
*/

function solution(n, words) {
    let answer = [0, 0];
    let relay = [words[0]];

    for (let i=1; i<words.length; i++) {
        let lastSpell = words[i-1].slice(-1);
        let firstSpell = words[i].charAt(0);
        
        if (lastSpell !== firstSpell) {
            answer[0] = i % n + 1;
            answer[1] = Math.floor(i / n) + 1;
            break;
        } 
        
        if (relay.includes(words[i])) {  
            answer[0] = i % n + 1;
            answer[1] = Math.floor(i / n) + 1;
            break;
        } else {
            relay.push(words[i]);
        }
    }    

    return answer;
}