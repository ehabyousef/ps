function XO(str) {
  newStr = str.split("");
  let val =
    newStr.filter((x) => x.toLowerCase() === "o").length ===
    newStr.filter((x) => x.toLowerCase() === "x").length;
  return val;
}
console.log(XO("oooNHUHXXoXoxOxoxXOOxooOXoO"));
