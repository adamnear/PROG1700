"use strict";

/*
Author:Adam Nearing
Date: Mar. 2nd, 2023
Title: PROG1700 Assignment 3- Q3 Girl Guide Cookie Sell-off

*/
var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //Input
    var enterParticipantNum = Number(readlineSync.question("Enter the number of quides selling cookies: "));
    var enterNames = "";
    var enterBoxesSold = 0;
    var highestSold = 0;
    var firstPrice = "Trip to Girl Guide Jamboree in Aruba!";
    var secondPrize = "Super Seller Badge";
    var thirdPrize = "Left over cookies";
    var boxesSoldAverage = 0;
    
    //Display the prizes
}

function processing(participantNum, names, boxesSold, soldAverage, highestSold, prizeOne, prizeTwo, prizeThree)
{
    for(var i = 0; i < participantNum.length; i++){
        names[i] = readlineSync.question(`Enter the name of quide ${participantNum[i]}: `);
        boxesSold[i] = Number(readlineSync.question(`Enter the number of boxes sold by ${names[i]}: `));
    }

    //Find the average number of boxes sold be each quide
    var soldAverage = boxesSold[i] + boxesSold;
    console.log(`The average number of boxes sold by each guide was ${soldAverage}: `);

    //Find the prizes
    for(var i = 0; i < participantNum[i].length; i++){
        if((boxesSold % i == 0)&&(i > highestSold)){
            highestSold = i;
            boxesSold = prizeOne;
        } else if(boxesSold[i] > soldAverage){
        boxesSold == prizeTwo;
        } else if((boxesSold[i] > 1)&&(boxesSold[i] < soldAverage)){
            boxesSold == prizeThree;
        } else{
            console.log("");
        }
    }
    return 
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
