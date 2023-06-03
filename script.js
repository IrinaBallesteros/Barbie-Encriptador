const dollImage = document.getElementById("doll");

// Función para encriptar el texto
function Encrypt() {
    var text = document.getElementById("text").value;
    var encryptedText = "";
  
    // Reemplazar letras según las llaves especificadas
    for (var i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "a":
          encryptedText += "ai";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += text[i];
          break;
      }
    }
  
    // Actualizar el texto encriptado y eliminar la imagen
    document.getElementById("text").value = encryptedText;
    document.getElementById("doll").style.display = "none";

    // Actualizar la sección de desencriptación
    document.querySelector(".subtitle_Container").innerHTML = "Encrypted Message";
    document.querySelector(".paragraph_Container").innerHTML = encryptedText;
  }
  
  // Función para desencriptar el texto
  function Decrypt() {
    var encryptedText = document.getElementById("text").value;
    var decryptedText = "";
  
  
    // Reemplazar letras según las llaves especificadas
    for (var i = 0; i < encryptedText.length; i++) {
      switch (encryptedText.substring(i, i+4)) {
        case "enter":
          decryptedText += "e";
          i += 4;
          break;
        case "imes":
          decryptedText += "i";
          i += 3;
          break;
        case "ai":
          decryptedText += "a";
          i += 1;
          break;
        case "ober":
          decryptedText += "o";
          i += 3;
          break;
        case "ufat":
          decryptedText += "u";
          i += 3;
          break;
        default:
          decryptedText += encryptedText[i];
          break;
      
      }
    }
  
    // Actualizar el texto desencriptado y volver a mostrar la imagen
    document.getElementById("text").value = decryptedText;
    document.getElementById("doll").style.display = "block";
    // Actualizar la sección de desencriptación
    document.querySelector(".subtitle_Container").innerHTML = "Decrypted Message";
    document.querySelector(".paragraph_Container").innerHTML = decryptedText;
  }
  
  // Función para copiar el texto encriptado/desencriptado al portapapeles
  function Copy() {
    var text = document.getElementById("text");
    text.select();
    
  
  }
  document.querySelector(".copy").addEventListener("click", Copy);