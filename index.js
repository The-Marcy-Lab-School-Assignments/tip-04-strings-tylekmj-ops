/*
Complete this function using a for loop

You should not use the reverse method and you should not use the reverse method or convert the input to an array.

The function should return a NEW string as the output. 
*/
function reverseString(str) {
    let revStr = ""
    let lengthIndex = str.length - 1

    for (let i = lengthIndex; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
}

// Test the function
console.log(reverseString("Hello")); // Output: "olleH"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
