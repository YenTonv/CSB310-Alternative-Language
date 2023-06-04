# CSB310-Alternative-Language

## Implementation
The implementation of this project utilizes JavaScript, a widely-used programming language known for its versatility in both front-end and back-end web development. JavaScript offers robust features such as object-oriented programming, file ingestion, conditional statements, assignment statements, loops, subprograms (functions/methods), unit testing, and exception handling, making it an ideal choice for this task.

### Object-oriented programming:

JavaScript embraces object-oriented programming by employing a prototype-based inheritance model. In JavaScript, objects can be instantiated using constructor functions or object literals. Additionally, methods can be attached to objects using either prototype-based syntax or the modern class syntax.

### File ingestion:

JavaScript includes the FileReader API, which facilitates the reading of file content directly from the user's device. This feature proves particularly valuable for file ingestion operations, such as parsing and processing CSV files. By utilizing the FileReader API, JavaScript enables seamless integration with the user's file system, ensuring efficient and convenient file handling capabilities.

### onditional statements:
JavaScript supports conditional statements like if-else, switch-case, and ternary operators. These statements allow for conditional execution of code based on different conditions.

### Assignment statements:
JavaScript offers assignment statements for assigning values to variables or object properties. Variables can be assigned values using the assignment operator "=".

### Loops:
JavaScript provides various loop constructs, such as the for loop, while loop, and do-while loop, for iterative execution of code blocks. Loops enable repetitive operations and efficient processing of data.

### Subprograms (functions/methods):
JavaScript supports defining and using functions, which are referred to as subprograms in this context. Functions can be defined using function declarations or function expressions. They can accept parameters, perform specific tasks, and return values, promoting modularity and code reusability.

### Unit testing and exception handling:
JavaScript offers a range of testing frameworks and libraries for unit testing, including popular options like Jest, Mocha, and Jasmine. These frameworks facilitate the creation and execution of tests to ensure code correctness. JavaScript also provides built-in exception handling mechanisms, utilizing try-catch blocks to handle and manage errors effectively.

### Library
No external libraries were utilized in this project. The decision to refrain from incorporating additional JavaScript libraries was based on several factors. The project requirements were relatively straightforward and achievable using the built-in functionality of JavaScript. Additionally, the use of libraries would have added unnecessary complexity, especially considering the development environment used (TextEdit).

### Note
Once you open the html file, all the tests are already run through console as showed in the image below:
![Tests](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/f85d3a5d-7742-4dc2-9212-46ca8dbd1e8a)


The page then will ask you to input a cell.csv file through browser. The file is located in the same folder. When you run the cell.csv, the page will show the first 20 cells only. This is intentional due to the large volumn of the file. However, the file will be run through console.log and you will find the answer to the questions below there.

The answer for the following questions will be located in console.  
### What company (oem) has the highest average weight of the phone body?
HP with an average weight of 453.6
![HighestWeight](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/e6d4a380-6148-4138-a6c8-a067afdfa860)

### Was there any phones that were announced in one year and released in another? What are they? Give me the oem and models.

Phones with different announcement and release years: 

OEM: Motorola, Model: One Hyper 

OEM: Motorola, Model: Razr 2019 

OEM: Xiaomi, Model: Redmi K30 5G 

OEM: Xiaomi, Model: Mi Mix Alpha 

![Different launch vs release](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/3532fa38-9607-47c3-81f4-6a83f0239b37)


### How many phones have only one feature sensor?
432 ![PhoneOnlyOneSensor](https://github.com/YenTonv/CSB310-Alternative-Language/assets/92559627/4c8068d1-b8e1-48eb-93e6-864830dd373d)


### What year had the most phones launched in the 2000s? 
If we consider 2000s is from 2001-2009, there is no phone released in this time period based on the given data. If we consider 2000s are the years after 2000, it's 2019 that has the most phones launched.
