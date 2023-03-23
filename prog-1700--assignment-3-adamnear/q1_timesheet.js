"use strict";

/*
Author:Adam Nearing
Date: Mar. 2nd, 2023
Title: PROG1700 Assignment 3- Q1 Timesheet

*/
var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //Input
    var anArray = new Array(5);
    for(var i=0; i<5; i++){
        anArray[i] = Number(readlineSync.question(`Enter hours worked on day ${i+1}: `));
    }
<<<<<<< HEAD
    //anArray after the loop [1,2,3,4,5]
    for(var i=0; i<5; i++){
        console.log(`No. ${i+1}: ${anArray[i]}`);
    }

=======
>>>>>>> 94bd822a22c13422effc48a435687d4f431fa083
    
    var hours = [i];
    var highestHour = hours[0];
    var highestIndex = 0;

    //find the highest number and corresponding index
    for(var i = 0; i<hours.length; i++)
    {
        if(hours[i] > highestHour){
            highestHour = hours[i];
            highestIndex = i
        }       
    } 
    
    console.log(`The highest hour day was: ${highestHour}`); 

    //find the sum of all number in the hours array
    var hourSum = 0;
    for(var i = 1; i<hours.length; i++)
    {
        hourSum = hourSum + hours[i];
    }
    console.log(`Sum of all numbers: ${hourSum}`);

    //find the sum of all number in the hours array divided it by total count of entries (i.e. average)
    console.log(`Average of all numbers: ${parseFloat(hourSum)}`)

<<<<<<< HEAD
    //find and print all numbers smaller than x

=======
    //find and print all numbers smaller than 7
    if(hours[i] < 7){
        hours[i] = slackedHours;
        console.log(`Days your slacked off (worked less than 7 hours): ${slackedHours}`);
    }
>>>>>>> 94bd822a22c13422effc48a435687d4f431fa083
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

