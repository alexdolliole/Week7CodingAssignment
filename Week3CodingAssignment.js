//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let result = ages[ages.length-1] - ages[0];
console.log(result);

//1b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(25);
result = ages[ages.length-1] - ages[0];
console.log(result);

//1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum / ages.length);

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

sum = 0;
for (let i = 0; i < names.length; i++) {
    sum += names[i].length;
}
console.log(sum / names.length);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let total = names[0];
for (let i = 1; i < names.length; i++) {
    total = total.concat(" ",names[i]);
}
console.log(total);

//3. How do you access the last element of any array?
// You can access the last element of any array by either using the element position/array length, for example if cars = ['Toyota', 'Honda', 'Pontiac'] then if you wanted to find 'Pontiac' then the position would be cars[2] or you can use array.length[-1], which starts the count at the end of the array, which will print that last element in the array. Syntax: console.log(array[-1]);

//4. How do you access the first element of any array?
// You can access the first element of any array by using array[0]. An array count starts at 0, so the first element of an array will always be 0. So if you pinput 0, whatever element is first it what 0 will represent. Syntax: console.log(array[0]);

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

let nameLengths = []
for (i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function happy(word, n) {
    let sad = word;
    for(i = 1; i < n ; i++) {
        sad = sad.concat(word);
    }
    return sad;
}
// Then you can test it with: console.log(happy('Hello', 3));

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
// Then you can print it using: ex. console.log(fullName('Hello', 'World'));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function numbers(array) {
    sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    } if (sum > 100) {
        return true;
    } else {
        return false;
    }
}

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    } return (sum / array.length);
}

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function twoArrays(array1, array2) {
    if (average(array1) > average(array2)) {
        return true;
    } else {
        return false;
    }
}

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false;
    }
}

//13. My own function! I love to travel, so I am going to create a function called vacation that calculates if I am going on vacation based on planeTicket and pTO. If the planeTicket is less than 500 AND I have more than 14 days of pTO. I created this because my travels do actually get pased off ticket price and if I have pto, so I felt like this was the perfect funciton to create.

function vacation(planeTicket, pTO) {
    if (planeTicket < 500 && pTO > 14) {
        return 'Book the ticket!';
    } else {
        return 'The only place you are going is to work.';
    }
}
//ex. Just to test it.
var planeTicket = 800;
var pTO = 2;
console.log(vacation(planeTicket, pTO));
