function recursiveFib(n) {
    if(n < 2) {
        return n
    }
    return recursiveFib(n-1) + recursiveFib(n-2)

    //to avoid an infinite execution we will need a base function
}
// the iterative solution is farm more optimal than the recursive
console.log(recursiveFib(0)); //0
console.log(recursiveFib(1)); //1
console.log(recursiveFib(6)); //8

//Time complexity for recursive javascript is 2 power n (grows according to n)