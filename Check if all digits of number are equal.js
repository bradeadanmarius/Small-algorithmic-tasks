// Check if all the digits in a number are the same

let number = 2222222            // Declaration of variable
function equalityCheck (number){   // Creating a function
    lastDigit = number%10       // Decalation of a variable and asigning the the last digit to the variable
    number = (number - number%10)/10 // Geting rid of the last digit 
    while (number>0){           // Creating while loop to check for equality
        if (lastDigit == number%10){
            number = (number - number%10)/10 
            console.log (number)
        } else {
            return false
        }
    }
    return true
}

console.log (equalityCheck(number)) // Loging on to the console 
