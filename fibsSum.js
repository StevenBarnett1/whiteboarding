const fibsSum = (n) => {
    if(n===0) return 0
    if(n===1) return 1
    let fib = [1,1]
    const inner = (sequence,n) => {
        if(n===2) return sequence.reduce((accum,el)=>accum+el)
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2])
        return inner(sequence,n-1)
    }
    return inner(fib,n)
}

console.log(fibsSum(1))
console.log(fibsSum(2))
console.log(fibsSum(3))
console.log(fibsSum(4))
console.log(fibsSum(5))
