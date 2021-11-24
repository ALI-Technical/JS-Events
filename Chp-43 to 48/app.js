function hi() {
    alert("Assalam Alaikum");
}

function asus() {
    alert("Thank You For Purchasing \n ASUS ROG PHONE 5");
}

function iPhone13(){
    alert("Thank You For Purchasing \n iPhone 13");
}

function playStation5(){
    alert("Thank You For Purchasing \n PS5 From Our Store");
}

function xbox() {
    var choice = prompt("What Series Do You Want \n 'X' or 'S' \n Type 'X' or 'S'");
    if(choice.toUpperCase()=="X"){
        alert("Thank You For Purchasing \n Xbox Series X From Our Store");
    }
    else if(choice.toUpperCase()=="S"){
        alert("Thank You For Purchasing \n Xbox Series S From Our Store");
    }
    else{
        alert("The Field is Incorrect or Empty")
    }
}

function remove1() {
    var element = document.getElementById("r1");
    element.innerHTML="";
}

function remove2() {
    var element = document.getElementById("r2");
    element.innerHTML="";
}

function remove3() {
    var element = document.getElementById("r3");
    element.innerHTML="";
}

function remove4() {
    var element = document.getElementById("r4");
    element.innerHTML="";
}

function onOver(element) {
    element.src = "https://images.pexels.com/photos/40904/bmw-k-1300-metallic-motorcycle-40904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
}

function onOut(element) {
    element.src = "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80";
}

function add() {
    var element = document.getElementById("Timer");
    // console.log(element);
    var value = element.innerHTML;
    // console.log(value);
    ++value;

    // console.log(value);
    document.getElementById("Timer").innerHTML=value;
}

function subtract() {
    var element = document.getElementById("Timer");
    // console.log(element);
    var value = element.innerHTML;
    // console.log(value);
    --value;

    // console.log(value);
    document.getElementById("Timer").innerHTML=value;
}


