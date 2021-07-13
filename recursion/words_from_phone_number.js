// LC # 17

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const charMap = new Map();

  charMap.set("0", "");
  charMap.set("1", "");
  charMap.set("2", "abc");
  charMap.set("3", "def");
  charMap.set("4", "ghi");
  charMap.set("5", "jkl");
  charMap.set("6", "mno");
  charMap.set("7", "pqrs");
  charMap.set("8", "tuv");
  charMap.set("9", "wxyz");

  const result = [];

  function wordHelper(idx, slate) {
    if (idx === digits.length) {
      result.push(slate);
    } else {
      const currentNum = digits[idx];

      const letters = charMap.get(currentNum);
      if (letters) {
        for (let i = 0; i < letters.length; i++) {
          wordHelper(idx + 1, slate + letters[i]);
        }
      } else {
        wordHelper(idx + 1, slate);
      }
    }
  }

  if (digits.length) {
    wordHelper(0, "", result);
  }

  return result;
};
