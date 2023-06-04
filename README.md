# CSB310-Alternative-Language

## Implementation
The programming language I used is JavaScript. JavaScript is a popular programming language that is widely used for both front-end and back-end web development. It is well-suited for this task as it provides built-in support for object-oriented programming, file ingestion, conditional statements, assignment statements, loops, subprograms (functions/methods), unit testing, and exception handling.

### Object-oriented programming:
JavaScript supports object-oriented programming (OOP) through its prototype-based inheritance model. Objects can be created using constructor functions or object literals, and methods can be added to objects using prototype or class syntax.

### File ingestion:
JavaScript provides the FileReader API, which allows reading file content from the user's device. This is useful for file ingestion tasks, such as reading CSV files for processing.

### onditional statements:
JavaScript supports conditional statements like if-else, switch-case, and ternary operators. These statements allow for conditional execution of code based on different conditions.

### Assignment statements:
JavaScript supports assignment statements to assign values to variables or object properties. Variables can be assigned values using the assignment operator "=".

### Loops:
JavaScript provides different loop constructs, such as for loop, while loop, and do-while loop, for iterative execution of code blocks.

### Subprograms (functions/methods):
JavaScript supports defining and using functions. Functions can be defined using function declarations or function expressions. They can accept parameters, perform specific tasks, and return values.

### Unit testing and exception handling:
JavaScript has various testing frameworks and libraries available for unit testing, such as Jest, Mocha, and Jasmine. These frameworks provide features for writing and executing tests to ensure the correctness of the code. JavaScript also has built-in exception handling mechanisms using try-catch blocks for handling and managing errors.

## Library
In this project, I didn't use any libraries. The decision to not use any libraries in JavaScript for this project was based on several factors. The project requirements are relatively simple and can be achieved using built-in JavaScript functionality, there may be no need to introduce additional libraries. Furthermore, I was using TextEdit to write codes so it was more complicated trying to install libraries.

## Note
Once you open the html file, all the tests are already run through console. The page then will ask you to input a file through browse. I reccommend you run the test.csv (located in the same folder) first to see the output on the page like the image below:


When you run the cell.csv, due to the large volumn of data, it will be quicker if you disenable the following code in Utilities.js:

    // Iterate over the values of the cellMap
  /*for (const [rowId, cell] of cellMap.entries()) {
    document.getElementById("answer").innerHTML += "<p> Item " + rowId + "</p>";
    document.getElementById("answer").innerHTML += "<p>" + cell.toString() + "</p>";
    document.getElementById("answer").innerHTML += "<p> Bodyweight percentile: " + cell.calculateBodyWeightPercentile(cellMap) + "</p>";
    document.getElementById("answer").innerHTML += "<p> Is it still available? " + cell.isThisPhoneStillAvailable() + "</p>";;
    document.getElementById("answer").innerHTML += "<p> How many cell that has the same OEM? " + cell.countSameOEMCells(cellMap) + "</p>";;
    document.getElementById("answer").innerHTML += "<p> How many cell that has the same model? " + cell.countSameModelCells(cellMap) + "</p>";;
    document.getElementById("answer").innerHTML += "<p> How many cell that was launched the same year? " + cell.countSameLaunchYearCells(cellMap) + "</p>";;
    document.getElementById("answer").innerHTML += "<p> How many cell that has the same bodySim? " + cell.countSameBodySimCells(cellMap) + "</p>";;
  }*/

The answer for the following questions will be located in console.  
## What company (oem) has the highest average weight of the phone body?
HP with an average weight of 453.6

## Was there any phones that were announced in one year and released in another? What are they? Give me the oem and models.

Phones with different announcement and release years: 
OEM: Motorola, Model: One Hyper 
OEM: Motorola, Model: Razr 2019 
OEM: Xiaomi, Model: Redmi K30 5G 
OEM: Xiaomi, Model: Mi Mix Alpha 

## How many phones have only one feature sensor?
432 

## What year had the most phones launched in the 2000s? 
If we consider 2000s is from 2001-2009, there is no phone released in this time period based on the given data. If we consider 2000s are the years after 2000, it's 2019 that has the most phones launched.
