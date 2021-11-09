// Write a function that takes a message and an increment amount, and outputs the same letters shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.


function caesarCipher(message, amount) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let resultStr = ""

    for(let i = 0; i < message.length; i ++) {
        let eachLetter = message[i];
        let indexInAlphaber = alphabet.indexOf(eachLetter);
        let loopingIndex = (indexInAlphaber + amount) % alphabet.length
        resultStr += alphabet[loopingIndex];
    }

    return resultStr;
}


console.log(caesarCipher("cat", 2))
