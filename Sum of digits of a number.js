// The sum of all the digits in an integer

let number = -3458; //declaration of the variable
// Creation of function
function sumOfDigits(number) {
  if (number < 0) {
    // Check if number is negative or positiv
    number = number * -1; // Transform the integer in to a positiv number
  }
  sum = 0; // Initializing the sum to 0
  while (number > 0) {
    // Creating the while loop to execute till quotient is 0
    sum = sum + (number % 10);
    quotient = (number - (number % 10)) / 10;
    number = quotient; // Initializing number to quotient
  }
  return sum; // Terminating the function
}
console.log(sumOfDigits(number)); // loging the result of the function on the console
