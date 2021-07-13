// LC #784

var letterCasePermutation = function (s) {
  const result = [];

  function helper(idx, slate) {
    if (idx === s.length) {
      result.push(slate);
    } else {
      const currentChar = s[idx];
      const upper = currentChar.toUpperCase();
      const lower = currentChar.toLowerCase();
      if (upper !== lower) {
        // take upper case
        helper(idx + 1, slate + upper);
        // take lower case
        helper(idx + 1, slate + lower);
      } else {
        // is a number
        helper(idx + 1, slate + currentChar);
      }
    }
  }

  helper(0, "");

  return result;
};
