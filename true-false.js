
/*
# TRUTHY VALUE:
1) True
2) Any number Positive or Negative excepts 0
3) Any string excepts empty string
4) White space
5) '0' , 'false'  (All are string here)
6) {} Empty object
7) [] Empty Array



#FALSY VALUE: 
1) False
2) 0
3) empty string
4) Undefined
5) Null


*/



// Check falsy:


// Explane: When we use ! we convert the value from false to true. And when the value will be true it will execute the code in the if condition. But when the value will be false it will not execute the code in the if condition.
const num = '2';
if(!num){
    console.log('I am false');
}



// Check truthy 

const num2 = ' ';
if(!!num2){
    console.log('I am true');
}