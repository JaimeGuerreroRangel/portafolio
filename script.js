// Obtiene elementos del DOM: el área de texto de entrada, el área de texto del mensaje y el botón de copiar
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
// Oculta el botón de copiar al inicio
btnCopy.style.display = "none";
let encriptado = false;

// Función para encriptar el mensaje
function btnEncriptar() {
    // Verificar si no hay texto en el área de entrada
    if (inputTexto.value.trim() === "") {
        alert("Error: No hay texto para encriptar");
        return; // No hacer nada si no hay texto
    }
    // Comprobación de texto
    if (/[^a-z\s]/.test(inputTexto.value)) {
        alert("Error: Solo se permiten letras minusculas y sin tildes");
        inputTexto.value = "";
        return;
    }
    if (encriptado) {
        alert("El mensaje ya está encriptado");
        return;
    }
    // Llama a la función encriptar y guarda el resultado en una variable
    const textoEncriptado = encriptar(inputTexto.value);
    // Muestra el texto encriptado en el área de texto del mensaje
    mensaje.value = textoEncriptado;
    // Elimina la imagen de fondo del área de texto del mensaje
    mensaje.style.backgroundImage="none";
    // Limpia el área de texto de entrada
    inputTexto.value = "";
    // Muestra el botón de copiar
    btnCopy.style.display = "block";
    encriptado = true;
}

// Función para encriptar el mensaje
function encriptar(stringEncriptada) {
    // Matriz que contiene las reglas de encriptación
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    // Convierte el mensaje de entrada a minúsculas
    stringEncriptada = stringEncriptada.toLowerCase();

    // Recorre la matriz y reemplaza las letras según las reglas de encriptación
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    // Retorna el mensaje encriptado
    return stringEncriptada;
}

// Función para desencriptar el mensaje
function btnDesencriptar() {
    // Verificar si no hay texto en el área de entrada
    if (inputTexto.value.trim() === "") {
        alert("Error: No hay texto para desencriptar");
        return; // No hacer nada si no hay texto
    }
    // Verificar si el mensaje ya está desencriptado
    if (!encriptado) {
        alert("El mensaje ya está desencriptado");
        return;
    }
    // Llama a la función desencriptar y guarda el resultado en una variable
    const textoEncriptado = desencriptar(inputTexto.value);
    // Muestra el texto desencriptado en el área de texto del mensaje
    mensaje.value = textoEncriptado;
    // Limpia el área de texto de entrada
    inputTexto.value = "";
    encriptado = false;
}

// Función para desencriptar el mensaje
function desencriptar(stringDesencriptada) {
    // Matriz que contiene las reglas de desencriptación (inversa de la matriz de encriptación)
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    // Convierte el mensaje de entrada a minúsculas
    stringDesencriptada = stringDesencriptada.toLowerCase();

    // Recorre la matriz y reemplaza las letras según las reglas de desencriptación
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    // Retorna el mensaje desencriptado
    return stringDesencriptada;
}

// copiar mensaje

function btnCopiar() {
    // Selecciona el contenido del área de texto del mensaje
    mensaje.select(); 

    // Escribe el contenido del área de texto del mensaje en el portapapeles del usuario
    navigator.clipboard.writeText(mensaje.value); 

    // Limpia el contenido del área de texto del mensaje
    mensaje.value = ""; 

    // Muestra una ventana de alerta al usuario con el mensaje "Texto Copiado"
    alert("Texto Copiado"); 
    // Verifica si el navegador es compatible con la API del portapapeles
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Muestra un mensaje en pantalla para que el usuario copie el texto manualmente
        //alert("Para copiar el texto, selecciona y mantén presionado para aparecer el menú de opciones y luego selecciona 'Copiar'.");
    } else {
        // Muestra una ventana de alerta al usuario con el mensaje "Texto Copiado"
        //alert("Texto Copiado");
    }
}