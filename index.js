/**
 * Implement the guess function that takes one parameter
 * @param {*} number 
 */

/*  Arrow Function
    function expression
    function declared
    high order function
    callback function
    IIFE
 */

    
    console.log(numberInMind);
// function expression
function guess( answer ){

    const randomNumber = numberInMind;

    if( (answer > randomNumber) || (answer < randomNumber) ){
        const responce = answer > randomNumber ? "high" : "low";
        console.log(`You have guessed too ${responce} try again`);
    }
    else if( answer === randomNumber ){
        console.log("That is correct");
    }

    /* 
     if( answer > randomNumber ){
        console.log("You have guessed too high try again");
    }
    else if( answer < randomNumber ){
        console.log("You have guessed too low try again");
    }
    else if( answer === randomNumber ){
        console.log("That is correct");
    }
    */

}

// guess(234);

/* //function declaration
const secondGuess = function(){
    console.log("Am second guess function");
}
secondGuess();

// arrow funciton
thirdGuess();
const thirdGuess = () => console.log("Am the arrow function");


// IIFE
( function (){ console.log("I am IIFE ");  } )(); */
