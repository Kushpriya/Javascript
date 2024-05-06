/*function myFunction(){
    console.log("hello world!!");
    console.log("Priya Kushwaha");
}
myFunction();
*/

/*
function myFunction(msg){
    //parameter ->input
    console.log(msg);
}
myFunction(" I Love JS "); //argument
*/

/*
function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);
//  function parameter -> they are like local variables of function -> block scope
*/

/*
//arrow function
const sum=(a,b)=>{
    console.log(a+b);
}

const mul = (a,b) =>{
    console.log(a*b);
}

const print=()=>{
    console.log("hello world");
}
*/

/*
function countVowels = (str) => {
    let count = 0;
    for (const char of str )
        {
            if(char === "a" ||
             char === "e"||
             char === "i"||
             char === "o"||
             char === "u")
                {
                count++;
            }
        }
        return count;
}
*/
/*
let arr = [1,2,3,4,5,8,6];
arr.forEach(function printVal(val) {
    console.log(val);
}
);
*/
/*
// let arr = [1,2,5,8,57,9];
let arr = ["priya","sita","gita","ram","shyam"];
arr.forEach((val)=>{
    console.log(val.toUpperCase());
});
*/
/*
let arr = [1,2,3,4,5];
arr.forEach((num)=>{
 console.log(num*num); //square
});

let calcSquare = (num) =>{
    console.log(num*num);
}
*/
/*
//map
let arr = [1,5,8,6,9,7,3];
arr.map((val) => {
    console.log(val);
});
*/
/*
let arr = [1,5,8,6,9,7,3];
let newArr = arr.map((val) =>{
    return val*val;
});
console.log(newArr);
*/
/*
//filter
let arr =[1,2,3,5,4,6,8,9];
let evenArr = arr.filter((val) =>
{
   // return val%2 === 0;
    return val > 3;
});
console.log(evenArr);
*/

/*
//reduce
let arr =[1,2,3,5,4,6,8,9];
const val = arr.reduce((prev,curr) =>
{
    //return prev + curr;
    return prev > curr ? prev:curr;
});
console.log(val);
*/

/*
let marks = [87,95,69,99,98,25,45,75,92];
let marksArr = marks.filter((score) =>
{
    return score > 90;
});
console.log(marksArr);
*/

let n = prompt("Enter a number");
let arr =[];
for (let i=0; i<=n; i++)
    {
        arr[i-1] = i;
    }
    console.log(arr);

let sum = arr.reduce((prev,curr) =>
{
    return prev +curr;
});
console.log("sum=",sum);

let mul = arr.reduce((prev,curr)=>
{
    return prev * curr ;
});
console.log("product=",mul);