var VariableTextoIngresado = ""
var VariableTextoEncriptado = ""
var VariableTextoDesencriptado = ""
var chars = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};


function encriptar(){
    var e = document.getElementById("textoIngresado").value;
    var hh = e.replace(/[aeiou]/g, m => chars[m]);
    document.getElementById("textoResultado").value = hh;
    display();
}
function desencriptar(){
    let replacementMap = {"ai":"a","enter": "e","imes": "i","ober": "o","ufat": "u"}
    let sentence = document.getElementById("textoIngresado").value;

    for (key in replacementMap) {
		sentence = sentence.replaceAll(key, replacementMap[key])
    }
    document.getElementById("textoResultado").value = sentence;
    display();
}

function display(){
    document.getElementById("imagenesResultado").style.display = "none";
    document.getElementById("resultadoFinal").style.display = "inline-block";  
}
function copiarPortapapeles() {
    let copyText = document.querySelector("#textoResultado");
    copyText.select();
    document.execCommand("copy");
}