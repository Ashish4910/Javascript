function myFunction() {
    console.log('We are learning JS ')
}
// myFunction(); // calling the function


// arrow function 
const arrowSum = (a, b) => { // this is called function where arrowSum take 2 value as parameter to execute this method 
    console.log(a + b);  // arrow function is after  const ( arrowSum = )
}

const printHello = () => {
    console.log('Hello World');
}

// normal function
function countVowels(str) {
    let count = 0;
    for (const c of str) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    console.log('Vowels count : ', count);
    return count;
}

// with arrow function 
const countVow = (str) => {
    let count = 0;
    for (const c of str) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    console.log('Vowels count : ', count);
    return count;
}

// forEach method -- only used for arrays also called higher order function or method 
let arr = ['pune', 'delhi', 'mumbai'];

arr.forEach((val) => {
    console.log('For Each Value : ', val);
});

arr.forEach(function private(val) {
    console.log(val)
});

arr.forEach((val, idx, arr) => { // we can get value , index and full array when using forEach method 
    console.log('For Each Value : ', val, idx, arr);
});

let number = [1, 2, 3, 4];

let num_array = [];

number.forEach((val) => {
    console.log('Num Arrays : ', num_array);
    num_array.push(val * val);

});

// map method 
let newArr = number.map((val) => {
    return val * val;
});
console.log('New Array for Map : ', newArr);

// filter method 
let arr_filter = [1,2,3,4,5,6,7,8,9];


 let fil_arr = arr_filter.filter((val)=>{
    return val % 2 == 0;
});
console.log('FIlter : ', fil_arr);

// reduce method --- to return only one result then we use reduce

let arr_reduce = [1,2,3,4];

const reduce_val = arr_reduce.reduce((prev , next)=>{
return prev + next;
});
console.log('Reduce Value : ', reduce_val);