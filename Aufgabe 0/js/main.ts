/*Funktion für prompt und greeter*/
function myFunction() {
    var person = prompt("What´s your name?", "Tony Stark");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "¡Hola"+" "+ person + "! What´s up?"+" "+"It´s all about the magic! :P";
    }
}

