### Description
Elimination by grouping starts with a string consisting of lower-case letters. First, find a pair of two identical letters placed consecutively. Eliminate the pair, then concatenate the split strings. Elimination by grouping ends when all strings are eliminated by repeatedly doing this procedure. Given a string "S", write a function solution to return whether elimination by grouping can be successfully done or not. Return 1 for success and 0 otherwise.

For example, when string "S" = baabaa, return 1 because all strings can be eliminated as follows:

b aa baa → bb aa → aa →

### 제한사항
* Length of string : natural number less than 1,000,000.
* String consists of lower-case letters only.

### 입출력 예
|      n     | result |
|------------|--------|
|   baabaa   |    1   |
|    cdcd    |    0   |

<br />

---
### Point ⍨
＞ 문자열을 순회하면서 중복되는 문자 한 쌍이 발견되면 제거한다. <br />
＞ 제거 후, 다시 처음부터 문자열을 순회하여 찾아낸다. <br />
＞ 제거하지 않았다면, 다음 문자열로 넘어가 비교를 이어간다.

### Total elapsed time ⍩
> 50분

### New Thing
**Array.prototype.splice()** <br />
splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.<br />

```javascript
array.splice(시작할 인덱스, 제거할 요소 갯수)
```