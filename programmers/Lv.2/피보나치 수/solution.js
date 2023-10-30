/*
<문제풀이1 - 실패(시간초과)>
 재귀함수를 이용하였다.
*/

function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return (fibo(n - 1) + fibo(n - 2)) % 1234567;
}

function solution(n) {
  return fibo(n);
}

/*
<문제풀이2 - 성공(참고풀이)>
문제에서 n번째 피보나치 수를 나눈 나머지 값을 요구했기 때문에 피보나치 수열을 n까지 돌려 n번째 수열 값을 반환하는 로직으로 구현.

 1. 피보나치 수열은 0번째부터 0, 1, 1, 2, 3, 5, ...로 이어지는데 n이 2부터 주어지기 때문에 배열이라고 봤을 때, 인덱스 2까지의 값을 변수에 저장한다.
 2. 3부터 n보다 작거나 같을 때까지 반복문을 돌려, 피보나치 수열 공식에 1234567을 나눈 나머지 값을 해당 인덱스에 저장한다.
 3. 피보나치 수를 저장한 배열의 n번째 값을 반환한다.
 4. 반환한 수에 또다시 1234567을 나눈 나머지 값을 반환한다.
*/

function fibo(n) {
  let fNum = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567;
  }
  return fNum[n];
}

function solution(n) {
  const answer = fibo(n) % 1234567;
  return answer;
}
