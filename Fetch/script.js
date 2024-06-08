const url = "https://cat-fact.herokuapp.com/facts";
const para =document.querySelector("#fact");
const btn = document.querySelector("#btn");


/*
let test = fetch(url);
console.log(test);
*/
/*const getFacts = async() =>{
    let response = await fetch(url);
    console.log(response); //json format
    let data = await response.json();
    para.innerHTML = data[2].text;
};*/


function  getFacts(){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        para.innerText = data[2].text;
    });

}
btn.addEventListener("click",getFacts);

/*
document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("para");
    console.log(paragraph.innerText);  // Output: Hello, world!

    // Modify the innerText
    paragraph.innerText = "Hello, JavaScript!";
});*/
