//CH # 1
//1.Write a script to greet your website visitor using JS alert box.
alert("HELLO DEAR VISITOR!I hope you,re doing good.You successfully reach our website official homepage and i beleieve there must be a reason for that so enjoy and look what you want and take your time be comfortable.Have a nice ride. ");

//2. Write a script to display following message on your web page:
alert("Error!Please enter a valid password.");

//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land... \n  Happy Coding!");

//4. Write a script to display following messages in sequence:
alert("Welcome to JS land...");
alert("Happy Coding!\n Prevent this page from creating additional dialogues.");

//5. Generate the following message through browser’s developer console:
alert("Hello...I can run JS through my web browser\'s console");
console.log("Hello...I can run JS through my web browser\'s console");

//CH # 2
//1. Declare a variable called username.
var username= "HUMBALJAMEEL";
//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myname="ABU-HUMBAL JAMEEL";
//3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.
var message="HELLO WORLD";
alert("HELLO WORLD");
//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "ABU-HUMBAL JAMEEL";
var studentAge = 20;
var studentGrade = "A+";
var studentEmail = "humbaljameel@gmail.com";

alert("Name: " + studentName);
alert("Age: " + studentAge);
alert("Grade: " + studentGrade);
alert("Email: " + studentEmail);
//5. Write a script to display the following alert using one JS variable:
var PIZZA,PIZZ,PIZ,PI,P;
alert("PIZZA \n PIZZ \n PIZ \n PI \n P");
//6. Declare a variable called email and assign to it a string that
//represents your Email Address(e.g. example@example.com).
//Show the blow mentioned message in an alert box.(Hint: use
//string concatenation)
var email = "humbaljameel@gmail.com";
alert("My email address is 'humbaljameel@gmail.com'");
//7. Declare a variable called book & give it the value “A
//smarter way to learn JavaScript”.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book A smarter\n way to learn JavaScript ");
//8. Write a script to display this in browser through JS.
document.write("Yah!I can write html content through JavaScript.");
//9. Store following string in a variable and show in alert and browser through JS.
var display="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
document.write("<br/>▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//CH # 3
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var Age = 20;
alert("I am 20 years old.")
//2. Declare & initialize a variable to keep track of how many
//times a visitor has visited a web page. Show his/her
//number of visits on your web page. For example: “You
//have visited this site N times”.
console.log("You have visited this website 23 times.")
//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = "2004"
document.write("<br/> My birth year is 2004.")
//4. A visitor visits an online clothing store
//www.xyzClothing.com . Write a script to store in variables
//the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to
//order
//Show the following message in your browser: “John
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName= "David Johnson";
var productTitle = "T-shirts";
var quantity= "4";
document.write("<br/>David Johnson ordered 4 T-shirts on XYZ Clothing store")

//CH # 4
// 1. Declare 3 variables in one statement.
let variable1 = 1, variable2 = "hello", variable3 = true;

// 2. Declare 5 legal & 5 illegal variable names.
let legal1 = "name"; // Legal
let legal2 = "age"; // Legal
let legal3 = "my_variable"; // Legal
let legal4 = "userName"; // Legal
let legal5 = "first_name"; // Legal

let illegal1 = 123; // Illegal
let illegal2 = "123"; // Illegal
let illegal3 = "  "; // Illegal
let illegal4 = "first name"; // Illegal
let illegal5 = "my-variable"; // Illegal

// 3. Display this in your browser
document.write("<br><h1>Rules for naming JS variables</h1>");
document.write("<br><br>Variable names can only contain letters, numbers, _ and $. For example: $my_1stVariable");
document.write("<br>Variable names must begin with a letter, $ or _. For example: $name, _name or name");
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable names should not be JS keywords");

//CH # 5
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
const num1 = 3;
const num2 = 5;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
document.write("<br><br>The sum of 3 and 5 is 8")
//2. Repeat task1 for subtraction, multiplication, division & modulus.
//subtraction
const numbers1 = 3;
const numbers2 = 5;

// subtract two numbers
const subtraction = num1 - num2;

// display the subtraction
console.log('The subraction of ' + num1 + ' and ' + num2 + ' is: ' + subtraction);
document.write("<br>The subtraction of 3 and 5 is -2")
//multiplication
const number1 = 3;
const number2 = 5;

// multiply two numbers
const multiplication = num1 * num2;

// display the multiply
console.log('The multiplication of ' + num1 + ' and ' + num2 + ' is: ' + multiplication);
document.write("<br>The multiplication of 3 and 5 is 15")
//division
const numberss1 = 3;
const numberss2 = 5;

// divide two numbers
const division = num1 / num2;

// display the division
console.log('The division of ' + num1 + ' by ' + num2 + ' is: ' + division);
document.write("<br>The division of 3 by 5 is 0.6")
//modulus
const numbersss1 = 3;
const numbersss2 = 5;

// divide two numbers
const modulus = num1 % num2;

// display the modulus
console.log('The modulus of ' + num1 + ' and ' + num2 + ' is: ' + modulus);
document.write("<br>The modulus of 3 and 5 is 3")

//3. Do the following using JS Mathematic Expressions
// 6. Declare a variable
let myVariable; 
console.log("Value after variable declaration is:", myVariable); 
document.write("<br><br>Value after variable declaration is: ??.")

// 7. Initialize the variable
myVariable = 5; 
console.log("Initial value:", myVariable); 
document.write("<br>Initial value: 5.")

// 8. Increment the variable
myVariable++;
console.log("Value after increment is:", myVariable);
document.write("<br>Value after increment is: 6.")

// 9. Add 7 to the variable
myVariable += 7; 
console.log("Value after addition is:", myVariable);
document.write("<br>Value after addition is: 13.")

// 10. Decrement the variable
myVariable--; 
console.log("Value after decrement is:", myVariable);
document.write("<br>Value after decrement is: 12.")

// 11. Calculate the remainder
let myRemainder = myVariable % 3; 
console.log("The remainder is:", myRemainder);
document.write("<br>The remainder is : 0.")

//4. Cost of one movie ticket is 600 PKR. Write a script to
//store ticket price in a variable & calculate the cost of buying 5
//tickets to a movie. 
// 4. Cost of one movie ticket
let ticketPrice = 600;

// Calculate the cost of 5 tickets
let totalCost = ticketPrice * 5;

// Display the total cost
console.log("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");
document.write("<br><br>Total cost to buy 5 tickets of a movie is 3000PKR")

//5. Write a script to display multiplication table of any number in your browser.
// 5. Multiplication table
let number = 4;

// Display the table
console.log("Table of " + number);
for (let i = 1; i <= 10; i++) {
  console.log(number + "x" + i + "=" + (number * i));
}

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
// 6. Temperature converter
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit is" + fahrenheit);

celsius = (70 - 32) * 5/9;
console.log("Celsius is" + celsius);

//Now store a Fahrenheit temperature into a variable.
let fahrenheit2 = 70;

//Convert it to Celsius & output "NNoF is NNOC".
let celsius2 = (fahrenheit2 - 32) * 5 / 9;
console.log("Celsius2 is" + celsius2);

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
// 7. Shopping cart
let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;

let totalCosts = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

console.log("Shopping Cart");
console.log("Price of item 1 is " + priceItem1);
console.log("Quantity of item 1 is " + quantityItem1);
console.log("Price of item 2 is " + priceItem2);
console.log("Quantity of item 2 is " + quantityItem2);
console.log("Shipping Charges " + shippingCharges);
console.log("Total cost of your order is " + totalCost);

document.write("<br><br>Shopping Cart")
document.write("<br><br><br>Price of item 1 is 650")
document.write("<br>Quantity of item 1 is 3")
document.write("<br>Price of item 2 is 100")
document.write("<br>Quantity of item 2 is 7")
document.write("<br>Shipping Charges 100")
document.write("<br><br>Total cost of your order is 2750")

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// Store total marks and marks obtained
let totalMarks = 980;
let obtainedMarks = 804;

// Calculate the percentage
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("Percentage: " + percentage.toFixed(2) + "%"); // Output: Percentage: 82.04%
// Display the result in the browser
document.write("<br>Mark Sheet");
document.write("<br><br>Total marks:980");
document.write("<br>Marks obtained:804");
document.write("<br>Percentage:82.0408163265306%");

// q 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
const usd = 10;
const sar = 25;

const totalPKR = (usd * 104.80) + (sar * 28);

console.log("Total Currency in PKR: " + totalPKR); // Output: Total Currency in PKR: 1748

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression
let numb = 2; // Initialize a variable
number = (number + 5) * 10 / 2; // Perform all calculations in a single expression
console.log(number); // Output the result

//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
let currentYear = 2016;
let birthyear = 1992;
let age1 = currentYear - birthYear;
let age2 = currentYear - birthYear - 1;
console.log("They are either " + age1 + " or " + age2 + " years old.");

//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// a. Store a radius into a variable.
let radius = 20;

// b. Calculate the circumference based on the radius, and 
// output "The circumference is NN".
let circumference = 2 * Math.PI * radius;
console.log("The circumference is " + circumference);

// Calculate the area based on the radius, and output "The 
// area is NN". 
let area = Math.PI * radius * radius;
console.log("The area is " + area);

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need
//NNNN to last you until the ripe old age of NN”.
// a. Store your favorite snack into a variable
let favoriteSnack = "chocolate chip";

// b. Store your current age into a variable.
let currentAge = 15;

// c. Store a maximum age into a variable.
let maxAge = 65;

// d. Store an estimated amount per day (as a number).
let snacksPerDay = 3;

// e. Calculate how many would you eat total for the rest of 
// your life.
let totalSnacks = snacksPerDay * (maxAge - currentAge);
console.log("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);






































    



