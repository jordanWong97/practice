
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
    //if i is equal to last instance of s[i]
    if (i === last) {
      //push difference from index - start + 1
      partitionLengths.push(i - start + 1);
      start = i + 1;
      //last becomes the last index of next letter
      last = indexTracker[s[i + 1]];
    } else {
      //this else takes care of next unique
      //case for :ababcbacadefegdehijhklij returns [9,7,8]
      //without else, would return [9,6,1,4,1,1,1]
      last = Math.max(last, indexTracker[s[i + 1]]);
    }
  }
  return partitionLengths;
};