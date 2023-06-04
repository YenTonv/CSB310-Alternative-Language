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
Once you open the html file, all the tests are already run through console as showed in the image below:
![Tests](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/f85d3a5d-7742-4dc2-9212-46ca8dbd1e8a)


The page then will ask you to input a cell.csv file through browser. The file is located in the same folder. When you run the cell.csv, the page will show the first 20 cells only. This is intentional due to the large volumn of the file. However, the file will be run through console.log and you will find the answer to the questions below there.

The answer for the following questions will be located in console.  
## What company (oem) has the highest average weight of the phone body?
HP with an average weight of 453.6
![HighestWeight](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/e6d4a380-6148-4138-a6c8-a067afdfa860)

## Was there any phones that were announced in one year and released in another? What are they? Give me the oem and models.

Phones with different announcement and release years: 
OEM: Motorola, Model: One Hyper 
OEM: Motorola, Model: Razr 2019 
OEM: Xiaomi, Model: Redmi K30 5G 
OEM: Xiaomi, Model: Mi Mix Alpha 
![Different launch vs release](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/3532fa38-9607-47c3-81f4-6a83f0239b37)


## How many phones have only one feature sensor?
432 ![PhoneOnlyOneSensor](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/4c8068d1-b8e1-48eb-93e6-864830dd373d)


## What year had the most phones launched in the 2000s? 
If we consider 2000s is from 2001-2009, there is no phone released in this time period based on the given data. If we consider 2000s are the years after 2000, it's 2019 that has the most phones launched.
