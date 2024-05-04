/*let arr = ["ram", "shyam" ,"sita","gita"];
let marks = [1,25,36,25,45];
let info = [ "priya", 22 ,"hattiban"];
*/

/*let marks = [ 45,78,65,98,45];
 marks [0]= 66; //changing  value
 console.log(marks);
*/


/*let arr = ["ram", "shyam" ,"sita","gita"];
//for loop
 for (let idx=0; idx < arr.length; idx++)
 {
    console.log(arr[idx]);
 }

 //for of
for(let el of arr){
    console.log(el);
}
*/
/*
let arr = [85, 97, 44,37,76,60];
let sum = 0;
for (let i=0; i<arr.length; i++)
{
    sum = sum + arr[i];
}
let avg = sum / arr.length;
console.log(avg);
*/

// let sum = 5+8+6+9;
// let avg = sum / 4;
// console.log(avg);

/*
//for of
let items = [250,645,300,900,50];
let i= 0;
for(let val of items){
    let offer = val/10;
    items[i] = items[i]-offer;
    console.log(items[i]);
    i++;
}
*/

/*
//for loop
let items = [250,645,300,900,50];
let offer = 0;
for(let i = 0; i<items.length; i++)
{
    offer = items[i]/10;
    items[i] = items[i]-offer;
}

console.log(items);
*/
/*
let items = ["potato","apple","litchi"];
items.push("cips","fygs","gsjh");
// items.pop();
let deletedItem = items.pop();
console.log(items);
console.log("deleted",deletedItem);
console.log(items.toString);
console.log(items);
*/

/*
let marvelHeros =["thor","spidermsn","ironman"];
let dcHeroes = ["superman","batman"];
let heroes = marvelHeros.concat(dcHeroes);
console.log(heroes);
*/
/*
let marvelHeros =["thor","spidermsn","ironman","ftuygk"];
console.log(marvelHeros);
console.log(marvelHeros.slice(1,3));
*/

/*
let arr = [1,2,3,5,6,7,6,8,9];
arr.splice(2,2,101,304);
//add
arr.splice(2,0,101);

//delete
arr.splice(3,1);

//replace
arr.splice(3,1,101);
*/

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
companies.splice(2,1); //delete
companies.splice(2,1,"Ola");//add

companies.push("Amazon");//last maa add