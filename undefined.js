

// 8 Ways to get undeffined?

// 1. Variable that is not initialize will give you undefined. 

let first;
// console.log(first);


//2. Function with no return will give you undefined

function sum(a, b){
    const sum = a + b;
}
// const result = sum(10, 2);
// console.log(result);



// 3. Parameters that is not passed will give you undefined.

function sum(a, b, c, d){
    const sum = (a + b + c +d);
    console.log(a, b, c, d);
}
// sum(5, 7)



// 4. If return has nothing on the right side will give you undefined.

function isNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    else{
        return a + b;
    }
}

// const total = isNegative(6, 6);
// console.log(total);



// 5. Property that doesn't exist on an object will give you undefined.

const mohon = {name: 'Mohon Saha', age: 22};
// console.log(mohon.name, mohon.job);


// 6. Accessing array elements outside of the index range will give you undefined.

const sixth = [1, 3, 8, 45];
// console.log(sixth[2], sixth[3], sixth[10]);



// 7. Deleting an element inside an array will give you undefined.

const sixth2 = [1, 3, 8, 45];
delete sixth2[2];  // We should not use it. Instade use slice.
// console.log(sixth[2], sixth[3], sixth[10]);



// 8. Set a value directly undefinrd will give you undefined.

const name = undefined;   // Normally we should not use it.

const name2 = null;      // We can use it for not difining value.

const data = {results: [], updated: null};  // We can use it for not difining value.

