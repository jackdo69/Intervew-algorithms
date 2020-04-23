var romanToInt = function(s) {
  const conversion = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  const arr = s.split("");
  let total = 0;
  let current, currentVal, next, nextVal;

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    currentVal = conversion[current];
    next = arr[i + 1];
    nextVal = conversion[next];

    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
};
