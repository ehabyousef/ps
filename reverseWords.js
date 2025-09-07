// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str
//     .split(/(\s)/)
//     .map((x) => (/\s/.test(x) ? x : x.split("").reverse("").join("")))
//     .join("");
// }
// console.log(reverseWords("This is an example!"));

function reverse(string) {
  //your code here
  return string
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}
console.log(reverse("This is an  - example!"));
