//Given an array of 'n' elements and a target element 't', find the index of 't' in the
// arr = [-5, 2, 10, 4, 6], t = 10 -> should return 2
// arr = [-5, 2, 10, 4, 6], t = 6 -> should return 4
// arr = [-5, 2, 10, 4, 6], t = 20 -> should return -1

//Solution/ Pseudocode

//1. Start at the first element iin the array and move towarrds the last
//2. At each element though, check if the element is equal to the target element
//3. If element found, return the index of the element
//4. If element not found, return -1

function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); //-1


//Big O is O(n) time complexity is linear