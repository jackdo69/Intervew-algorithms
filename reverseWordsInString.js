var reverseWords = function(s) {
  let words = [];
  let result = "";
  words = s.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      words.splice(i, 1);
    }
  }
  return words.reverse().join(" ");
};
