function getCount(str) {
  let arr = str.split("");
  let count = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < arr.length; i++) {
    if (vowels.has(arr[i].toLowerCase())) {
      count += 1;
    }
  }
  return count;
}
console.log(getCount("aeiofff"));
