import pintarDataPropiedades from "./propiedades.js";
import pintarInicio from "./inicio.js";
import "./styles.css";
import openModal from "./modal.js";
import pintarDataAlquileres from "./alquileres.js";
import validarCamposFormulario from "./formulario.js";

const navItems = document.querySelectorAll(".ul-list .li-item .li-a");

// Función para cambiar de sección en la barra de navegación.
const changeSection = button => {
    navItems.forEach(button => {
        button.classList.remove("selected");
    })
    button.classList.add("selected");
}

navItems.forEach(button => {
    button.addEventListener("click", e => {
        changeSection(e.target);
        if(e.target.textContent === "Propiedades") {
            pintarDataPropiedades();
        }
        else if(e.target.textContent === "Sobre Nosotros" || e.target.textContent === "Servicios") {
            pintarInicio();
            validarCamposFormulario();

        }
        else if(e.target.textContent === "Alquileres") {
            pintarDataAlquileres();
        }
    })
})

openModal();