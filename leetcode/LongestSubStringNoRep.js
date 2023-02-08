var lengthOfLongestSubstring = function (s) {

  const { length } = s;
  if (length < 2) return length;

  const history = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < length; i++) {
    const char = s[i];
    const count = history[char];

    //if alrdy in object and not at 0, start count again with next letter
    if (count !== undefined && count >= start) {
      start = count + 1;
    }

    const current = i - start + 1;
    history[char] = i;

    if (current > max) {
      max = current;
    }
  }

  return max;
};