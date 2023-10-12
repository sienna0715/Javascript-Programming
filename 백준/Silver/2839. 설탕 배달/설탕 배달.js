const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let n = Number(input);
let count = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    count += n / 5
    break
  }
  n -= 3
  count += 1

  if (n < 0) count = -1;
}

console.log(count);