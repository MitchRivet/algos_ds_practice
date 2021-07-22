/**
 * LC #51 - N queens
 *
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];

  function is_valid(board, row, column) {
    // so how do we know this will be valid?
    // check row for queen (we can probably skip this since it's one queen per row)
    for (let i = column - 1; i >= 0; i--) {
      if (board[row][i] === "Q") {
        return false;
      }
    }

    // check column
    for (let j = row - 1; j >= 0; j--) {
      if (board[j][column] === "Q") {
        return false;
      }
    }

    // check diagonal -> focus on diagonal behind the last placement
    let a = 1;
    while (column - a >= 0 && row - a >= 0) {
      if (board[row - a][column - a] === "Q") {
        return false;
      }
      a++;
    }

    let b = 1;
    while (column + b < n && row - b >= 0) {
      if (board[row - b][column + b] === "Q") {
        return false;
      }
      b++;
    }

    return true;
  }

  function backtrack(slate, depth) {
    if (depth === n) {
      const final = slate.map((a) => a.join(""));
      result.push([...final]);
    } else if (depth > n) {
      return;
    } else {
      for (let i = 0; i < n; i++) {
        slate[depth][i] = "Q";
        if (is_valid(slate, depth, i)) {
          backtrack([...slate], depth + 1);
        }
        slate[depth][i] = ".";
      }
    }
  }

  const startSlate = new Array(n).fill(0).map(() => new Array(n).fill("."));

  //pp
  //const startSlate = new Array(n).fill(Array(n).fill('.'))

  backtrack([...startSlate], 0);

  return result;
};
