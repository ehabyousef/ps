function evenOdd(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum % 2 === 0 ? "even" : "odd";

  // const sum = nums.reduce((acc, num) => acc + num, 0);
  // return sum % 2 === 0 ? "even" : "odd";
}

console.log(evenOdd([1, 5, 7]));
