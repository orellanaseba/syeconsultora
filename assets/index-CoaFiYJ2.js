(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(a){if(a.ep)return;a.ep=!0;const e=r(a);fetch(a.href,e)}})();const f=[{nombre:"Aizpurua 3200",imagenes:["aizpurua1.png","aizpurua2.png","aizpurua3.png","aizpurua4.png","aizpurua5.png","aizpurua6.png","aizpurua7.png","aizpurua-map.png"],precio:"155.000u$$",descripcion:`Esta nuevo, hermoso apartamento de tres ambientes en dupla.
        <li>°1Planta: Cocina, living, patio, baños completo y jardín</li>
        <li>°2Planta: dos dormitorios los dos trae placard</li>
        `,datosGenerales:[{antiguedad:"a estrenar",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"34m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"7x4",patio:"2.90x4",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Aizpurua 3200",tipoPropiedad:"apartamento"}],datosAmbiente:[{hall:"",living:"5x4",cocina:"cocina y comedor 2.80x4",escritorio:"",toillete:"",baño:"completo",dormitorio:"2.60x3.50, 3x3",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Villa Urquiza",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Balbin 3100",imagenes:["balbin1.png","balbin2.png","balbin3.png","balbin4.png","balbin5.png","balbin6.png","balbin7.png","balbin-map.png"],precio:"125.000u$$",descripcion:`Excelentes condiciones estas en muy buenos estados un apartamento de 4 piso.
        Cuentas con un living, cocina, comedor, agua caliente, lavadero y con un buen espacio
        tiene dos dormitorios c/3x3.50 y otro de 3x2.60.
        `,datosGenerales:[{antiguedad:"40 años",estados:"muy bueno",categoria:"",frente:"lateral",techo:"",lote:"",superficieCubierta:"48m2",superficieDescubierta:"4m2",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Balbin 3100",tipoPropiedad:"3 ambientes"}],datosAmbiente:[{hall:"1x1",living:"3x4",cocina:"cocina 2x3",escritorio:"",toillete:"",baño:"completo",dormitorio:"3x3(50), 3x2(60)",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"si",barrio:"",tipoPiso:"parquet",calefaccion:"tiro balanceado",aguaCaliente:"calefón",aireAcondicionado:"",telefono:""}]},{nombre:"Conde y Taborini",imagenes:["conde1.png","conde2.png","conde3.png","conde4.png","conde-map.png"],precio:"155.000u$$",descripcion:`Estas en unas buenas condiciones, Son dos Propiedades horizontal.
        <li>1PH: 3ambitaciones, terraza y parrilla.</li>
        <li>Planta baja: Living, cocina y baños completo.</li>
        <li>Planta alta: Dos dormitorios y balcón.</li>
        <li>Segundo piso: Terraza, parrilla y Habitación.</li>
        <li>2PH: Living, cocina, comedor y dos dormitorios + entre piso.</li>
        <li>Planta baja: Lavadero y terraza.</li>
        `,datosGenerales:[{antiguedad:"60 años",estados:"regular",categoria:"P.H.",frente:"",techo:"",lote:"",superficieCubierta:"120m2",superficieDescubierta:"60m2",jardinFrente:"",jardinFondo:"",patio:"si",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"si",parrilla:"si",pileta:"",orientacion:"Conde y Taborini",tipoPropiedad:"P.H."}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Holmberg 4100",imagenes:["holmberg1.png","holmberg2.png","holmberg3.png","holmberg4.png","holmberg5.png","holmberg6.png","holmberg7.png","holmberg8.png","holmberg9.png"],precio:"85.000u$$",descripcion:`Excelente apartamento dos ambientes está en un lugar hermoso con muchos árboles.
        Cuenta con un baño completo, balcón, calefón, en una cuadra de la estación Saavedra a tres cuadra de la zona comercial y una cuadra de Balbín.
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"40m2",superficieDescubierta:"5m",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Holmberg 4100",tipoPropiedad:"Apartamento"}],datosAmbiente:[{hall:"",living:"5x4",cocina:"2x40",escritorio:"",toillete:"",baño:"completo",dormitorio:"3x3",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"parquet",calefaccion:"tiro balanceado",aguaCaliente:"calefón",aireAcondicionado:"",telefono:""}]},{nombre:"Miller 4600",imagenes:["miller1.png","miller2.png","miller3.png","miller4.png","miller5.png","miller6.png","miller7.png","miller8.png","miller9.png","miller10.png","miller11.png","miller12.png","miller13.png","miller14.png","miller15.png","miller16.png","miller17.png","miller-map.png"],precio:"Consultar",descripcion:`Excelente Triple X ambiente zona tranquila queda a 5 cuadra a plaza Sarmiento; Estas en muy buen estado.
        <li>Cuentas con un living, cocina, comedor, garajes para dos carros, dormitorio con suficiente espacio y cuentas con una habitación para juegos.</li>
        *Tomo departamento en Bariloche.*        
        `,datosGenerales:[{antiguedad:"20 años",estados:"muy bueno",categoria:"casa",frente:"",techo:"",lote:"",superficieCubierta:"162.m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"4x7",patio:"",entradaServicio:"",garages:"2 autos",terraza:"4x3.20",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Miller 4600",tipoPropiedad:"Casa"}],datosAmbiente:[{hall:"",living:"8.40x4",cocina:"cocina y comedor 2.90x2.70",escritorio:"",toillete:"2",baño:"completo",dormitorio:"18x4, 2.80x3.20",balcon:"",depedenciaServicio:"",playRoom:"4x4.60",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Munro Fleming 2500",imagenes:["munro1.png","munro2.png","munro3.png","munro4.png","munro-map.png"],precio:"150.000u$$",descripcion:`Excelente PH de 3 ambiente muy amplio todo a nuevo, 90m2 en 2 plantas.
        <li>1°Planta: living/c 3.5x6.00 c/ salida al balcón de 4.10x1.00, Coc/Com 3.70x3.00. Hall distribuidor con entrada baño completo c/ventana, 1 dormitorio 3.20x5.00 c/placard.</li>
        <li>2°Planta: Hall de 1.50x2.10, 2do dormitorio de 3.40x4.80 c/doble placard, amplio lavadero de 2.30x265.</li>
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"90m2",superficieDescubierta:"5m",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Munro Fleming 2500",tipoPropiedad:"3 ambientes"}],datosAmbiente:[{hall:"1.50x2.10",living:"3.50x6",cocina:"3,70x3",escritorio:"",toillete:"",baño:"completo",dormitorio:"3.20x5, 3.40x480",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"cerámico",calefaccion:"tiro balanceado",aguaCaliente:"calefón",aireAcondicionado:"si",telefono:""}]},{nombre:"Villa Gessell",imagenes:["gessell1.png","gessell2.png","gessell3.png","gessell4.png","gessell5.png","gessell6.png","gessell7.png","gessell8.png","gessell9.png"],precio:"60.000u$$",descripcion:`Excelente PH tranquila con un buen espacio y tiene un área arboleada.
        <li>Cuentas con un living, cocina, comedor, baños completos, cochera, jardín, techo de tejas y entre otra cosa…
        Lo que es cocina, living y comedor mide 6x3.50</li>
        <li>El PH cuenta con el primer piso queda a ocho cuadras de la playa.</li>
        `,datosGenerales:[{antiguedad:"30 años",estados:"M.B.",categoria:"P.H.",frente:"si",techo:"tejas",lote:"",superficieCubierta:"52m",superficieDescubierta:"",jardinFrente:"si",jardinFondo:"si",patio:"",entradaServicio:"",garages:"cochera",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Villa Gessell",tipoPropiedad:"P.H."}],datosAmbiente:[{hall:"2x1",living:"6x3.50",cocina:"6x3.50, comedor 6x3.50",escritorio:"",toillete:"si",baño:"completo",dormitorio:"4x4, 3.50x2.80",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Almirante Brown 300",imagenes:["","","","","","","","",""],precio:"68.000u$$",descripcion:`Hermoso apartamento dos ambientes, está ubicado en el barrio de boca.
        Cuentas con un Hall, living, baños completos, balcón francés, dormitorio con placard
        se encuentra cerca de plaza Conesa.
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"34m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Almirante Brown 300",tipoPropiedad:""}],datosAmbiente:[{hall:"2x2",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"3x3 c/placard",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Belgrano Norte/José Hernández 1400",imagenes:["","","","","","","","",""],precio:"",descripcion:`Cuentas con diversos enclaves residenciales lujosos alrededor el terreno estas ubicando en el barrio de Belgrano sobre la calle José Hernández. Transporte en una radio de 400 metros.
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Rivera 3900",imagenes:["rivera1.png","rivera3.png","rivera4.png","rivera5.png","rivera6.png","rivera2.png","","",""],precio:"Consultar",descripcion:`Tenemos para ofrecer unos tres ambientes un ampliando en el barrio Coghlan.
        Cuentas con baños completo, un living, cocina, comedor, una lavandería e integrada S.U.M en el edificio excelente ubicación, la ubicación estas a media cuadra de la estación, muy cerca de la UBA, plaza histórica con bibliotecas en barrio con estilo áreas de facultad.
        `,datosGenerales:[{antiguedad:"40 años",estados:"bueno",categoria:"",frente:"lateral",techo:"",lote:"",superficieCubierta:"72m",superficieDescubierta:"5m",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Rivera 3900",tipoPropiedad:"Apartamento"}],datosAmbiente:[{hall:"",living:"7x3.50",cocina:"3x3",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"3x1.5",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"si",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"calefón",aireAcondicionado:"si",telefono:""}]},{nombre:"Ibera y Av. Ricardo Balbín",imagenes:["ibera1.png","ibera2.png","ibera3.png","ibera4.png","ibera5.png","","",""],precio:"Consultar",descripcion:`Señorial dúplex 4 ambientes con excelente iluminación y con muchos espacios.
        Cuenta cocheras para dos autos, fondo con el jardín, playroom y superficie de 250m20
        Se escucha ofertas.
        `,datosGenerales:[{antiguedad:"",estados:"excelente",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"si",jardinFondo:"",patio:"",entradaServicio:"si",garages:"2 cocheras",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Ibera",tipoPropiedad:"Duplex"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"2",baño:"2",dormitorio:"4",balcon:"si",depedenciaServicio:"6 con dependencias",playRoom:"si",hallIntimo:"",office:"",lavadero:"si",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"termotanque",aireAcondicionado:"si",telefono:""}]},{nombre:"Saavedra",imagenes:["","","","","","","",""],precio:"Consultar",descripcion:`Es una cochera que tenemos para ofrecer en García del rio entre naon y Washington.
        Chochera fija descubierta muy cómoda.        
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Lote terreno",imagenes:["","","","","","","",""],precio:"Consultar",descripcion:`Está ubicado en un buen sector Av. Congreso y Mariano Acha.       
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Manzanares 3900",imagenes:["nodisponible.png","","","","","","",""],precio:"Consultar",descripcion:`Excelente dos ambientes muy luminoso amplio balcón, edificio nuevo, excelente ubicación, cerca de la estación Saavedra, Dot, parque Saavedra y general paz y panamericana.     
        `,datosGenerales:[{antiguedad:"a estrenar",estados:"excelente",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"40m2",superficieDescubierta:"6m2",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Manzanares Piso 5",tipoPropiedad:"apartamento"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Arias 4800",imagenes:["arias1.png","arias2.png","arias3.png","arias4.png","arias5.png","",""],precio:"Consultar",descripcion:`Tenemos para mostrarle un PH de muy buen estado.
        Te cuento un poco más del PH es un alquiler témpora hasta 3 persona, muy luminador, con patio, baños completos, muy buen lugar y está cerca al parque sarmiento.
            
        `,datosGenerales:[{antiguedad:"10 años",estados:"bueno",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"32m",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"3x3",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Arias",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:"Alquiler temporal de ph"}]},{nombre:"Tras las Sierras",imagenes:["sierras1.png","sierras2.png","sierras3.png","sierras4.png","sierras5.png","",""],precio:"Consultar",descripcion:`Es un lugar hermoso cercas, centro de Mina Clavero se encuentra seña del 50% del monto, tiene ríos cercas.
        Cuentas con una cama matrimonial, un sofá cama, agua caliente, con termo individual, sabanas y acolchados, vajilla completa, ventilador, cochea y parrilla.
        
            
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Moreno",imagenes:["moreno1.png","moreno2.png","moreno3.png","moreno4.png","moreno6.png","",""],precio:"Consultar",descripcion:`Tenemos para ofrecer una quinta en un barrio privado.
        Te cuenta un poco de la casa de tres ambientes, también cuenta con un área cubierta de 180m2, galería, parrilla, horno de barro, pileta, casa de servicio lote de 70x40 ruta 25km4.
        Se escucha oferta.            
        `,datosGenerales:[{antiguedad:"10 años",estados:"muy bueno",categoria:"",frente:"",techo:"",lote:"70x40",superficieCubierta:"150m2, total:2.800m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"para 4 autos",terraza:"",galeria:"",quincho:"si",parrilla:"si",pileta:"si",orientacion:"Quita",tipoPropiedad:"casa"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"2, 3 ambientes",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"ruta 25, Km 4",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Construcción en seco",imagenes:["seco1.png","seco2.png","seco3.png","seco4.png","seco5.png","",""],precio:"Consultar",descripcion:`Realizamos propiedad en seco en menos de 90 días consulte los modelos, valores y facilidades.        
        `,datosGenerales:[{antiguedad:"10 años",estados:"muy bueno",categoria:"",frente:"",techo:"",lote:"70x40",superficieCubierta:"150m2, total:2.800m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"para 4 autos",terraza:"",galeria:"",quincho:"si",parrilla:"si",pileta:"si",orientacion:"Quita",tipoPropiedad:"casa"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"2, 3 ambientes",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"ruta 25, Km 4",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]}],p=()=>{const n=document.querySelector(".leyes"),i=document.querySelector(".modal-leyes-container");n.addEventListener("click",()=>{i.classList.add("modal-open")}),h(i)},h=n=>{document.querySelector(".btn-closemodal").addEventListener("click",()=>{n.classList.remove("modal-open")})},u=()=>{const n=document.querySelectorAll(".galeria-imagenes img"),i=document.querySelector(".galeria-contenedor"),r=document.querySelector(".galeria-img");n.forEach(a=>{a.addEventListener("click",e=>{let l=e.target.getAttribute("src");i.classList.remove("cerrar-galeria"),i.classList.add("abrir-galeria"),r.src=l})}),document.querySelector(".btn-cerrar-galeria").addEventListener("click",()=>{i.classList.add("cerrar-galeria"),i.classList.remove("abrir-galeria")})},t=document.querySelector(".contenido"),y=()=>{t.innerHTML="",t.innerHTML=`

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
</div>`;const n=document.createElement("section");n.classList.add("section-propiedades");let i=0;f.forEach((o,m)=>{n.innerHTML+=`
    <div class="propiedades-img-container">
    <img class="propiedades-img" img-index="${i}" src="./imagenes/${o.imagenes[0]}" alt="">
    <div class="imagenes-relacionadas">
        <div class="galeria-imagenes" galeria-index="${i}">
            <img img-index="0" class="image-selected" src="./imagenes/${o.imagenes[0]}">
            <img img-index="1" src="./imagenes/${o.imagenes[1]}">
            <img img-index="2" src="./imagenes/${o.imagenes[2]}">
            <img img-index="3" src="./imagenes/${o.imagenes[3]}">
            <img img-index="4" src="./imagenes/${o.imagenes[4]}">
        </div>
    </div>
</div>
<div class="propiedades-texto-container">
    <div class="propiedades-title">
        <p><span class="propiedad-localidad-span">${o.nombre} - <span class="precio-propiedades-span">${o.precio}</span></span></p>
    </div>
    <p class="propiedades-descripcion">${o.descripcion}</p>
    <div class="datos" data-index=${i}">
        <ul class="datos-container datos-generales">
            <li class="datos-title">Datos Generales</li>
            <li><strong>Antigüedad: </strong>${o.datosGenerales[0].antiguedad}</li>
            <li><strong>Categoría: </strong>${o.datosGenerales[0].categoria}</li>
            <li><strong>Entrada de servicio: </strong>${o.datosGenerales[0].entradaServicio}</li>
            <li><strong>Estados: </strong>${o.datosGenerales[0].estados}</li>
            <li><strong>Frente: </strong>${o.datosGenerales[0].frente}</li>
            <li><strong>Garages: </strong>${o.datosGenerales[0].garages}</li>
            <li><strong>Jardín fondo: </strong>${o.datosGenerales[0].jardinFondo}</li>
            <li><strong>Jardín Frente</strong>${o.datosGenerales[0].jardinFrente}</li>
            <li><strong>Lote: </strong>${o.datosGenerales[0].lote}</li>
            <li><strong>Orientación: </strong>${o.datosGenerales[0].orientacion}</li>
            <li><strong>Parrilla: </strong>${o.datosGenerales[0].parrilla}</li>
            <li><strong>Patio: </strong>${o.datosGenerales[0].patio}</li>
            <li><strong>Pileta: </strong>${o.datosGenerales[0].pileta}</li>
            <li><strong>Quincho: </strong>${o.datosGenerales[0].quincho}</li>
            <li><strong>Superficie cubierta: </strong>${o.datosGenerales[0].superficieCubierta}</li>
            <li><strong>Superficie cubierta: </strong>${o.datosGenerales[0].superficieDescubierta}</li>
            <li><strong>Superficie descubierta: </strong>${o.datosGenerales[0].techo}</li>
            <li><strong>Terraza: </strong>${o.datosGenerales[0].terraza}</li>
            <li><strong>Tipo de propiedad: </strong>${o.datosGenerales[0].tipoPropiedad}</li>

        </ul>
        <ul class="datos-container datos-del-ambiente">
            <li class="datos-title">Datos del ambiente</li>
            <li><strong>Hall: </strong>${o.datosAmbiente[0].hall}</li>
            <li><strong>Living: </strong>${o.datosAmbiente[0].living}</li>
            <li><strong>Cocina: </strong>${o.datosAmbiente[0].cocina}</li>
            <li><strong>Escritorio: </strong>${o.datosAmbiente[0].escritorio}</li>
            <li><strong>Toillete: </strong>${o.datosAmbiente[0].toillete}</li>
            <li><strong>Baño: </strong>${o.datosAmbiente[0].baño}</li>
            <li><strong>Dormitorio: </strong>${o.datosAmbiente[0].dormitorio}</li>
            <li><strong>Balcón: </strong>${o.datosAmbiente[0].balcon}</li>
            <li><strong>Dependencia de servicio: </strong>${o.datosAmbiente[0].depedenciaServicio}</li>
            <li><strong>Dependencia de servicio: </strong>${o.datosAmbiente[0].hallIntimo}</li>
            <li><strong>Office: </strong>${o.datosAmbiente[0].office}</li>
            <li><strong>Lavadero: </strong>${o.datosAmbiente[0].lavadero}</li>
            <li><strong>Barrio: </strong>${o.datosAmbiente[0].barrio}</li>
            <li class="varios-li"><strong>varios</strong></li>
            <li><strong>Tipo de piso: </strong>${o.datosAmbiente[0].tipoPiso}</li>
            <li><strong>Calefacción: </strong>${o.datosAmbiente[0].calefaccion}</li>
            <li><strong>Agua caliente: </strong>${o.datosAmbiente[0].aguaCaliente}</li>
            <li><strong>Aire acondicionado: </strong>${o.datosAmbiente[0].aireAcondicionado}</li>
            <li><strong>Teléfono: </strong>${o.datosAmbiente[0].telefono}</li>
        </ul>
    </div>
    <p>Agradecemos su elección, esperamos respuestas suyas.</p>
    </div>
    </div>
    `,i++});let r=document.createElement("div");r.classList.add("galeria-contenedor"),r.innerHTML=`
    <div class="galeria-imagen-contenedor">
        <i class="btn-cerrar-galeria fas fa-close"></i>
        <img class="galeria-img" src="" >
    </div>
`,t.appendChild(n),t.appendChild(r);const s=document.createElement("footer");s.classList.add("footer"),s.innerHTML=`
<div class="footer-logo">
    <a href="index.html"><img class="logo-img" src="./imagenes/logo.png" alt=""></a>
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
        </div>`,t.appendChild(s),p(),u();const a=document.querySelectorAll(".datos")[8];a.innerHTML=`
<ul class="datos-container datos-del-ambiente">
    <li class="datos-title">Datos del terreno</li>
    <li><strong>Superficie: </strong>247m2</li>
    <li><strong>Lote: </strong>8.66x28.52m2</li>
    <li><strong>Distrito: </strong>(U.S.A.A)</li>
    <li><strong>H Máx: </strong>22.8 m2</li>
    <li><strong>Superficie edificada: </strong>1490m</li>
    <li><strong>Piso: </strong>9</li>
    <li><strong>Valor plusvalía: </strong>190.000u$$</li>
    <li><strong>Valor ventas: </strong>1.100.000u$$</li>
    <li><strong>Orientación: </strong>José Hernández 1400</li>
</ul>
`,document.querySelectorAll(".propiedades-img")[7].src="./imagenes/nodisponible.png",document.querySelectorAll(".galeria-imagenes")[7].innerHTML="";const e=document.querySelectorAll(".propiedades-img")[8],l=document.querySelectorAll(".galeria-imagenes")[8];l.innerHTML="",e.src="./imagenes/josehernandez1.png";const c=document.querySelectorAll(".propiedades-img")[11];c.src="./imagenes/saavedra1.png";const d=document.querySelectorAll(".galeria-imagenes")[11];document.querySelectorAll(".datos")[11].innerHTML="",d.innerHTML="",document.querySelectorAll(".propiedades-img")[12].src="./imagenes/congreso1.png",document.querySelectorAll(".galeria-imagenes")[12].innerHTML="",document.querySelectorAll(".datos")[12].innerHTML="",document.querySelectorAll(".propiedades-img")[13].src="./imagenes/nodisponible.png",document.querySelectorAll(".galeria-imagenes")[13].innerHTML="",document.querySelectorAll(".datos")[17].innerHTML=""},g=()=>{const n=document.querySelector(".form"),i=document.querySelector(".nombre-input"),r=document.querySelector(".telefono-input"),s=document.querySelector(".email-input"),a=document.querySelector(".textarea");n.addEventListener("submit",e=>{const l=i.value,c=s.value,d=r.value,o=r.value.length,m=a.value;let v=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(l===""||c===""||d===""||m==="")return e.preventDefault(),alert("Rellena todos los campos."),!1;if(!c.match(v))return e.preventDefault(),alert("Por favor, introduce un email válido."),!1;if(o<8)return e.preventDefault(),alert("ingresa un número de teléfono válido."),!1})},A=document.querySelector(".contenido"),C=()=>{A.innerHTML=`
<div class="banner">
    <div class="banner-text-container">
            <span>Somos "insertar nombre de la empresa"</span>
            <h1>Ventas y Alquileres</h1>
            <p>Las empresas inmobiliarias se dedican a la compra y venta de bienes inmuebles (casas,
                departamentos, comercios, terrenos, entre otras cosas).</p>
            <p>También brindan otros servicios como:
            alquileres, asesoramiento inmobiliario, tasaciones de propiedades, entre otras cosas.</p>
    </div>

    <div class="banner-img-container">
        <img class="banner-img" src="./imagenes/miller1.png" alt="s&e banner imagen">
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
                    <li>Nuevas construcciones</li>
                    <li>Muchos espacioes</li>
                    <li>Buenos lugares</li>
                    <li>Vida más tranquila</li>
                </ul>
                <img src="./imagenes/cordoba1.jpg" alt="">
            </div>
            <div class="descripcion descripcion-2">
                <ul class="descripcion-list">
                    <span>Propiedades</span> 
                    <li>Ubicación</li>
                    <li>Comodidad</li>
                    <li>Tamaño</li>
                    <li>Exteriores</li>
                </ul>
                <img src="./imagenes/munro3.png" alt="">
            </div>
        </div>
        <div class="nuestros-servicios">
            <p>Nuestros servicios</p>

            <ul class="sobrenosotros-servicios">
                <span>Jurídicos</span>
                <li>1. Asesoría legal en derecho de propiedad.</li>
                <li>2. Asesoría jurídica en derecho civil, comercial, laboral, ocupacional, administrativo, familia.</li>
                <li>3. Elaboración de contratos para todo tipo de negocios.</li>
            </ul>
            <ul class="sobrenosotros-servicios">
                <span>Inmobiliarios</span>
                <li>1. Operaciones inmobiliarias.</li>
                <li>2. Tasaciones.</li>
                <li>3. Adminstración de alquileres.</li>
                <li>4. Administración de consorcios.</li>
                <li>5. Inversiones.</li>
            </ul>
            <ul class="sobrenosotros-servicios">
                <span>Contables</span>
                <li>1. Servicios contables.</li>
                <li>2. Préstamos personales.</li>
                <li>3. Préstamos hipotecarios.</li>
            </ul>
        </div>
    </section>

<section id="sobrenosotros" class="section-sobrenosotros">
    <div class="sobrenosotros-img-container">
        <img class="sobrenosotros-img" src="./Diseño/kam-idris-_HqHX3LBN18-unsplash.jpg" alt="">
    </div>
    <div class="sobrenosotros-texto-container">
            <div class="sobrenosotros-title">
                <p>Sobre Nosotros</p>
                <h2>Compromiso, responsabilidad y promesa</h2>
            </div>
            <div>
                <p>Es lo que le podemos darle a todos nuestros inquilinos o cliente y amigos tenemos para brindarte
                    la mejores de las atenciones, estamos para ayudarlo a encontrar la casa o apartamento que más le
                    convenga y hacer todo lo que esté en nuestras manos para que tenga la atención que mejor
                    desees.
                </p>
            </div>
            <div>
                <p>S&E Consultora es una de las empresas inmobiliarias con mayor tradición y reputación por la
                calidad de su producto, integridad profesional y sirvicio al cliente.</p>
                <p>Nuestro conocimiento tanto del mercando inmobiliario como de las necesidades de los clientes
                    mas exigente o los que estas menos experimentando para ayudarlos a que tenga una mejor
                    calidad de vida con nuestro conocimiento de inmobiliarias estamos para ayudarlos en su viaje de
                    buenos comienzo o buenas aventuras estamos aquí para respectar todos sus derechos y hacerlo
                    de la mejor manera posible para que tenga una atención agradable.</p>
                <p>S&E Consultora ha prestado sus servicios a grandes cantidades de clientes satisfechos,
                    estableciendo relaciones a largo plazo con compradores, vendedores y profesionales inmobiliarios,
                    nuestro personal altamente calificado tiene el firme compromiso de facilitar los mas altos
                    estándares de servicio y excelencia a nuestros clientes.</p>
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
            <a href="index.html"><img class="logo-img" src="./imagenes/logo.png" alt="syeconsultora logo"></a>
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
    `,g()},x=[{nombre:"Portugal 100",imagenes:["portugal1.jpg","portugal2.jpg","portugal3.jpg","portugal4.jpg","portugal5.jpg"],precio:"325.000$$",descripcion:"Excelente propiedad, ideal geriátrico, salones de fiestas y/o consultorios.",datosGenerales:[{tipoPropiedad:"casa",operacion:"alquiler",direccion:"Portugal 100",ambientes:"10",dormitorios:"8",baños:"5",luminosidad:"muy bueno",estado:"bueno",entradaAuto:"si",proximoA:"Ituzaingó, San Antonio de Padua"}],datosAmbiente:[{frenteJardin:"20",living:"6x6",comedor:"10x3",escritorio:"2x2.5",cocina:"6x5",office:"3x4x2",dependenciaServicio:"3x4",patio:"8x3",fondoJardin:"30"}]},{nombre:"Cordoba",imagenes:["cordoba1.jpg","cordoba2.jpg","cordoba3.jpg","cordoba4.jpg","cordoba5.jpg"],precio:"Consultar",descripcion:"Monoambiente para 2 personas. Ideal para matrimonio con bebé. Se trata de un gran ambiente con baño completo, kichinet con mesada, heladera, microondas, televisión LED, con servicio blanco. Y 3 ambientes 4-5 personas. Ideal para descansar. Dispone de habitación matrimonial, baño con ante baño, cocina con 4 hornallas, microondas, heladera con freezer, televisión LED, cucheta con 2 camas, servicio blanco, y garaje.",datosGenerales:[{tipoPropiedad:"casa",operacion:"alquiler",direccion:"",ambientes:"1/3",dormitorios:"3",baños:"2",luminosidad:"excelente",estado:"excelente",entradaAuto:"",proximoA:""}],datosAmbiente:[{frenteJardin:"",living:"",comedor:"",escritorio:"",cocina:"",office:"",dependenciaServicio:"",patio:"",fondoJardin:""}]},{nombre:"Villa Gessell",imagenes:["gessellnuevo1.jpg","gessellnuevo2.jpg","gessellnuevo3.jpg","gessellnuevo4.jpg","gessellnuevo5.jpg"],precio:"Consultar",descripcion:`Departamento amoblado en Villa Gesell, al frente, de 3 ambientes muy luminosos, 2 baños, cocina-comedor con salamandra en perfecto funcionamiento. Sin expensas. Comodidad para 5 personas. La propiedad está en 1°er piso de un sólo modulo. (Ver fotos) A 6 cuadras del ACA. Con lugar de estacionamiento al frente y patio trasero con parrilla, gas envasado, luz, y cloaca. Consulte los precios de alquiler.
        `,datosGenerales:[{tipoPropiedad:"casa",operacion:"alquiler",direccion:"Av. 8 e/ Av.7, Av.9, calle 12",ambientes:"3",dormitorios:"2",baños:"2",luminosidad:"excelente",estado:"muy bueno",entradaAuto:"si",proximoA:"3 cuadras de la playa"}],datosAmbiente:[{frenteJardin:"",living:"",comedor:"",escritorio:"",cocina:"",office:"",dependenciaServicio:"",patio:"",fondoJardin:""}]}],S=()=>{const n=document.querySelector(".contenido");n.innerHTML=`

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
        <h1>Alquileres</h1>
</div>
</div>`;const i=document.createElement("section");i.classList.add("section-alquileres");let r=0;x.forEach((e,l)=>{i.innerHTML+=`
    <div class="propiedades-img-container">
    <img class="propiedades-img" img-index="${r}" src="./imagenes/${e.imagenes[0]}" alt="">
    <div class="imagenes-relacionadas">
        <div class="galeria-imagenes">
            <img img-index="0" class="image-selected" src="./imagenes/${e.imagenes[0]}">
            <img img-index="1" src="./imagenes/${e.imagenes[1]}">
            <img img-index="2" src="./imagenes/${e.imagenes[2]}">
            <img img-index="3" src="./imagenes/${e.imagenes[3]}">
            <img img-index="4" src="./imagenes/${e.imagenes[4]}">
        </div>
    </div>
</div>
<div class="propiedades-texto-container">
    <div class="propiedades-title">
        <p><span class="propiedad-localidad-span">${e.nombre} - <span class="precio-propiedades-span">${e.precio}</span></span></p>
    </div>
    <p class="propiedades-descripcion">${e.descripcion}</p>
    <div class="datos">
        <ul class="datos-container datos-generales">
            <li class="datos-title">Datos Generales</li>
            <li><strong>Tipo de propiedad: </strong>${e.datosGenerales[0].tipoPropiedad}</li>
            <li><strong>Operación: </strong>${e.datosGenerales[0].operacion}</li>
            <li><strong>Dirección: </strong>${e.datosGenerales[0].direccion}</li>
            <li><strong>Ambientes: </strong>${e.datosGenerales[0].ambientes}</li>
            <li><strong>Dormitorios: </strong>${e.datosGenerales[0].dormitorios}</li>
            <li><strong>Baños: </strong>${e.datosGenerales[0].baños}</li>
            <li><strong>Luminosidad: </strong>${e.datosGenerales[0].luminosidad}</li>
            <li><strong>Estado: </strong>${e.datosGenerales[0].estado}</li>
            <li><strong>Entrada para auto: </strong>${e.datosGenerales[0].entradaAuto}</li>
            <li><strong>Próximo a: </strong>${e.datosGenerales[0].proximoA}</li>
        </ul>
        <ul class="datos-container datos-del-ambiente">
            <li class="datos-title">Medidas aproximadas</li>
            <li><strong>Frete jardín: </strong>${e.datosAmbiente[0].frenteJardin}</li>
            <li><strong>Living: </strong>${e.datosAmbiente[0].living}</li>
            <li><strong>Comedor: </strong>${e.datosAmbiente[0].comedor}</li>
            <li><strong>Escritorio: </strong>${e.datosAmbiente[0].escritorio}</li>
            <li><strong>Cocina: </strong>${e.datosAmbiente[0].cocina}</li>
            <li><strong>Office: </strong>${e.datosAmbiente[0].office}</li>
            <li><strong>Dependencia servicio: </strong>${e.datosAmbiente[0].dependenciaServicio}</li>
            <li><strong>Patio: </strong>${e.datosAmbiente[0].patio}</li>
            <li><strong>Fondo jardín: </strong>${e.datosAmbiente[0].fondoJardin}</li>
        </ul>
    </div>
    <p>Agradecemos su elección, esperamos respuestas suyas.</p>
    </div>
    </div>
    `,r++});let s=document.createElement("div");s.classList.add("galeria-contenedor"),s.innerHTML=`
    <div class="galeria-imagen-contenedor">
        <i class="btn-cerrar-galeria fas fa-close"></i>
        <img class="galeria-img" src="" >
    </div>
`,n.appendChild(i),n.appendChild(s);const a=document.createElement("footer");a.classList.add("footer"),a.innerHTML=`
<div class="footer-logo">
    <a href="index.html"><img class="logo-img" src="./imagenes/logo.png" alt=""></a>
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
        </div>`,n.appendChild(a),p(),u()},b=document.querySelectorAll(".ul-list .li-item .li-a"),q=n=>{b.forEach(i=>{i.classList.remove("selected")}),n.classList.add("selected")};b.forEach(n=>{n.addEventListener("click",i=>{q(i.target),i.target.textContent==="Propiedades"?y():i.target.textContent==="Sobre Nosotros"||i.target.textContent==="Servicios"?(C(),g()):i.target.textContent==="Alquileres"&&S()})});const $=()=>{const n=document.querySelector(".open-menu"),i=document.querySelector(".close-menu"),r=document.querySelector(".nav");n.addEventListener("click",()=>{r.style.display="flex"}),i.addEventListener("click",()=>{r.style.display="none"})};p();$();
