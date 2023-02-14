// const singleNumber = function (nums) {
//   let freqs = freqCounter(nums);

//   for (let num of nums) {
//     if (freqs[num] === 1) {
//       return num;
//     }
//   }
// };

// const freqCounter = (nums) => {

//   const freq = {};

//   for (let num of nums) {
//     if (freq[num]) {
//       freq[num]++;
//     } else {
//       freq[num] = 1;
//     }
//   }

//   return freq;
// };

//all in one function
const singleNumber = (nums) => {

  let counter = {};

  for (let i = 0; i < nums.length; i++) {

    if (counter[nums[i]]) {
      delete counter[nums[i]];
    } else {
      counter[nums[i]] = 1;
    }

  }

  return Object.keys(counter)[0];
};