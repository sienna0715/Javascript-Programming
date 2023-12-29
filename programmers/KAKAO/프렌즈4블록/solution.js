/*
TODO <문제 풀이>
    
*/

function solution(m, n, board) {
    let blocks = board.map(v => v.split(''));
    
    while (true) {
        let find = [];
        
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (blocks[i][j] && blocks[i][j] 
                    === blocks[i][j-1] && blocks[i][j] 
                    === blocks[i-1][j-1] && blocks[i][j]
                    === blocks[i-1][j]
                ) {
                    find.push([i, j]);
                    // console.log(find)
                }
            }
        }
        
        if (!find.length) return [].concat(...blocks).filter(v => !v).length;
        
        // 부수기
        find.forEach(a => {
            blocks[a[0]][a[1]] = 0;
            blocks[a[0]][a[1] - 1] = 0;
            blocks[a[0] - 1][a[1] - 1] = 0;
            blocks[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            if (! blocks[i].some(v => ! v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! blocks[i][j]; k--) {
                    if (blocks[k][j]) {
                        blocks[i][j] = blocks[k][j];
                        blocks[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}