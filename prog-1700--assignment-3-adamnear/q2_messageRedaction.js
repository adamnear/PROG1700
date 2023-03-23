"use strict";

/*
Author: Adam Nearing
Date: Mar. 2nd, 2023
Title: PROG1700 Assignment 3- Q2 Message Redaction
*/

var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //Input
    var userInput = readlineSync.question("Enter a phrase (or type exit to quite program): ");
    var redactedLetters = readlineSync.question("Type a comma-separted list of letters to redact: ");
    var letterAmount = 0;
    var newOutput = userInput;
    var lettersArray = redactedLetters.split(",");

//Need to create function for the processing below

    if(userInput.toUpperCase == "EXIT"){
        console.log("Exitting program...");
    } else if(
        for(var i = 0 ; i < lettersArray.length ; i++){    
        for(var j = 0 ; j < userInput.length ; j++){

            if(lettersArray[i].toUpperCase() == userInput[j].toUpperCase()){
                letterAmount++;
            }
        }
        newOutput = newOutput.replaceAll(lettersArray[i].toUpperCase(),"_");
        newOutput = newOutput.replaceAll(lettersArray[i],"_");
        }

        console.log(`Number of letters redacted: ${letterAmount}`);
        console.log(`Redacted phrase: ${newOutput}`);

    )
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
