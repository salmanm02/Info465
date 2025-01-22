// Importing the readline module to enable reading from the console.
const readline = require('readline');

// Creating an interface for input and output through the console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// An array to store the integers entered by the user.
let numbers = [];

// Function to prompt the user to enter numbers or 'q' to quit.
const getNumber = () => {
    rl.question('Enter a number, or q to quit: ', (input) => {
        // Check if the user wants to quit the program.
        if(input.toLowerCase() === 'q') {
            // Check if any numbers were entered before quitting.
            if(numbers.length > 0) {
                // Calculate and display the mean and median.
                console.log(`Mean: ${calculateMean(numbers)}`);
                console.log(`Median: ${calculateMedian(numbers)}`);
            } else {
                console.log('No numbers were entered.');
            }
            // Close the readline interface.
            rl.close();
        } else {
            // Convert the input into an integer.
            const number = parseInt(input);
            // Check if the input is a valid integer.
            if (isNaN(number)) {
                console.log('Please enter a valid integer.');
            } else {
                // Add the valid integer to the numbers array.
                numbers.push(number);
            }
            getNumber();
        }
    });
};

// Function to calculate the mean of the numbers in the array.
const calculateMean = (nums) => {
    const sum = nums.reduce((acc, curr) => acc + curr, 0); // Sum all elements.
    return sum / nums.length; // Divide by the number of elements to get the mean.
};

// Function to calculate the median of the numbers in the array.
const calculateMedian = (nums) => {
    nums.sort((a, b) => a - b); // Sort the array in ascending order.
    const mid = Math.floor(nums.length / 2); // Find the middle index.
    // Check if the number of elements is odd.
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2; // Calculate median.
};

// start the program.
getNumber();
