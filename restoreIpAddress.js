var isValid = function(s) {
  if (s.length > 3) return false;
  if (s.charAt(0) === "0" && s.length > 1) return false;
  let val = parseInt(s);
  return val >= 0 && val <= 255;
};

var restoreIpAddresses = function(s) {
  let result = [];
  let n = s.length;

  for (let i = 1; i < n && i < 4; i++) {
    let first = s.substring(0, i);
    if (!isValid(first)) {
      continue;
    }
    //first is valid
    for (let j = 1; i + j < n && j < 4; j++) {
      let second = s.substring(i, i + j);
      if (!isValid(second)) {
        continue;
      }
      //second is valid
      for (let k = 1; i + j + k < n && k < 4; k++) {
        let third = s.substring(i + j, i + j + k);
        let fourth = s.substring(i + j + k);
        if (!isValid(third) || !isValid(fourth)) {
          continue;
        }
        // all 4 subStrings are valid
        result.push(first + "." + second + "." + third + "." + fourth);
      }
    }
  }
  return result;
};
