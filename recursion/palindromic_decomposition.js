// LC #131

var partition = function (s) {
  function is_palindrome(s) {
    if (s.length === 1) return true;

    let lo = 0;
    let high = s.length - 1;

    while (lo < high) {
      if (s[lo] !== s[high]) {
        return false;
      }
      lo++;
      high--;
    }

    return true;
  }

  function partition_helper(idx, slate, res) {
    if (idx === s.length) {
      const final = [...slate];
      console.log("test", final.join("|"));
      res.push(final);
    } else {
      for (let i = idx; i < s.length; i++) {
        const subStr = s.slice(idx, i + 1);
        if (is_palindrome(subStr)) {
          slate.push(subStr);
          partition_helper(i + 1, slate, res);
          slate.pop();
        }
      }
    }
  }

  const output = [];
  partition_helper(0, [], output);

  return output;
};
