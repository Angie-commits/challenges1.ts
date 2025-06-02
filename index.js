// Challenge 1; Return the Sum of Two Numbers
function addition(a, b) {
    return a + b;
}
console.log("1. Addition:");
console.log(addition(3, 5) = $, {});
console.log(addition(-6, 9) = $, { addition: function () { } } - 6, 9);
;
console.log("");
// Challenge 2; Convert Minutes into Seconds
function convert(minutes) {
    if (minutes < 0) {
        throw new Error("Minutes cannot be negative");
    }
    return minutes * 60;
}
console.log("2. Convert:");
console.log(convert(5) = $, {});
console.log(convert(2) = $, {});
console.log("");
// Chsallenge 3; Perimeter of a Rectangle
function findPerimeter(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error("Length and width must be positive numbers");
    }
    return 2 * (length + width);
}
console.log("3. Find Perimeter:");
console.log(findPerimeter(6, 7) = $, {});
console.log(findPerimeter(20, 10) = $, {});
console.log("");
// Challenge 4; Check Negative Number
function checkNegative(num) {
    return num < 0;
}
function isNegative(num) {
    return num < 0;
}
console.log("4. Check Negative:");
console.log(checkNegative(-23) = $, { checkNegative: function () { } } - 23);
;
console.log(checkNegative(55) = $, {});
console.log("");
// Challenge 5; Age determine Can I Drive
function canDrive(name, age) {
    if (!name || name.trim() === "") {
        throw new Error("Name cannot be empty");
    }
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    if (age >= 18) {
        return $;
        {
            name;
        }
        is;
        old;
        enough;
        to;
        drive.;
    }
    else {
        return $;
        {
            name;
        }
        is;
        not;
        old;
        enough;
        to;
        drive;
        yet.;
    }
}
console.log("5. Can Drive:");
console.log(canDrive("Jane", 22) = $, {});
console.log(canDrive("June", 12) = $, {});
console.log("");
// Challenge 6 Largest Number
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log("6. Find Largest:");
console.log(findLargest(5, 9, 3) = $, {});
console.log(findLargest(10, 10, 10) = $, {});
console.log(findLargest(-1, -5, -3) = $, { findLargest: function () { } } - 1, -5, -3);
;
console.log("");
// Challenge 7 BMI Calculator
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        throw new Error("Weight and height must be positive numbers");
    }
    var bmi = weight / (height * height);
    var roundedBMI = Math.round(bmi * 10) / 10;
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi <= 24.9) {
        category = "Normal weight";
    }
    else if (bmi <= 29.9) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    return Your;
    BMI;
    is;
    $;
    {
        roundedBMI;
    }
    -$;
    {
        category;
    }
    ;
}
console.log("7. Calculate BMI:");
console.log(calculateBMI(68, 1.75) = $, {});
console.log(calculateBMI(85, 1.8) = $, {});
console.log("");
// Challenge 8; Greeting Based On Time
function greetUser(name, hour) {
    if (!name || name.trim() === "") {
        throw new Error("Name cannot be empty");
    }
    if (hour < 0 || hour > 23) {
        throw new Error("Hour must be between 0 and 23");
    }
    if (hour >= 5 && hour <= 11) {
        return Good;
        morning, $;
        {
            name;
        }
        !;
    }
    else if (hour >= 12 && hour <= 17) {
        return Good;
        afternoon, $;
        {
            name;
        }
        !;
    }
    else if (hour >= 18 && hour <= 21) {
        return Good;
        evening, $;
        {
            name;
        }
        !;
    }
    else {
        return Good;
        night, $;
        {
            name;
        }
        !;
    }
}
console.log("8. Greet User:");
console.log(greetUser("Alice", 9) = $, {});
console.log(greetUser("Bob", 15) = $, {});
console.log(greetUser("Charlie", 20) = $, {});
console.log(greetUser("Dave", 2) = $, {});
console.log("");
// Challenge 9; FizzBuzz
function fizzBuzzCheck(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Number must be an integer");
    }
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else {
        return number.toString();
    }
}
console.log("9. FizzBuzz Check:");
console.log(fizzBuzzCheck(3) = $, {});
console.log(fizzBuzzCheck(10) = $, {});
console.log(fizzBuzzCheck(15) = $, {});
console.log(fizzBuzzCheck(7) = $, {});
console.log("");
// Challenge 10; Perimeter 2
function perimeter(shape, num) {
    if (num <= 0) {
        throw new Error("Number must be positive");
    }
    var normalizedShape = shape.toLowerCase();
    if (normalizedShape === "s") {
        return 4 * num;
    }
    else if (normalizedShape === "c") {
        return Math.round((2 * Math.PI * num) * 100) / 100;
    }
    else {
        throw new Error("Shape must be 's' for square or 'c' for circle");
    }
}
console.log("10. Perimeter 2:");
console.log(perimeter("c", 4) = $, {});
console.log("");
// Challenge 11; Sum of Even Numbers
function sumEvenNumbers(n) {
    if (n < 0) {
        throw new Error("Number must be non-negative");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Number must be an integer");
    }
    var sum = 0;
    for (var i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log("11. Sum Even Numbers:");
console.log(sumEvenNumbers(6) = $, {});
console.log(sumEvenNumbers(10) = $, {});
console.log(sumEvenNumbers(5) = $, {});
console.log("");
// Challenge 12; Multiply by Itself (Power function)
function powerUp(num, times) {
    if (!Number.isInteger(times) || times < 0) {
        throw new Error("Times must be a non-negative integer");
    }
    if (times === 0)
        return 1;
    var result = 1;
    for (var i = 0; i < times; i++) {
        result *= num;
    }
    return result;
}
console.log("12. Power Up:");
console.log(powerUp(2, 3) = $, {});
console.log(powerUp(5, 0) = $, {});
console.log(powerUp(3, 4) = $, {});
console.log("");
// Challenge 13; Factorial Calculator
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n === 0)
        return 1;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("13. Factorial:");
console.log(factorial(0) = $, {});
console.log(factorial(4) = $, {});
console.log("");
// Challenge 14; Multiple Sum
function sumMultiples(n, divisor) {
    if (!Number.isInteger(n) || !Number.isInteger(divisor)) {
        throw new Error("Both parameters must be integers");
    }
    if (n < 0 || divisor <= 0) {
        throw new Error("n must be non-negative and divisor must be positive");
    }
    var sum = 0;
    for (var i = divisor; i <= n; i += divisor) {
        sum += i;
    }
    return sum;
}
console.log("14. Sum Multiples:");
console.log(sumMultiples(10, 2) = $, {});
console.log(sumMultiples(15, 3) = $, {});
console.log(sumMultiples(7, 5) = $, {});
console.log("");
// Challenge 15; Sum of Digits
function sumDigits(num) {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    var sum = 0;
    var workingNum = num;
    while (workingNum > 0) {
        sum += workingNum % 10;
        workingNum = Math.floor(workingNum / 10);
    }
    return sum;
}
console.log("15. Sum Digits:");
console.log(sumDigits(123) = $, {});
console.log(sumDigits(4567) = $, {});
console.log(sumDigits(0) = $, {});
console.log("");
