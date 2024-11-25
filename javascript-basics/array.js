ages = [3,12,45,67,1,9,20,10]

function checkEven(num) {
    return num % 2 == 0;
}

// console.log(ages.find(checkEven))

const newArr = ages.filter(checkEven) 
console.log(newArr)