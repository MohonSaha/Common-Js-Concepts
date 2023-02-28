// Explaine CallBack Function: (11): call a function named greeting. This greeting function pass two parameters first one is a function and second one is name. (3): Then it execute the greeting function. Greeting function call anothor function named greetingHandler and pass one parameter named name. (7): Then greetingHandler will execute and console log. 


/*
function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning Mr', name);
}

greeting(greetingHandler, 'Mohon Saha');

*/




// More about callback function:


function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning Mr', name);
}

function greetingEvening(name){
    console.log('Good Evening Mr', name);
}

function greetingNight(name){
    console.log('Good Night Mr', name);
}

// We are calling the same greeting function by different handler.
greeting(greetingHandler, 'Mohon Saha');
greeting(greetingEvening, 'Tom Cruse');
greeting(greetingNight, 'Shanto Alom');



// The best example of callack function is addEvventLIstener() function.