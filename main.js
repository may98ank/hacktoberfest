var prosinp = document.getElementById("pros");
var consinp = document.getElementById("cons");
var prosList = document.getElementById("proslist");
var consList = document.getElementById("conslist");

function addpros() {
    prosList.innerHTML += ("<li style='color:green;'>" + prosinp.value + "</li>");
    prosinp.value = "";
    return false;
}

function addcons() {
    consList.innerHTML += ("<li style='color:red;'>" + consinp.value + "</li>");
    consinp.value = "";
    return false;
}
