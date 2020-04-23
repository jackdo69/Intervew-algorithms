var reverse = function(x) {
  let ans =
    parseFloat(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);
  return ans < Math.pow(2, 31) && ans >= -Math.pow(2, 31) ? ans : 0;
};
