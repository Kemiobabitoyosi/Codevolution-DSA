//Given a natural number 'n' determine if the number is prime or not

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  //for (i = 2; i < n; i++) so we optimize it following the math optimized primality test
  //Integers larger than the square root do not need to be checked because whenever 'n= a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'.
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false

/// Big O = O(sqrt(n)) as oposed to linear
