"use strict";


/*
Author: Adam Nearing
Date: Mar. 21th, 2023
Description: Ex. 16, airline safety
*/

var readlineSync = require("readline-sync");
var fs = require('fs'); //file system library for storing data
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //read the csv file and store in rawText
    var rawText = fs.readFileSync('airline-safety.csv', 'utf8'); //reading the whole file
    var lines = rawText.split('\r\n'); //splitting the file by line
    var airlineInfo2D = [];
    for (var i = 1; i < lines.length; i++)
    {
    // coloumns 4 and 7 represent fatalities
    // coloumn 1 is kms
    // fatalByKM = coloum1/(coloum 4 + coloum 7)
        //airlineInfo2D.push(lines[i].split(",")); //lines [i].split generate more data and each will be pushed to the airlineInfor2D array
        var airlineInfoRow = []; // create a temp row to store the data
        for(var m = 0; m < lines[i].split(",").length; m++){
            if (m == 0){
                airlineInfoRow.push(lines[i].split(",")[0]);
            } else{
                airlineInfoRow.push(Number(lines[i].split(",")[m]));
            }
        }
        var fatalByKM = (airlineInfoRow[4]+airlineInfoRow[7])/airlineInfoRow[1]*100;
        airlineInfoRow.push(fatalByKM);
        airlineInfo2D.push(airlineInfoRow);
    } 
    console.log(airlineInfo2D);//reading a specific row and coloum

    //find airline with highest fatal by km
    var highestFRate = airlineInfo2D[0][8]; //8 resresents the fatality by km
    var highestFatalIndex = 0;
    for(var i = 0; i < airlineInfo2D.length; i++){ //go through each line in 2d array
        if (airlineInfo2D[i][8] > highestFRate){
            highestFRate = airlineInfo2D[i][8];
            highestFatalIndex = i;
        }
    }
    console.log(`The airline with highest Fatal per KM: ${airlineInfo2D[highestFatalIndex][0]}, with a fatal total per km as ${airlineInfo2D[highestFatalIndex][8]}`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
