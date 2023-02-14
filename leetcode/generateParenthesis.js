var generateParenthesis = function (n) {

  const result = [];

  const gen = (left, right, temp) => {

    if (left === n && right === n) {
      result.push(temp);
      return;
    }

    if (left < n) {
      gen(left + 1, right, `${temp}(`);
    }

    if (left > right && right < n) {
      gen(left, right + 1, `${temp})`);
    }
  };

  gen(0, 0, '');

  return result;
};