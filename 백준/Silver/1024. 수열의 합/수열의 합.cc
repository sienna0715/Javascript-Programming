#include <iostream>
#include <cctype>
using namespace std;

int main() {
	long double N, L;
	cin >> N >> L;

RE:	// 여기서부터 해당하는 수열을 찾을 때까지 루프 반복
	
	// 루프를 돌때마다 해당 값 초기화
	long double constant = 0;     // 상수
	long double first_num = 0;	  // 첫 번째 값

	for (int i = 1; i < L; i++) {
		constant += i;
	}
	first_num = (N - constant) / L;
	
	// 첫번째 값이 양의 정수 또는 0 이면 조건을 만족하는 수열
	if (int(first_num) == first_num && first_num >= 0) {
		for (int i = 0; i < L; i++) {
			cout << int(first_num) + i << " ";
		}
	}
	// 조건을 만족하는 수열이 아니라면
	else {
		// L이 100이 될때까지 만족하는 수열이 없다면, -1 출력
		if (L == 100) {
			cout << "-1";
		}
		// L이 100이 되지 않았다면, L값을 증가시킨 후 루프반복
		else {
			L++;
			goto RE;
		}
	}

	return 0;
}