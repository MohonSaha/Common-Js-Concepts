


function sum(a, b, c){
    // console.log(arguments);   // It's output is an array like object. So we can loop through in it as like array. But we can not use push pop or any other array methods.

    // console.log(arguments);   // It's output is object

    const realArray = [...arguments];  // By this method we can convert the array like object in an rean array.
    console.log(realArray);

    const result = a + b + c;
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(sum);
// console.log(sum.length);        // FunctionName.length will give us the number of parameters we have provided. 