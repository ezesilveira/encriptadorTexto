var VariableTextoIngresado = ""
var VariableTextoEncriptado = ""
var VariableTextoDesencriptado = ""
var chars = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};
var chars2 = {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'};
//document.getElementById("textoResultado").style.display = "none";

function encriptar(){
    var e = document.getElementById("textoIngresado").value;
    var hh = e.replace(/[aeiou]/g, m => chars[m]);
    console.log(hh);
    document.getElementById("textoResultado").value = hh;
}
function desencriptar(){
    var e = document.getElementById("textoIngresado").value;
    var hh = e.replace(/[ai]/g, m => chars2[m]);
    console.log(hh);
    document.getElementById("textoResultado").value = hh;
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