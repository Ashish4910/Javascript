// shortcut for Arrays 

// push(); ==> add to end 
// pop() ==> delete from end & return 
// toString() ==> converts arrays to string 
// concat() ==> joins multiple arrays & return arrays 
// shift() ==> delete first value in arrays 
// unshift() ==> add at start 
// slice() ==> return a piece of the arrays 
// splice() ==> change original arrays (add , remove , replace ) ** note (slice(startidx , delcount, newelement))

let marks = [2, 4, 5.6, 8];

for (let student of marks) {
    console.log(student)
}
console.log('Welcome to Arrays');
// for(let i = 0; i < marks.length ; i++) {
// console.log(marks[i]);
// }