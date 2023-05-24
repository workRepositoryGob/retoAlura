
function activarCopy(){
    let copyText = document.querySelector("#btnCopiar");
    copyText.style.display="block";

}
function encriptarMensaje() {
    let nombre = document.getElementById("nombre").value;

    if(nombre.length!==0){
    var imag= document.getElementById("imgMuneco");
    imag.style.display="none";   
    let textoEncriptado= encriptar(nombre);
    var mensajeInput = document.getElementById("mensajeInput");
    mensajeInput.value = textoEncriptado;
    mensajeInput.style.display = "block";
    mensajeInput.style.backgroundColor="#ffffff"
    activarBtnEncriptar();
    activarCopy();
    }
    
}

    function activarBtnEncriptar(){
        let btn= document.getElementById("btnEncriptar");
        let btn2= document.getElementById("btnDescencriptar");
        btn.disabled=true;
        btn.style.backgroundColor="#E9ECF8";
        btn.style.color="#0A3871";
        btn.style.border="1px solid #0A3871";
        btn.style.cursor="not-allowed";

        btn2.disabled=false;
        btn2.style.backgroundColor="#0A3871";
        btn2.style.color="#ffffff";
        btn2.style.border="none";
        btn2.style.cursor="pointer";
    }

    function activarBtnDesencriptar(){
        let btn= document.getElementById("btnEncriptar");
        let btn2= document.getElementById("btnDescencriptar");
        btn2.disabled=true;
        btn2.style.backgroundColor="#E9ECF8";
        btn2.style.color="#0A3871";
        btn2.style.border="1px solid #0A3871";
        btn2.style.cursor="not-allowed";

        btn.disabled=false;
        btn.style.backgroundColor="#0A3871";
        btn.style.color="#ffffff";
        btn.style.border="none";
        btn.style.cursor="pointer";
    }

function desencriptarMensaje(){
    let mensajeEncriptado= document.getElementById("mensajeInput").value;
    let textoDesencriptado= desencriptar(mensajeEncriptado);
    mensajeInput.value = textoDesencriptado;
    activarBtnDesencriptar();
}

function desencriptar(texto) {
    let textoDesencriptado = "";
    
    for (let i = 0; i < texto.length; i++) {

        let letra = texto.charAt(i);

            switch (letra) {
                case 'a':
                r= 1;break;
                case 'e':
                r= 4;break;
                case 'i':
                r= 3;break;
                case 'o':
                r= 3;break;
                case 'u':
                r= 3;break;
                default:
                r= 0;break;
            }
            i=i+r;
    textoDesencriptado+=letra;

    }

    return textoDesencriptado;
}

function encriptar(texto) {
let textoEncriptado = "";
for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    let reemplazo = reemplazarTexto(letra);
    textoEncriptado += reemplazo;
}

return textoEncriptado;
}


function reemplazarTexto(letra) {

switch (letra) {
    case 'a':
    return 'ai';
    case 'e':
    return 'enter';
    case 'i':
    return 'imes';
    case 'o':
    return 'ober';
    case 'u':
    return 'ufat';
    default:
    return letra;
}

}

function copiarMensaje() {
    let copyText = document.querySelector("#mensajeInput");
    copyText.select();

    document.execCommand("copy");

  }
  
  document.querySelector("#copy").addEventListener("click", copiarMensaje);