const isPalindrome = (string) => {
    for(let i = 0; i< string.length;i++){
        if(string[i] !== string[string.length-(1+i)])return false
        if(i === string.length-(i+1))return true
    }
}



console.log(isPalindrome("cat"))
console.log(isPalindrome("racecar"))
