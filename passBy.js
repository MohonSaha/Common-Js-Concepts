// Topic: Pass By Function


// If we pass the value as primitive type. And we change the parameters value in the function scope. It doses not change in the outside of the function. For eample the output of line number 15 and 18 are same. So primitive type are pass by value.

let num1 = 30;
let num2 = 40;

function sum(a, b){
    a = 60;
    const result = a + b;
    return result;
}

console.log(num1);
const result = sum(num1, num2);
console.log(result);
console.log(num1);



// If we pass the value as non primitive type. And we change the parameters value in the function scope. It will change in the outside of the function. For eample the output of line number 36 and 39 are same. So object and array pass by reference.



let group1 = {male: 'Sakib', female: 'Bubli'};
let group2 = {male: 'Dev', female: 'Koyel'};

function makeMovie(couple1, couple2){
    couple1.male = 'Manna';
    couple2.male = 'Jeet';
}



console.log(group1, group2);
const getResult = makeMovie(group1, group2);
console.log(getResult);
console.log(group1, group2);