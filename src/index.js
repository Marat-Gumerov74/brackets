module.exports = function check(str, bracketsConfig) {
  // your solution
  let map = new Map(bracketsConfig);
  let arr = [];

  for (let i = 0; i < str.length; i++) {
      (str[i] === arr[arr.length - 1]) ? arr.pop(): arr.push(map.get(str[i]));
  }
  return arr.length === 0;
}
