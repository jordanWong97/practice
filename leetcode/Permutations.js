//using bfs
var permute = function (nums) {
  const result = [];
  const queue = [];

  queue.push([[], nums]);

  while (queue.length) {
    const [current, available] = queue.shift();
    if (available.length === 0) {
      result.push(current);
    }

    for (let i = 0; i < available.length; i++) {
      const num = available[i];
      queue.push([[...current, num]
        , [...available.slice(0, i), ...available.slice(i + 1)]
      ]);
    }
  }
  return result;
};