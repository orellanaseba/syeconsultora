// al hacer click una imágen se hace grande y se muestra, además de poder cerrarla con un botón

const galeria = () => {
    const galeriaImagenes = document.querySelectorAll(".galeria-imagenes img");
    const galeriaContenedor = document.querySelector(".galeria-contenedor");
    const galeriaImagen = document.querySelector(".galeria-img");

    galeriaImagenes.forEach(img => {
        img.addEventListener("click", e => {
            let imageSrc = e.target.getAttribute("src")
            galeriaContenedor.classList.remove("cerrar-galeria");
            galeriaContenedor.classList.add("abrir-galeria");
            galeriaImagen.src = imageSrc;
        })
    })

    const btnCerrarGaleria = document.querySelector(".btn-cerrar-galeria");

    btnCerrarGaleria.addEventListener("click", () => {
        galeriaContenedor.classList.add("cerrar-galeria");
        galeriaContenedor.classList.remove("abrir-galeria");
    })
}



export default galeria;