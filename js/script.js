//Definimos el botón para escuchar su click
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
  $objetivo = document.body; // A qué le tomamos la fotocanvas
// Nota: no necesitamos contenedor, pues vamos a descargarla

// Agregar el listener al botón
$boton.addEventListener("click", () => {
  html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
        
    .then(canvas => {
        alert("se tomo captura de pantalla");
      // Cuando se resuelva la promesa traerá el canvas
      // Crear un elemento <a>
     /*  enlace.crossOrigin = "anonymous";  // This enables CORS */
      let enlace = document.createElement('a');
      enlace.download = "Captura de página web - Parzibyte.me.png";
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
});