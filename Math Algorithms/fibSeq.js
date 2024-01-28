// Give a number 'n', find the first 'n' element of the Fibonacci sequence

function fibonacci(n) {
  // n denotes how manhy numbers in the sequence we have to display
  const fib = [0, 1];
  //populate the remaining element from the third element till n to be sure that they are the sum of the two previous numbers by creating a loop with index = 2
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]//Big O is O(n) which is a linear time complexity
console.log(fibonacci(5)); // [0,1,1,2,3,5,8]//Big O is O(n) which is a linear time complexity




