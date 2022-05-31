var VariableTextoIngresado = ""
var VariableTextoEncriptado = ""
var VariableTextoDesencriptado = ""
var chars = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};


function encriptar(){
    var e = document.getElementById("textoIngresado").value;
    var hh = e.replace(/[aeiou]/g, m => chars[m]);
    
    document.getElementById("textoResultado").value = hh;
}
function desencriptar(){
    let replacementMap = {"ai":"a","enter": "e","imes": "i","ober": "o","ufat": "u"}
    let sentence = document.getElementById("textoIngresado").value;

    for (key in replacementMap) {
		sentence = sentence.replaceAll(key, replacementMap[key])
    }

    document.getElementById("textoResultado").value = sentence;
}

/*var campoResultado = document.querySelector("#textoIngresado");
campoResultado.addEventListener("input", function(){
    var textoIngresado = document.querySelectorAll(".textoIngresado");

    if(textoIngresado.length > 0){
       
        document.getElementById("resultado").style.display = "none";
        document.getElementById("textoResultado").style.display = "inline-block";   
        
    }else{
        document.getElementById("resultado").style.display = "inline-block";
        document.getElementById("textoResultado").style.display = "none";  
        } 
    }  

);
*/