const singleNumber = function (nums) {
  let freqs = freqCounter(nums);

  for (let num of nums) {
    if (freqs[num] === 1) {
      return num;
    }
  }
};

const freqCounter = (nums) => {

  const freq = {};

  for (let num of nums) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  return freq;
};