function stringRepeat(n, s) {
  if (n < 0) return;
  return s.repeat(s);

  // let newStr ='';

  // for (let i = 0; i < n; i++) {
  //     newStr += s;
  // }
  // return newStr
}

console.log(stringRepeat(3, "*****"));
