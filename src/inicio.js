import validarCamposFormulario from "./formulario.js";
import "./styles.css";


const contenido = document.querySelector(".contenido");


const pintarInicio = () => {
    contenido.innerHTML = `
<div class="banner">
    <div class="banner-text-container">
            <span>Somos "insertar nombre de la empresa"</span>
            <h1>Ventas y Alquileres</h1>
            <p>Explora nuestras propiedades, encuentra la casa de tus sueños y haz realidad tu próxima gran mudanza con nosotros.</p>
    </div>

    <div class="banner-img-container">
        <img class="banner-img" src="/imagenes/miller1.png" alt="s&e banner imagen">
    </div>
</div>

<section id="servicios" class="section-servicios">
    <div class="eslogan-text">
        <p>Servicios</p>
        <h2>Construyendo sueños, elaborando realidades</h2>
    </div>
    <div class="servicios-descripcion">
        <div class="descripcion descripcion-1">
            <ul class="descripcion-list">
                <span>Alquileres</span>
                <li>Flexibilidad</li>
                <li>Tamaño</li>
                <li>Vecindario</li>
                <li>Estacionamiento</li>
            </ul>
            <img src="/imagenes/cordoba1.jpg" alt="imagen alquileres">
        </div>
        <div class="descripcion descripcion-2">
            <ul class="descripcion-list">
                <span>Propiedades</span> 
                <li>Ubicación</li>
                <li>Comodidad</li>
                <li>Tamaño</li>
                <li>Exteriores</li>
            </ul>
            <img src="/imagenes/munro3.png" alt="imagen propiedades">
        </div>
    </div>
</section>

<section id="sobrenosotros" class="section-sobrenosotros">
    <div class="sobrenosotros-img-container">
        <img class="sobrenosotros-img" src="/Diseño/kam-idris-_HqHX3LBN18-unsplash.jpg" alt="">
    </div>
    <div class="sobrenosotros-texto-container">
        <div class="sobrenosotros-title">
            <p>Sobre Nosotros</p>
            <h2>Eficiencia, presupuesto y tiempo</h2>
        </div>
        <p>¡Bienvenido a nuestro portal de ventas y alquileres de viviendas! Descubre tu próximo hogar entre una amplia variedad de opciones disponibles. Desde acogedores apartamentos hasta lujosas casas, nuestro sitio ofrece una selección diversa y completa para satisfacer tus necesidades.</p>
    </div>
</section>

<section class="section-contacto">
        <form class="form" action="https://formsubmit.co/orellanasebastian15@gmail.com" method="POST">
            <p>Contacto</p>
            <input name="name" class="contacto-input nombre-input" type="text" placeholder="Nombre y apellido" required>
            <input name="phone" class="contacto-input telefono-input" type="number" placeholder="Número de teléfono" required>
            <input name="email" class="contacto-input email-input" type="email" placeholder="Email" required>
            <textarea name="comments" class="textarea" name="" placeholder="Comentarios" maxlength="300"></textarea>
            <button class="btn-enviar">Enviar</button>

            <input type="hidden" name="_captcha" value="false">
        </form>

        <div class="contacto-texto-container">
            <div class="map">
                <p>¡Contáctanos para tener una atención personalizada y resolveremos todas tus dudas!</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13143.1705985526!2d-58.474886!3d-34.558805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb68f59e234f9%3A0x454bb8c0c7e3554e!2sS%20%26%20E%20Consultora!5e0!3m2!1ses-419!2sar!4v1714867271776!5m2!1ses-419!2sar" width="550" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

<footer class="footer">
        <div class="footer-logo">
            <a href="index.html"><img class="logo-img" src="/imagenes/logo.png" alt="syeconsultora logo"></a>
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
        </div>
    </footer>
    `
    validarCamposFormulario();
};


export default pintarInicio;