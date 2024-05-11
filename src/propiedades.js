import datos from "./datos.js";
import "./propiedades.css";
import "./styles.css";
const contenido = document.querySelector(".contenido");
import openModal from "./modal.js";
import galeria from "./galeria.js";

const pintarDataPropiedades = () => {

contenido.innerHTML = "";

contenido.innerHTML = `

<div class="modal-leyes-container">
        <i class="btn-closemodal fas fa-close"></i>
        <div class="modal-info">
            <div class="leyes-container">
                <li><strong>LEY N° 2340</strong></li>
                <li><strong>ARTÍCULO 11 - DERECHOS</strong></li>
                <li><strong>SON DERECHOS DE LOS CORREDORES INMOBILIARIOS:</strong></li>
                <p>Inciso 2º: Percibir honorarios por la actividad realizada y comisiones de su comitente según la retribución que libremente pacten y, de quien resulte cocontratante, la que se establezca por la ley. En el caso de tratarse de alquiler de inmuebles destinados a vivienda administrados por un corredor inmobiliario, el monto de los honorarios mensuales no podrá ser exigido a los inquilinos.</p>
            </div>
            <div class="leyes-container">
                <li><strong>LEY N° 5859</strong></li>
                <p><strong>Artículo 4</strong> - Para los casos de alquiler de vivienda, el monto máximo de comisión que se le puede requerir a los propietarios será el equivalente al cuatro con quince centésimos por ciento (4,15%) del valor total del respectivo contrato. Se encuentra prohibido cobrar a los inquilinos que sean personas físicas comisiones inmobiliarias y gastos de gestoría de informes.</p>
            </div>
            <div class="leyes-container">
                <li><strong>LEY N° 3588</strong></li>
                <p><strong>Artículo 1°</strong>. - Los corredores inmobiliarios deben exhibir en forma visible y destacada en los locales u oficinas comerciales en que desarrollen sus actividades -así como en su sitio web, si lo tuvieran- la transcripción de los artículos 11, inciso 2°, y 57 de la Ley N° 2.340, y de las normas nacionales aplicables en la materia, o las que en el futuro las reemplacen.</p>
                <p><strong>Artículo 2°</strong>. - Sin perjuicio de las facultades conferidas por ley al Colegio único de Corredores Inmobiliarios de la Ciudad Autónoma de Buenos Aires, las infracciones a la presente ley son pasibles de las sanciones previstas por las leyes nacionales N° 22.802 y 24.240, según el caso, a través del procedimiento establecido por la Ley N° 757.</p>
                <p><strong>Artículo 3°</strong>. - Comuníquese, etc.</p>
            </div>
        </div>
    </div>

<div class="propiedades-banner">
<div class="propiedades-banner-text-container">
        <h1>Propiedades</h1>
</div>
</div>`;

const sectionPropiedades = document.createElement("section");
sectionPropiedades.classList.add("section-propiedades");

let index = 0;
datos.forEach((data, i) => {
    sectionPropiedades.innerHTML += `
    <div class="propiedades-img-container">
    <img class="propiedades-img" img-index="${index}" src="/imagenes/${data.imagenes[0]}" alt="">
    <div class="imagenes-relacionadas">
        <div class="galeria-imagenes">
            <img img-index="0" class="image-selected" src="/imagenes/${data.imagenes[0]}">
            <img img-index="1" src="/imagenes/${data.imagenes[1]}">
            <img img-index="2" src="/imagenes/${data.imagenes[2]}">
            <img img-index="3" src="/imagenes/${data.imagenes[3]}">
            <img img-index="4" src="/imagenes/${data.imagenes[4]}">
        </div>
    </div>
</div>
<div class="propiedades-texto-container">
    <div class="propiedades-title">
        <p><span class="propiedad-localidad-span">${data.nombre} - <span class="precio-propiedades-span">${data.precio}</span></span></p>
    </div>
    <p class="propiedades-descripcion">${data.descripcion}</p>
    <div class="datos">
        <ul class="datos-container datos-generales">
            <li class="datos-title">Datos Generales</li>
            <li><strong>Antigüedad: </strong>${data.datosGenerales[0].antiguedad}</li>
            <li><strong>Categoría: </strong>${data.datosGenerales[0].categoria}</li>
            <li><strong>Entrada de servicio: </strong>${data.datosGenerales[0].entradaServicio}</li>
            <li><strong>Estados: </strong>${data.datosGenerales[0].estados}</li>
            <li><strong>Frente: </strong>${data.datosGenerales[0].frente}</li>
            <li><strong>Garages: </strong>${data.datosGenerales[0].garages}</li>
            <li><strong>Jardín fondo: </strong>${data.datosGenerales[0].jardinFondo}</li>
            <li><strong>Jardín Frente</strong>${data.datosGenerales[0].jardinFrente}</li>
            <li><strong>Lote: </strong>${data.datosGenerales[0].lote}</li>
            <li><strong>Orientación: </strong>${data.datosGenerales[0].orientacion}</li>
            <li><strong>Parrilla: </strong>${data.datosGenerales[0].parrilla}</li>
            <li><strong>Patio: </strong>${data.datosGenerales[0].patio}</li>
            <li><strong>Pileta: </strong>${data.datosGenerales[0].pileta}</li>
            <li><strong>Quincho: </strong>${data.datosGenerales[0].quincho}</li>
            <li><strong>Superficie cubierta: </strong>${data.datosGenerales[0].superficieCubierta}</li>
            <li><strong>Superficie cubierta: </strong>${data.datosGenerales[0].superficieDescubierta}</li>
            <li><strong>Superficie descubierta: </strong>${data.datosGenerales[0].techo}</li>
            <li><strong>Terraza: </strong>${data.datosGenerales[0].terraza}</li>
            <li><strong>Tipo de propiedad: </strong>${data.datosGenerales[0].tipoPropiedad}</li>

        </ul>
        <ul class="datos-container datos-del-ambiente">
            <li class="datos-title">Datos del ambiente</li>
            <li><strong>Hall: </strong>${data.datosAmbiente[0].hall}</li>
            <li><strong>Living: </strong>${data.datosAmbiente[0].living}</li>
            <li><strong>Cocina: </strong>${data.datosAmbiente[0].cocina}</li>
            <li><strong>Escritorio: </strong>${data.datosAmbiente[0].escritorio}</li>
            <li><strong>Toillete: </strong>${data.datosAmbiente[0].toillete}</li>
            <li><strong>Baño: </strong>${data.datosAmbiente[0].baño}</li>
            <li><strong>Dormitorio: </strong>${data.datosAmbiente[0].dormitorio}</li>
            <li><strong>Dependencia de servicio: </strong>${data.datosAmbiente[0].depedenciaServicio}</li>
            <li><strong>Dependencia de servicio: </strong>${data.datosAmbiente[0].hallIntimo}</li>
            <li><strong>Office: </strong>${data.datosAmbiente[0].office}</li>
            <li><strong>Lavadero: </strong>${data.datosAmbiente[0].lavadero}</li>
            <li><strong>Barrio: </strong>${data.datosAmbiente[0].barrio}</li>
            <li class="varios-li"><strong>varios</strong></li>
            <li><strong>Tipo de piso: </strong>${data.datosAmbiente[0].tipoPiso}</li>
            <li><strong>Calefacción: </strong>${data.datosAmbiente[0].calefaccion}</li>
            <li><strong>Agua caliente: </strong>${data.datosAmbiente[0].aguaCaliente}</li>
            <li><strong>Aire acondicionado: </strong>${data.datosAmbiente[0].aireAcondicionado}</li>
            <li><strong>Teléfono: </strong>${data.datosAmbiente[0].telefono}</li>

        </ul>
    </div>
    <p>Agradecemos su elección, esperamos respuestas suyas.</p>
    </div>
    </div>
    `

    index++;
});

let galeriaContenedor = document.createElement("div");
galeriaContenedor.classList.add("galeria-contenedor");
galeriaContenedor.innerHTML = `
    <div class="galeria-imagen-contenedor">
        <i class="btn-cerrar-galeria fas fa-close"></i>
        <img class="galeria-img" src="" >
    </div>
`
contenido.appendChild(sectionPropiedades);
contenido.appendChild(galeriaContenedor);


const footer = document.createElement("footer");
footer.classList.add("footer");

footer.innerHTML = `
<div class="footer-logo">
    <a href="index.html"><img class="logo-img" src="/imagenes/logo.png" alt=""></a>
        </div>
        <div class="servicios-footer-container">
            <ul class="footer-ul informacion-footer-ul">
                <li class="footer-seccion-text">Información</li>
                <li class="leyes">Leyes</li>
                <li>CUCICBA Matrícula 5603</li>
            </ul>
            <ul class="footer-ul contacto-footer-ul">
                <li class="footer-seccion-text">Contacto</li>
                <li>Calle: Avda. Ricardo Balbi 3136 - C.A.B.A.</li>
                <li>Email: info@syeconsultora.com.ar</li>
                <li>Número Telefónico: (011) 4547-1480 /</li>
                <li>11-3056-1228 /</li>
                <li>15-6468-1227</li>
            </ul>
        </div>`;
contenido.appendChild(footer);
openModal();
galeria();
}


export default pintarDataPropiedades;