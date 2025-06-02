// Challenge 1; Returning the Sum of Two Numbers
function addition(a, b) {
    console.log(a + b);
}
addition(6, 8);
// Challenge 2; Converting Minutes into Seconds
function convert(min) {
    var convertedMinutes = min * 60;
    console.log(convertedMinutes);
}
convert(5);
// Challenge 3; Finding Perimeter of a Rectangle
function perimeterRectangle(length, width) {
    var perimeter = (length + width) * 2;
    console.log(perimeter);
}
perimeterRectangle(5, 8);
// Challenge 4; Check For Negative Number
function isNegative(num) {
    if (num < 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
isNegative(3);
isNegative(-3);
isNegative(4);
// Challenge 5; Can Drive Age Determination
function canDrive(name, age) {
    if (age >= 18) {
        console.log("".concat(name, " is old enough to drive"));
    }
    else {
        console.log("".concat(name, " is not old enough to drive yet "));
    }
}
canDrive("Alice", 55);
canDrive("Oscar", 10);
// Challenge6; Finding Largest Number
function findLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
findLargest(3, 8, 6);
findLargest(-3, -8, -6);
// Challenge 7; BMI Calculator
function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 18.5) {
        console.log("Underweight");
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Normal Weight");
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        console.log("Overweight");
    }
    else {
        console.log("Obese");
    }
}
calculateBMI(28, 12.1);
calculateBMI(20, 2.5);
// Challenge 8; Greetings Based On  The Time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        console.log("Good morning, ".concat(name, "!"));
    }
    else if (hour >= 12 && hour <= 17) {
        console.log("Goodafternoon ".concat(name, "!"));
    }
    else if (hour >= 18 && hour <= 21) {
        console.log(" Goodevening, ".concat(name, "!"));
    }
    else {
        console.log("Goodnight, ".concat(name, "!"));
    }
}
greetUser("Oscar", 4);
greetUser("Angie", 21);
// Challenge 9; FizzBuzz
function fizzBuzzCheck(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
}
fizzBuzzCheck(20);
fizzBuzzCheck(10);
fizzBuzzCheck(5);
// Challenge 10; Perimeter 2 
function secondPerimeter(l, num) {
    if (l = "s") {
        console.log(4 * num);
    }
    else if (l = "c") {
        console.log(2 * 6.28 * num);
    }
}
secondPerimeter("c", 10);
secondPerimeter("s", 4);
// Challenge 11; Sum of Even Numbers
function sumEvenNumber(n) {
    var sum = 0;
    for (var i = 2; i <= n; i += 2) {
        sum += i;
    }
    console.log(sum);
}
sumEvenNumber(12);
sumEvenNumber(8);
// Challenge 12; Multiply by Itself
function powerUp(num, times) {
    var answer = 1;
    for (var i = 1; i <= times; i++) {
        answer = answer * num;
    }
    console.log(answer);
}
powerUp(6, 8);
powerUp(4, 6);
// Challenge 13; Factorial Calculator
function factorial(n) {
    var answer = 1;
    for (var i = 1; i <= n; i++) {
        answer = answer * i;
    }
    console.log(answer);
}
factorial(8);
factorial(2);
// Challenge 14; Multiple Sum
function sumMultiples(n, divisor) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumMultiples(25, 5));
console.log(sumMultiples(21, 7));
// Challenge 15; Sum of Digits
function sumDigits(num) {
    var sum = 0;
    for (var i = 1; num > 0; num = Math.floor(num / 10)) {
        sum = sum + (num % 10);
    }
    return sum;
}
