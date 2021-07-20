/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function is_safe(b, row, column) {
    // check row - so make sure that we don't have any repeats from b[row][0-8], and everything is < 9
    const rowSet = new Set();
    for (let i = 0; i < 9; i++) {
      if (b[row][i] !== ".") {
        if (rowSet.has(b[row][i])) {
          return false;
        }
        rowSet.add(b[row][i]);
      }
    }
    const colSet = new Set();
    // check col - so we fix the column and check each row
    for (let j = 0; j < 9; j++) {
      if (b[j][column] !== ".") {
        if (colSet.has(b[j][column])) {
          return false;
        }
        colSet.add(b[j][column]);
      }
    }

    // check subgrid
    const sub_grid_x = Math.floor(row / 3) * 3;
    const sub_grid_y = Math.floor(column / 3) * 3;

    const sub_grid_set = new Set();

    for (let a = sub_grid_x; a < sub_grid_x + 3; a++) {
      for (let c = sub_grid_y; c < sub_grid_y + 3; c++) {
        const test = board[a][c];
        if (test !== ".") {
          if (sub_grid_set.has(b[a][c])) {
            return false;
          }

          sub_grid_set.add(b[a][c]);
        }
      }
    }

    return true;
  }

  function backtrack(b, row, col) {
    let unfilled_space = null;

    // loop through whole board and look for first unfilled space
    for (let i = row; i < 9; i++) {
      for (let j = col; j < 9; j++) {
        if (b[i][j] === ".") {
          unfilled_space = { x: i, y: j };
          break;
        }
      }
      if (!!unfilled_space) {
        break;
      }
    }

    if (!unfilled_space) return true;
    console.log(unfilled_space);

    for (let k = 1; k < 10; k++) {
      if (is_safe(b, unfilled_space.x, unfilled_space.y)) {
        // then we recurse
        b[unfilled_space.x][unfilled_space.y] = k + "";
        if (backtrack(b, unfilled_space.x, unfilled_space.y)) {
          return true;
        } else {
          // Placing number num to this unfilled cell does not lead to a solution.
          // So we undo placing it to the board:
          board.get(row).set(col, 0);
          // ... and continue with the `for` loop.
          // That will lead to trying other numbers: backtracking.
        }
      }
    }

    return false;
  }

  backtrack(board, 0, 0);

  return board;
};
