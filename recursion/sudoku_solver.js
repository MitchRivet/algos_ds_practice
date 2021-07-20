/**
 * LC #37 Sudoku Solver
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function is_safe(row, col, num) {
    const numStr = num + "";
    // check row
    for (let j = 0; j < 9; j++) {
      numStr;
      if (board[row][j] === num + "") {
        return false;
      }
    }

    // check col
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === numStr) {
        return false;
      }
    }

    // check subgrid
    const subgrid_x = Math.floor(row / 3) * 3;
    const subgrid_y = Math.floor(col / 3) * 3;

    for (let a = subgrid_x; a < subgrid_x + 3; a++) {
      for (let b = subgrid_y; b < subgrid_y + 3; b++) {
        if (board[a][b] === numStr) {
          return false;
        }
      }
    }

    return true;
  }

  function backtrack() {
    let has_unfilled_square = false;
    const unfilled_square = { x: null, y: null };

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          has_unfilled_square = true;
          unfilled_square.x = i;
          unfilled_square.y = j;
          break;
        }
      }
      if (has_unfilled_square) {
        break;
      }
    }

    if (!has_unfilled_square) {
      return true;
    }

    // with our unfilled square, check each number to see if it's valid

    for (let k = 1; k < 10; k++) {
      if (is_safe(unfilled_square.x, unfilled_square.y, k)) {
        board[unfilled_square.x][unfilled_square.y] = k + "";
        if (backtrack()) {
          return true;
        } else {
          board[unfilled_square.x][unfilled_square.y] = ".";
        }
      }
    }

    return false;
  }

  backtrack();

  return board;
};
