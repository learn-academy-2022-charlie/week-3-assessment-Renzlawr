// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Create a test wtih describe that takes in fibSequence as a function
// It takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// expects two results

describe("fibSequence", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
}) 

// Red
// FAIL  ./code-challenges.test.js
// fibSequence
//   ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)
// ● fibSequence › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//   ReferenceError: fibSequence is not defined

// b) Create the function that makes the test pass.

// Create a function named fibSequence that takes in length as a parameter
// Create variables, result will be our array starting with our two starting nums, num1 with be the first number in our array, num2 will be the second number in our array, next will be the next number.
// for loop with i set to 2(since our result starts with 2 values and we don't need to do anything to either) and as long as i is less than our length param we'll do a lot of confusing reassigning
// next will be the sum of num1 and num2
// num1 will become num2
// num2 will become next 
// we want to push next into our result array
// we also want to update count so our iteration continues until our conditon is met
// pass test

const fibSequence = (length) => {
    let result = [1, 1],
    num1 = result[0],
    num2 = result[1],
    next

    for(let i = 2; i < length; i++) {
        next = num1 + num2
        num1 = num2
        num2 = next
        result.push(next)
    }
    return result
}
// This question was extremely difficult for me for some reason, but giving up is not an option for me! I had to look at some outside examples and the formula for the Fibonacci sequence. I also learned I can create multiple variables with one variable declaration and some commas which is cool. 

// Green 
// PASS  ./code-challenges.test.js
//   fibSequence
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (4 ms)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Create a test wtih describe that takes in sortOddsUp as a function
// takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// expects two results

describe("sortOddsUpFinalRefactor", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
        expect(sortOddsUpFinalRefactor(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortOddsUpFinalRefactor(fullArr2)).toEqual([-823, 7, 23])
    })
})

// Red
// FAIL  ./code-challenges.test.js
// sortOddsUp
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)
// ● sortOddsUp › takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//   ReferenceError: sortOddsUp is not defined

// b) Create the function that makes the test pass.

// Create a function sortOddsUp that takes in array as its parameter
// create a new variable called numArr and filter out everything that isn't a number
// create a new variable called odds and filter out all even numbers
// return the odds array sorted in ascending order 
// pass test

const sortOddsUp = (array) => {
    let numArr = array.filter(value => {
        return typeof value === "number"
    })
    let odds = numArr.filter(num => {
        return num % 2 != 0
    })
    return odds.sort((a, b) => a - b)
}

// Green 
// PASS  ./code-challenges.test.js
// sortOddsUp
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (2 ms)

// Refactor 1 

const sortOddsUpRefactor = (array) => {
    return array.filter(value => {
        return typeof value === "number"
    }).filter(num => {
        return num % 2 != 0
    }).sort((a, b) => a - b)
}

// Final Refactor

const sortOddsUpFinalRefactor = (array) => {
    return array.sort((a, b) => a - b).filter(value => {
        return typeof value === "number" && value % 2 != 0
    })
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Create a test wtih describe that takes in addSum as a function
// takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// expects three results

describe("addSum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
        // Expected output: []
        expect(addSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(addSum(numbersToAdd3)).toEqual([])
    })
})

// Red 
// FAIL  ./code-challenges.test.js
// addSum
//   ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// ● addSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//   ReferenceError: addSum is not defined

// b) Create the function that makes the test pass.

// Create a function named addSum that takes in array as its param
// map through our array taking in value and index as params of the callback func
// slice the array between 0 and the next index
// reduce that to obtain the sums
// Pass test

const addSum = (array) => {
    return array.map((value, index) => {
        return array.slice(0, index + 1).reduce(
            (prev, curr) => prev + curr)
    })
}

// This question again was extremely difficult. Reduce was challenging to find a solution for getting each sum instead of the total sum. Is there better ways to think about this problem?

// Green!!!!!
// PASS  ./code-challenges.test.js
// addSum
//   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)



// A few of my attemps of fragmented code that ended up being wrong - A lot more were deleted

// const addSum = (array) => {
//     let newArr = [array[0]]
//     for(let i = 0; i <= array.length; i++) {
//      let sum = array.at(+1) + array.at(-1)
//      newArr.push(array[i] + array[nextNum])
//         let num = array.at[i]
//         return num
//     }
// }
        
// const addSum = (array) => {
//     let newArr = []
//     return array.reduce(
//         (previousValue, currentValue) => newArr.push(previousValue + currentValue)
//       )     
// }




