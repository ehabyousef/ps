// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr2 = [2, 4, 6, 8, 10, 12, 14];

// Number of elements that are present in both arrays
// Number of elements that are present in only one array
// Number of remaining elements in arr1 after extracting the elements of arr2
// Number of remaining elements in arr2 after extracting the elements of arr1

// The result is: [4, 8, 5, 3]
// 4 elements present in both arrays: 2, 4, 6, 8
// 8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
// 5 elements remaning in arr1: 1, 3, 5, 7, 9
// 3 elements remaning in arr2: 10, 12, 14

function process2Arrays(arr1, arr2) {
  const both = arr1.filter((x) => arr2.includes(x));
  const onlyOne = [
    ...arr1.filter((x) => !arr2.includes(x)),
    ...arr2.filter((x) => !arr1.includes(x)),
  ];

  //   const remain1 = arr1.length - both.length;
  const remain1 = arr1.filter((x) => !arr2.includes(x));
  //   const remain2 = arr2.length - both.length;
  const remain2 = arr2.filter((x) => !arr1.includes(x));
  return [both.length, onlyOne.length, remain1.length, remain2.length];
}
console.log(
  process2Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12, 14])
);
