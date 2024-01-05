const solution = (queue1, queue2) => {
    let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
    let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
    const half = (sum1 + sum2) / 2;
    const q = [...queue1, ...queue2];
    let start = 0;
    let end = queue1.length;

    for (let count = 0; count < queue1.length * 3; count++) {
        if (sum1 === half) {
        return count;
        } else if (sum1 > half) {
            sum1 -= q[start];
            start++;
        } else {
            sum1 += q[end];
            end++;
        }
    }

    return -1;
};