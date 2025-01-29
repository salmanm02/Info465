
const readline = require('readline');

// Creating an interface for input and output through the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store integers
let numbers = [];

// Function to prompt the user for numbers or 'q'/'Q' to quit
const getNumber = () => {
    rl.question('Enter an integer (or "q" to quit): ', (input) => {
        input = input.trim(); // Trim whitespace to avoid accidental input errors

        // Check if the user wants to quit
        if (input.toLowerCase() === 'q') {
            console.log("\nNumbers entered:", numbers);

            // If numbers are entered, check the product condition
            if (numbers.length > 1) {
                if (checkProductCondition(numbers)) {
                    console.log("Condition is met");
                } else {
                    console.log("Condition was not met");
                }
            } else {
                console.log("Not enough numbers to check the condition.");
            }

            // Close the readline interface
            rl.close();
        } else {
            // Convert input into a number
            const number = Number(input);

            // Check if the input is a valid integer
            if (Number.isInteger(number)) {
                numbers.push(number); // Add to array
                console.log(`You entered: ${number}`);
            } else {
                console.log("Please enter a valid integer.");
            }

            getNumber(); //  next input
        }
    });
};

// Function to check if the product of any two numbers equals a third number
const checkProductCondition = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if (k !== i && k !== j && nums[i] * nums[j] === nums[k]) {
                    console.log(`Condition is met: ${nums[i]} x ${nums[j]} = ${nums[k]}`);
                    return true;
                }
            }
        }
    }
    return false;
};

// Start the program
getNumber();
