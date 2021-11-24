function submitForm() {
    email = document.getElementById("exampleInputEmail1");
    password = document.getElementById("exampleInputPassword1");
    if(email.value != "" && password.value   != ""){
        document.write("Your Email: " + email.value);
        document.write("<br><br>Your Password: " + password.value);
    }
    else{
        alert("This Field is Required")
    }
}
function readmore() {
    var para = document.getElementById("para");
    var more = "Asus ROG Phone 5 is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB & 12GB of RAM."
    para.innerHTML += more;
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").hidden = true;
}

function table(btn) {
    var firstName = prompt("Enter 1st Student Name:");
    var secondName = prompt("Enter 2nd Student Name:");
    var thirdName = prompt("Enter 3rd Student Name:");
    var fourthName = prompt("Enter 4th Student Name:");
    document.getElementById("td1").innerHTML=firstName;
    document.getElementById("td2").innerHTML=secondName;
    document.getElementById("td3").innerHTML=thirdName;
    document.getElementById("td4").innerHTML=fourthName;
    document.getElementById("btn1").disabled=false;
    document.getElementById("btn2").disabled=false;
    document.getElementById("btn3").disabled=false;
    document.getElementById("btn4").disabled=false;
    btn.disabled=true;
    btn.hidden=true;
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
