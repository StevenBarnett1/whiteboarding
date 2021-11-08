// Write a method, digitalRoot(num). It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method.

// if number < 10, return the number
// number >= 10. sum the digits; if the result is >= 10, keep on summing until the result < 10.

// creating variable sum = 0;
// if number >= 10; lastDigit = number % 10;
// sum += lastDigt


function digitalRoot(num) {


    if (num < 10) {
        return num;
    }

    while(num >= 10) {
        let num2 = num;
        let sum = 0;

        while(num2 >= 10) {
            let lastDigit = num2 % 10;
            sum += lastDigit;
            num2 = Math.floor(num2 / 10);
        }

        sum += num2;
        num = sum;
    }

    return num;
}


console.log(digitalRoot(256))
