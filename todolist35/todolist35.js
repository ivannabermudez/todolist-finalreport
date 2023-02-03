//global vars
let list = []; //to do list 
let prodID=0;  //thing to do
function addProduct(){
    let product = document.getElementById("txtProduct").value; //get the value
   list.push(product); //adding the product into the array
displayList(product); //display the value into the HTML
document.getElementById("txtProduct").value = ""; //clearing the input
updateNumberProducts();
}

function displayList(newProduct){

    let item =`<li id="${prodID}"> ${newProduct}<span onclick="deleteProd(${prodID})"> ✔️</span></li>`; //creating the html tmp
    console.log(item);
    const ul = document.getElementById ("productsList"); //getting the html element

    ul.innerHTML+=item; //adding the item to the html
    prodID++;
}

function updateNumberProducts(){
    document.getElementById("amountProducts").innerHTML=cart. length;
}

function deleteProd(id){
    document.getElementById(id).remove();
    list.pop();
    updateNumberProducts();
}

function init(){
    console.log("Init");
    updateNumberProducts();
}

window.onload= init; //wait to render the html