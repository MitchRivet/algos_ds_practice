// LC #22 generate parentheses

var generateParenthesis = function (n) {
  const result = [];
  const helper = (slate, numOpen, numClosed) => {
    if (numOpen === numClosed && numOpen === n) {
      result.push(slate);
      return;
    } else if (numClosed > numOpen || numOpen > n) {
      return;
      // ex ) num_close > num_open
      // ()( num_open > num_close -> ok
      // ()()( num_open > n (assume n is 4 here)
    } else {
      helper(slate + "(", numOpen + 1, numClosed);
      helper(slate + ")", numOpen, numClosed + 1);
    }
  };

  helper("", 0, 0);
  return result;
};
