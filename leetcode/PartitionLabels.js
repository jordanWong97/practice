
const partitionLabels = function (s) {
  if (!s) return '';

  const indexTracker = {};

  for (let i = 0; i < s.length; i++) {
    indexTracker[s[i]] = i;
  }

  let last = indexTracker[s[0]];
  let start = 0;

  const partitionLengths = [];

  for (let i = 0; i < s.length; i++) {
    if (i === last) {
      partitionLengths.push(i - start + 1);
      start = i + 1;
      last = indexTracker[s[i + 1]];
    } else {
      last = Math.max(last, indexTracker[s[i + 1]]);
    }
  }
  return partitionLengths;
};