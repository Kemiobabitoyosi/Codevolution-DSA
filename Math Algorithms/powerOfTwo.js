// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;

//Toyosi's Attempt

//   // let number = 2;
//   // for (i = 2; i > n; i++) {
//   //   if (number % 2 == 0) {
//   //     return true;
//   //   }
//   //   return false;
//   // }
// }

// Using Bitwise

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return n & (n - 1 === 0);
}

console.log(isPowerOfTwoBitWise(1)); //true
console.log(isPowerOfTwoBitWise(2)); //true
console.log(isPowerOfTwoBitWise(5)); //false

//Time complexity is O(logn) reducing time by half
