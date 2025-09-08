function pattern(n) {
  if (n <= 0) return "";
  if (n % 2 === 0) n = n - 1;

  let result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i.toString().repeat(i));
  }

  return result.join("\n");
}

console.log(pattern(5));
