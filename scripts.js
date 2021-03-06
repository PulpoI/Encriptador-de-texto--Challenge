const ningunMensaje = document.getElementById("ningunMensaje");
var mensajeEncriptado = document.getElementById("mensajeEncriptado");

//-- Reglas para encriptar
const encriptar = () => {
  const textArea = document.getElementById("textArea").value;
  mensajeEncriptado.classList.add("col-der");
  ningunMensaje.style.display = "none";
  let i = -1;
  let textAux = "";
  if (textArea == "") {
    textAux = "No has escrito nada. Por favor escribe algo";
  }
  while (i < textArea.length) {
    if (textArea.charAt(i) == "e") {
      textAux += textArea.charAt(i).replace("e", "enter");
    } else if (textArea.charAt(i) == "i") {
      textAux += textArea.charAt(i).replace("i", "imes");
    } else if (textArea.charAt(i) == "a") {
      textAux += textArea.charAt(i).replace("a", "ai");
    } else if (textArea.charAt(i) == "o") {
      textAux += textArea.charAt(i).replace("o", "ober");
    } else if (textArea.charAt(i) == "u") {
      textAux += textArea.charAt(i).replace("u", "ufat");
    } else {
      textAux += textArea.charAt(i);
    }
    i++;

    const content = `
    
    <textarea readonly class="text-area-script" id="resultadoTexto">${textAux}</textarea>
    <button class="btn-copiar" onclick="copyToClipBoard()">Copiar</button>
    
    `;

    mensajeEncriptado.innerHTML = content;
  }
};

const btnEncriptar = document
  .getElementById("encriptar")
  .addEventListener("click", encriptar);

function copyToClipBoard() {
  var content = document.getElementById("resultadoTexto");
  console.log(content);
  content.select();
  document.execCommand("copy");
}

//-- Reglas para desencriptar
const desencriptar = () => {
  let textArea2 = document.getElementById("textArea").value;
  ningunMensaje.style.display = "none";

  let textAux = "";
  if (textArea2 == "") {
    textArea2 = "No has escrito nada. Por favor escribe algo";
  }

  while (textArea2.includes("enter")) {
    textAux += textArea2.replace("enter", "e");
    textArea2 = textArea2.replace("enter", "e");
  }
  while (textArea2.includes("imes")) {
    textAux += textArea2.replace("imes", "i");
    textArea2 = textArea2.replace("imes", "i");
  }
  while (textArea2.includes("ai")) {
    textAux += textArea2.replace("ai", "a");
    textArea2 = textArea2.replace("ai", "a");
  }
  while (textArea2.includes("ober")) {
    textAux += textArea2.replace("ober", "o");
    textArea2 = textArea2.replace("ober", "o");
  }
  while (textArea2.includes("ufat")) {
    textAux += textArea2.replace("ufat", "u");
    textArea2 = textArea2.replace("ufat", "u");
  }

  const content = ` <div class="col-der">
  <textarea readonly class="text-area-script"  id="resultadoTexto">${textArea2}</textarea>
  <button class="btn-copiar" onclick="copyToClipBoard()">Copiar</button> </di>
  `;

  mensajeEncriptado.innerHTML = content;
};

const btnDesencriptar = document
  .getElementById("desencriptar")
  .addEventListener("click", desencriptar);
