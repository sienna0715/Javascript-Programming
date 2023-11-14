/*
<문제풀이1 - 실패>
구명보트의 무게 제한이 있기 때문에 단순히, limit에서 사람 한 명 값을 뺀 후, 그 값과 같은 무게의 사람을 찾아서
같으면 보트의 무게를 올려준 후, 같이 탄 사람은 배열에서 제거해주고, 딱 맞는 무게가 없으면 그냥 혼자 태워서 보내는 방법을 떠올렸다.
그러나 22개의 테스트 케이스 중 고작 4개만 통과하는 코드였다...
*/

function solution(people, limit) {
    let count = 0;
    
    for (let i=0; i<people.length; i++) {
        let person = people[i]
        let remained = limit - person;
        let fit = people.indexOf(remained);
            if (fit !== -1) {
                count++;
                people.splice(fit, 1);
            } else {
                count++;
            }
        
    }
    
    return count;
}

/*
<문제풀이2 - 성공>
1-2명을 태워야하기 때문에 순서대로 정렬하여 계산하면 더 쉽겠다는 생각을 하게 되었다. 
내림차순으로 정렬시킨 후, 이중 반복문을 작성하는 대신 변수 i,j를 동시에 선언하여  비교를 해줄 것이다.
이때 i는 0부터 j는 뒤에서 부터 순차적으로 더해줄 것이다. 더한 값이 limit보다 작거나 같다면 j를 한 칸 앞으로 당긴다. (제거하는 개념과 같음)
조건에 맞지 않으면 그냥 혼자 타는 것이기 때문에 단순히 count를 올려주면 된다.
이때 i가 j보다 커진다면 더이상 비교대상이 없는 것이기 때문에 반복문이 끝나야 한다.
*/

function solution(people, limit) {
    let count = 0;

    people.sort((a,b) => b-a);

    for (let i=0, j=people.length-1; i<=j; i++) {
        if (people[i] + people[j] <= limit ) {
            j--;
        }
        count++;
    }
    
    return count;
}