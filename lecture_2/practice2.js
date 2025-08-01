// write a code which can give grades to student according to their scrores 

// 80-100 , A
// 70-89 , B
// 60-69 , c
// 50-59 , D
// 0-49 , F

alert('Check Your Grades Through Your Marks');
let enter_your_marks = prompt('Enter your Marks(In Number)');

if(enter_your_marks >= 80 && enter_your_marks <= 100){
    console.log("Success Your Grades is : A");
}else if(enter_your_marks >= 70 && enter_your_marks <= 89)
{
    console.log("Success Your Grades is : B");
}else if(enter_your_marks >= 60 && enter_your_marks <= 69){
    console.log("Success Your Grades is : C");
}
else if(enter_your_marks >= 50 && enter_your_marks <= 59){
    console.log("Success Your Grades is : D");
}else if (enter_your_marks >= 0 && enter_your_marks <= 49) {
    console.log("Success Your Grades is : F");
}else {
    console.log("Enter Valid Number 😒");
}