const validarCamposFormulario = () => {
    const formulario = document.querySelector(".form");
    const nombre = document.querySelector(".nombre-input");
    const numero = document.querySelector(".telefono-input");
    const email = document.querySelector(".email-input");
    const comentario = document.querySelector(".textarea");

    formulario.addEventListener("submit", e => {

        const nombreValue = nombre.value;
        const emailValue = email.value;
        const numValue = numero.value;
        const numLen = numero.value.length;
        const comentarioValue = comentario.value

        let emailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(nombreValue === "" || emailValue === "" || numValue === "" || comentarioValue === "") {
            e.preventDefault();
            alert("Rellena todos los campos.");
            return false;
        }

        if(!emailValue.match(emailFormato)) {
            e.preventDefault();
            alert("Por favor, introduce un email válido.");
            return false;
        }

        if(numLen < 8) {
            e.preventDefault();
            alert("ingresa un número de teléfono válido.");
            return false;
        }
 

    })
}

export default validarCamposFormulario;