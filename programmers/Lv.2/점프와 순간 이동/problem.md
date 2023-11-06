### Description
Suppose that OO lab develops and sells an iron suit with special functions that enable the user to jump K spaces forward at once or teleport to the location of (current distance from start) x 2. This iron suit works with a battery whose power level does not decrease for teleportation but uses K amount of power to jump K spaces forward. Therefore, teleporting is a more efficient way to move with the iron suit. A purchaser of the iron suit wants to move to the location of N distance from here using the suit. However, to minimize battery usage, the purchaser wants to minimize the number of jumps. Given the distance to move by the purchaser N as the parameter, write a function "solution" to return the minimum required power level to use.

For example, the purchaser wants to move to a location 5 spaces away from here.
There are several ways to move to the location 5 spaces away using the iron suit.

* Jumping 5 spaces forward from the initial location 0 will allow the purchaser to arrive at once but 5 power levels would be required.
* Jumping 2 spaces forward from the initial location 0 and then teleporting, the purchaser will move to location 4 (current distance from start : 2) x 2. The purchaser can move to location 5 by jumping 1 space forward. Therefore, a total of 3 power levels are required.
* Jumping 1 space forward from the initial location 0 and then teleporting, the purchaser will move to location 2 (current distance from start : 1) x 2. Teleporting again, the purchaser will move to location 4 (current distance from start : 2) x 2. The purchaser can move to location 5 by jumping 1 space forward. Therefore, a total of 2 power levels are required.

Among the 3 cases above, the third case uses the least power level to move 5 spaces. Therefore, the answer is 2.

### 제한사항
* Number N: A natural number between 1 and 1,000,000,000.
* Number K: A natural number.

### 입출력 예
|     n    | return |
|----------|--------|
|     5	   |    2   |
|     6	   |    2   |
|   5000	 |    5   |

<br />

---
### Point ⍨
＞ 한 번에 K칸 점프할 수 있다. <br />
＞ 현재 시점 * 2로 순간 이동할 수 있다. <br />
＞ 최소 전력 수준을 반환

### Total elapsed time ⍩
> 40분

### Code additional explanation
처음 이 문제를 이해하는데 시간이 걸렸다. 그러다 거리는 자연수이고, 문제를 거꾸로 되짚어보니 n을 0으로 만드는 것과 같은 말이기 때문에 여기에서 힌트를 얻었다.

우선, 순간 이동은 2배로 이동할 수 있는데 이를 뒤짚어 생각하면 2로 나누면 다시 시작점으로 돌아가는 것이 된다. 여기서 주의점은 건전지 사용량은 똑같이 늘어나지 않는다는 점이다.
그래서 짝수이면 2로 나누어주고, 홀수이면 한 칸 뒤로 이동하는 개념처럼 1을 빼준다. 단, 이때는 건전지 사용량이 늘어나기 때문에 1을 증가 시켜주어야 한다.