const rico=document.getElementById("devuelveme")

rico.addEventListener("click", function() {
    // URL de la página que deseas abrir en otra pestaña
    const urlNuevaPestana = "index.html";

    // Abre una nueva pestaña con la URL especificada
    window.open(urlNuevaPestana, "_blank");
})