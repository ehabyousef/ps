// * "String"      -> "SSttrriinngg"
function DoubleChar(str) {
  return str
    .split("")
    .map((x) => x.repeat(2))
    .join("");
}
console.log(DoubleChar("String"));
