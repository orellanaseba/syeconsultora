(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function s(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(n){if(n.ep)return;n.ep=!0;const e=s(n);fetch(n.href,e)}})();const i=[{nombre:"Aizpurua 3200",imagenes:["aizpurua1.png","aizpurua2.png","aizpurua3.png","aizpurua4.png","aizpurua5.png","aizpurua6.png","aizpurua7.png","aizpurua-map.png"],precio:"155.000u$$",descripcion:`Esta nuevo, hermoso apartamento de tres ambientes en dupla.
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
        `,datosGenerales:[{antiguedad:"40 años",estados:"bueno",categoria:"",frente:"lateral",techo:"",lote:"",superficieCubierta:"72m",superficieDescubierta:"5m",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Rivera 3900",tipoPropiedad:"Apartamento"}],datosAmbiente:[{hall:"",living:"7x3.50",cocina:"3x3",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"3x1.5",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"si",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"calefón",aireAcondicionado:"si",telefono:""}]},{nombre:"Ibera y Av. Ricardo Balbín",imagenes:["ibera1.png","ibera2.png","ibera3.png","ibera4.png","ibera5.png","ibera6.png","ibera7.png","ibera8.png","ibera9.png","ibera10.png","ibera11.png","ibera12.png","ibera13.png","ibera14.png","iberamap.png"],precio:"Consultar",descripcion:`Señorial dúplex 4 ambientes con excelente iluminación y con muchos espacios.
        Cuenta cocheras para dos autos, fondo con el jardín, playroom y superficie de 250m20
        Se escucha ofertas.
        `,datosGenerales:[{antiguedad:"",estados:"excelente",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"si",jardinFondo:"",patio:"",entradaServicio:"si",garages:"2 cocheras",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Ibera",tipoPropiedad:"Duplex"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"2",baño:"2",dormitorio:"4",balcon:"si",depedenciaServicio:"6 con dependencias",playRoom:"si",hallIntimo:"",office:"",lavadero:"si",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"termotanque",aireAcondicionado:"si",telefono:""}]},{nombre:"Saavedra",imagenes:["","","","","","","",""],precio:"Consultar",descripcion:`Es una cochera que tenemos para ofrecer en García del rio entre naon y Washington.
        Chochera fija descubierta muy cómoda.        
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Lote terreno",imagenes:["","","","","","","",""],precio:"Consultar",descripcion:`Está ubicado en un buen sector Av. Congreso y Mariano Acha.       
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Manzanares 3900",imagenes:["manzanares1.png","manzanares2.png","manzanares3.png","manzanares4.png","manzanares5.png","","",""],precio:"Consultar",descripcion:`Excelente dos ambientes muy luminoso amplio balcón, edificio nuevo, excelente ubicación, cerca de la estación Saavedra, Dot, parque Saavedra y general paz y panamericana.     
        `,datosGenerales:[{antiguedad:"a estrenar",estados:"excelente",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"40m2",superficieDescubierta:"6m2",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"si",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Manzanares Piso 5",tipoPropiedad:"apartamento"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Arias 4800",imagenes:["arias1.png","arias2.png","arias3.png","arias4.png","arias5.png","",""],precio:"Consultar",descripcion:`Tenemos para mostrarle un PH de muy buen estado.
        Te cuento un poco más del PH es un alquiler témpora hasta 3 persona, muy luminador, con patio, baños completos, muy buen lugar y está cerca al parque sarmiento.
            
        `,datosGenerales:[{antiguedad:"10 años",estados:"bueno",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"32m",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"3x3",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Arias",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:"Alquiler temporal de ph"}]},{nombre:"Tras las Sierras",imagenes:["sierras1.png","sierras2.png","sierras3.png","sierras4.png","sierras5.png","",""],precio:"Consultar",descripcion:`Es un lugar hermoso cercas, centro de Mina Clavero se encuentra seña del 50% del monto, tiene ríos cercas.
        Cuentas con una cama matrimonial, un sofá cama, agua caliente, con termo individual, sabanas y acolchados, vajilla completa, ventilador, cochea y parrilla.
        
            
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Moreno",imagenes:["moreno1.png","moreno2.png","moreno3.png","moreno4.png","moreno6.png","",""],precio:"Consultar",descripcion:`Tenemos para ofrecer una quinta en un barrio privado.
        Te cuenta un poco de la casa de tres ambientes, también cuenta con un área cubierta de 180m2, galería, parrilla, horno de barro, pileta, casa de servicio lote de 70x40 ruta 25km4.
        Se escucha oferta.            
        `,datosGenerales:[{antiguedad:"10 años",estados:"muy bueno",categoria:"",frente:"",techo:"",lote:"70x40",superficieCubierta:"150m2, total:2.800m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"para 4 autos",terraza:"",galeria:"",quincho:"si",parrilla:"si",pileta:"si",orientacion:"Quita",tipoPropiedad:"casa"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"2, 3 ambientes",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"ruta 25, Km 4",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Construcción en seco",imagenes:["seco1.png","seco2.png","seco3.png","seco4.png","seco5.png","",""],precio:"Consultar",descripcion:`Realizamos propiedad en seco en menos de 90 días consulte los modelos, valores y facilidades.        
        `,datosGenerales:[{antiguedad:"10 años",estados:"muy bueno",categoria:"",frente:"",techo:"",lote:"70x40",superficieCubierta:"150m2, total:2.800m2",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"para 4 autos",terraza:"",galeria:"",quincho:"si",parrilla:"si",pileta:"si",orientacion:"Quita",tipoPropiedad:"casa"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"2, 3 ambientes",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"ruta 25, Km 4",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Ayacucho y Av. Corrientes",imagenes:["","","","","","",""],precio:"Consultar",descripcion:`Tenemos para ofrecer una oficina en el centro muy iluminada, un despacho, sala de reuniones, ambiente para despacho o archivero, recepción divisiones de blindex también cuenta con una cocina 2x1, hall 7x5 y la superficie cubierta en 28m2.          
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Av. Ricardo Balbín 3100",imagenes:["avbalbin1.png","avbalbin2.png","avbalbin3.png","avbalbin4.png","avbalbin5.png"],precio:"Consultar",descripcion:`Tenemos para ofrecer una oficina en el centro muy iluminada, un despacho, sala de reuniones, ambiente para despacho o archivero, recepción divisiones de blindex también cuenta con una cocina 2x1, hall 7x5 y la superficie cubierta en 28m2.          
        `,datosGenerales:[{antiguedad:"",estados:"excelente",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"90m2",superficieDescubierta:"8m2",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"frente Balbín 3100",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"si",baño:"completo",dormitorio:"3, 4 ambientes",balcon:"si",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Coghlan",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Balbín 2800",imagenes:["balbin2800-1.png","balbin2800-2.png","balbin2800-3.png","balbin2800-4.png","balbin2800-5.png"],precio:"Consultar",descripcion:`Tenemos para ofrecer dos ambientes que estas ubicando en una buena zona muy cerca a lo que es el parque Saavedra, barrio Coghlan.         
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Machain y Balbín",imagenes:["machain1.png","machain2.png","machain3.png","machain4.png","machain5.png"],precio:"Consultar",descripcion:`Es unos dos ambientes en una zona tranquila cerca de parque Saavedra.
        Te cuento un poco mas sobre ella cuenta con un espacio grande en lo que es(el living, comedor y cocina), baños completos, cuenta con caldera, con parrillas,  aires acondicionados, balcón y un dormitorio.      
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Vidal 2060",imagenes:["","","","",""],precio:"Consultar",descripcion:`Entre Juramento y Echeverría contamos con dos cocheras fijas muy buenas zona en el barrio Belgrano. 
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Bauness 2200",imagenes:["","","","",""],precio:"Consultar",descripcion:`Excelente 4 ambiente en el barrio villa Urquiza.
        Te cuento un poco mas sobre lo que tiene y lo que esta a los alrededores cuenta con cochera, dos baños, cocina, lavadero integrado, tres habitaciones, living, comedor y balcón.
        Frente a plaza Etcheverria.         
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]},{nombre:"Lomas del Mirador",imagenes:["","","","",""],precio:"Consultar",descripcion:`Te cuento un poco más de lo hermoso alquiler de dos ambientes que tenemos para ofrecer con balcón y sin expresa, frente la plaza del cañón y hermosa zona para vivir.    
        `,datosGenerales:[{antiguedad:"",estados:"",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"",tipoPropiedad:""}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]}],d=()=>{const r=document.querySelector(".leyes"),o=document.querySelector(".modal-leyes-container");r.addEventListener("click",()=>{o.classList.add("modal-open")}),z(o)},z=r=>{document.querySelector(".btn-closemodal").addEventListener("click",()=>{r.classList.remove("modal-open")})},m=()=>{const r=document.querySelectorAll(".galeria-imagenes img"),o=document.querySelector(".galeria-contenedor"),s=document.querySelector(".galeria-img");r.forEach(n=>{n.addEventListener("click",e=>{let t=e.target.getAttribute("src");o.classList.remove("cerrar-galeria"),o.classList.add("abrir-galeria"),s.src=t,console.log(e.target)})}),document.querySelector(".btn-cerrar-galeria").addEventListener("click",()=>{o.classList.add("cerrar-galeria"),o.classList.remove("abrir-galeria")})},c=document.querySelector(".contenido"),E=()=>{c.innerHTML="",c.innerHTML=`

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
</div>`;const r=document.createElement("section");r.classList.add("section-propiedades");let o=0;i.forEach((a,O)=>{r.innerHTML+=`
    <div class="propiedades-img-container">
    <img class="propiedades-img" img-index="${o}" src="./imagenes/${a.imagenes[0]}" alt="">
    <div class="imagenes-relacionadas">
        <div class="galeria-imagenes" galeria-index="${o}">
            <img img-index="0" class="image-selected" src="./imagenes/${a.imagenes[0]}">
            <img img-index="1" src="./imagenes/${a.imagenes[1]}">
            <img img-index="2" src="./imagenes/${a.imagenes[2]}">
            <img img-index="3" src="./imagenes/${a.imagenes[3]}">
            <img img-index="4" src="./imagenes/${a.imagenes[4]}">
        </div>
    </div>
</div>
<div class="propiedades-texto-container">
    <div class="propiedades-title">
        <p><span class="propiedad-localidad-span">${a.nombre} - <span class="precio-propiedades-span">${a.precio}</span></span></p>
    </div>
    <p class="propiedades-descripcion">${a.descripcion}</p>
    <div class="datos" data-index=${o}">
        <ul class="datos-container datos-generales">
            <li class="datos-title">Datos Generales</li>
            <li><strong>Antigüedad: </strong>${a.datosGenerales[0].antiguedad}</li>
            <li><strong>Categoría: </strong>${a.datosGenerales[0].categoria}</li>
            <li><strong>Entrada de servicio: </strong>${a.datosGenerales[0].entradaServicio}</li>
            <li><strong>Estados: </strong>${a.datosGenerales[0].estados}</li>
            <li><strong>Frente: </strong>${a.datosGenerales[0].frente}</li>
            <li><strong>Garajes: </strong>${a.datosGenerales[0].garages}</li>
            <li><strong>Jardín fondo: </strong>${a.datosGenerales[0].jardinFondo}</li>
            <li><strong>Jardín Frente: </strong>${a.datosGenerales[0].jardinFrente}</li>
            <li><strong>Lote: </strong>${a.datosGenerales[0].lote}</li>
            <li><strong>Orientación: </strong>${a.datosGenerales[0].orientacion}</li>
            <li><strong>Parrilla: </strong>${a.datosGenerales[0].parrilla}</li>
            <li><strong>Patio: </strong>${a.datosGenerales[0].patio}</li>
            <li><strong>Pileta: </strong>${a.datosGenerales[0].pileta}</li>
            <li><strong>Quincho: </strong>${a.datosGenerales[0].quincho}</li>
            <li><strong>Superficie cubierta: </strong>${a.datosGenerales[0].superficieCubierta}</li>
            <li><strong>Superficie descubierta: </strong>${a.datosGenerales[0].superficieDescubierta}</li>
            <li><strong>techo: </strong>${a.datosGenerales[0].techo}</li>
            <li><strong>Terraza: </strong>${a.datosGenerales[0].terraza}</li>
            <li><strong>Tipo de propiedad: </strong>${a.datosGenerales[0].tipoPropiedad}</li>

        </ul>
        <ul class="datos-container datos-del-ambiente">
            <li class="datos-title">Datos del ambiente</li>
            <li><strong>Hall: </strong>${a.datosAmbiente[0].hall}</li>
            <li><strong>Living: </strong>${a.datosAmbiente[0].living}</li>
            <li><strong>Cocina: </strong>${a.datosAmbiente[0].cocina}</li>
            <li><strong>Escritorio: </strong>${a.datosAmbiente[0].escritorio}</li>
            <li><strong>Toillete: </strong>${a.datosAmbiente[0].toillete}</li>
            <li><strong>Baño: </strong>${a.datosAmbiente[0].baño}</li>
            <li><strong>Dormitorio: </strong>${a.datosAmbiente[0].dormitorio}</li>
            <li><strong>Balcón: </strong>${a.datosAmbiente[0].balcon}</li>
            <li><strong>Dependencia de servicio: </strong>${a.datosAmbiente[0].depedenciaServicio}</li>
            <li><strong>Hall intimo: </strong>${a.datosAmbiente[0].hallIntimo}</li>
            <li><strong>Office: </strong>${a.datosAmbiente[0].office}</li>
            <li><strong>Lavadero: </strong>${a.datosAmbiente[0].lavadero}</li>
            <li><strong>Barrio: </strong>${a.datosAmbiente[0].barrio}</li>
            <li class="varios-li"><strong>varios</strong></li>
            <li><strong>Tipo de piso: </strong>${a.datosAmbiente[0].tipoPiso}</li>
            <li><strong>Calefacción: </strong>${a.datosAmbiente[0].calefaccion}</li>
            <li><strong>Agua caliente: </strong>${a.datosAmbiente[0].aguaCaliente}</li>
            <li><strong>Aire acondicionado: </strong>${a.datosAmbiente[0].aireAcondicionado}</li>
            <li><strong>Teléfono: </strong>${a.datosAmbiente[0].telefono}</li>
        </ul>
    </div>
    <p>Agradecemos su elección, esperamos respuestas suyas.</p>
    </div>
    </div>
    `,o++});let s=document.createElement("div");s.classList.add("galeria-contenedor"),s.innerHTML=`
    <div class="galeria-imagen-contenedor">
        <i class="btn-cerrar-galeria fas fa-close"></i>
        <img class="galeria-img" src="" >
    </div>
`,c.appendChild(r),c.appendChild(s);const l=document.createElement("footer");l.classList.add("footer"),l.innerHTML=`
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
        </div>`,c.appendChild(l);const n=document.querySelectorAll(".datos")[8];n.innerHTML=`
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
`;const e=document.querySelectorAll(".galeria-imagenes")[3];e.innerHTML=`
    <img img-index="0" class="image-selected" src="./imagenes/${i[3].imagenes[0]}">
    <img img-index="1" src="./imagenes/${i[3].imagenes[0]}">
    <img img-index="2" src="./imagenes/${i[3].imagenes[1]}">
    <img img-index="3" src="./imagenes/${i[3].imagenes[2]}">
    <img img-index="4" src="./imagenes/${i[3].imagenes[3]}">
    <img img-index="4" src="./imagenes/${i[3].imagenes[4]}">
    <img img-index="4" src="./imagenes/${i[3].imagenes[5]}">
    <img img-index="4" src="./imagenes/${i[3].imagenes[6]}">
    <img img-index="4" src="./imagenes/${i[3].imagenes[7]}">
    <img img-index="4" src="./imagenes/${i[3].imagenes[8]}">
`;const t=document.querySelectorAll(".galeria-imagenes")[4];t.innerHTML=`
<img img-index="0" class="image-selected" src="./imagenes/${i[4].imagenes[0]}">
    <img img-index="1" src="./imagenes/${i[4].imagenes[0]}">
    <img img-index="2" src="./imagenes/${i[4].imagenes[1]}">
    <img img-index="3" src="./imagenes/${i[4].imagenes[2]}">
    <img img-index="4" src="./imagenes/${i[4].imagenes[3]}">
    <img img-index="5" src="./imagenes/${i[4].imagenes[4]}">
    <img img-index="6" src="./imagenes/${i[4].imagenes[5]}">
    <img img-index="7" src="./imagenes/${i[4].imagenes[6]}">
    <img img-index="8" src="./imagenes/${i[4].imagenes[7]}">
    <img img-index="9" src="./imagenes/${i[4].imagenes[8]}">
    <img img-index="10" src="./imagenes/${i[4].imagenes[9]}">
    <img img-index="11" src="./imagenes/${i[4].imagenes[10]}">
    <img img-index="12" src="./imagenes/${i[4].imagenes[11]}">
    <img img-index="13" src="./imagenes/${i[4].imagenes[12]}">
    <img img-index="14" src="./imagenes/${i[4].imagenes[13]}">
    <img img-index="15" src="./imagenes/${i[4].imagenes[14]}">
    <img img-index="16" src="./imagenes/${i[4].imagenes[15]}">
    <img img-index="17" src="./imagenes/${i[4].imagenes[16]}">
    <img img-index="18" src="./imagenes/${i[4].imagenes[17]}">
`;const u=document.querySelectorAll(".galeria-imagenes")[10];u.innerHTML=`
<img img-index="0" class="image-selected" src="./imagenes/${i[10].imagenes[0]}">
    <img img-index="1" src="./imagenes/${i[10].imagenes[1]}">
    <img img-index="2" src="./imagenes/${i[10].imagenes[2]}">
    <img img-index="3" src="./imagenes/${i[10].imagenes[3]}">
    <img img-index="4" src="./imagenes/${i[10].imagenes[4]}">
    <img img-index="5" src="./imagenes/${i[10].imagenes[5]}">
    <img img-index="6" src="./imagenes/${i[10].imagenes[6]}">
    <img img-index="7" src="./imagenes/${i[10].imagenes[7]}">
    <img img-index="8" src="./imagenes/${i[10].imagenes[8]}">
    <img img-index="9" src="./imagenes/${i[10].imagenes[9]}">
    <img img-index="10" src="./imagenes/${i[10].imagenes[10]}">
    <img img-index="11" src="./imagenes/${i[10].imagenes[11]}">
    <img img-index="12" src="./imagenes/${i[10].imagenes[12]}">
    <img img-index="13" src="./imagenes/${i[10].imagenes[13]}">
    <img img-index="14" src="./imagenes/${i[10].imagenes[14]}">
`;const b=document.querySelectorAll(".galeria-imagenes")[1];b.innerHTML=`
<img img-index="0" class="image-selected" src="./imagenes/${i[1].imagenes[0]}">
    <img img-index="1" src="./imagenes/${i[1].imagenes[1]}">
    <img img-index="2" src="./imagenes/${i[1].imagenes[2]}">
    <img img-index="3" src="./imagenes/${i[1].imagenes[3]}">
    <img img-index="4" src="./imagenes/${i[1].imagenes[4]}">
    <img img-index="5" src="./imagenes/${i[1].imagenes[5]}">
    <img img-index="6" src="./imagenes/${i[1].imagenes[6]}">
    <img img-index="6" src="./imagenes/${i[1].imagenes[7]}">
`;const f=document.querySelectorAll(".datos")[18],v=document.querySelectorAll(".propiedades-img")[18],y=document.querySelectorAll(".galeria-imagenes")[18];v.src="./imagenes/nodisponible.png",f.style.display="none",y.innerHTML="";const h=document.querySelectorAll(".datos")[20];h.style.display="none";const A=document.querySelectorAll(".datos")[21];A.style.display="none";const x=document.querySelectorAll(".datos")[22];document.querySelectorAll(".galeria-imagenes")[22].innerHTML="",document.querySelectorAll(".propiedades-img")[22].src="./imagenes/nodisponible.png",x.style.display="none";const $=document.querySelectorAll(".datos")[23];document.querySelectorAll(".galeria-imagenes")[23].innerHTML="",document.querySelectorAll(".propiedades-img")[23].src="./imagenes/nodisponible.png",$.style.display="none";const C=document.querySelectorAll(".datos")[24];document.querySelectorAll(".galeria-imagenes")[24].innerHTML="",document.querySelectorAll(".propiedades-img")[24].src="./imagenes/nodisponible.png",C.style.display="none",document.querySelectorAll(".propiedades-img")[7].src="./imagenes/nodisponible.png",document.querySelectorAll(".galeria-imagenes")[7].innerHTML="";const S=document.querySelectorAll(".propiedades-img")[8],q=document.querySelectorAll(".galeria-imagenes")[8];q.innerHTML="",S.src="./imagenes/josehernandez1.png";const P=document.querySelectorAll(".propiedades-img")[11];P.src="./imagenes/saavedra1.png";const L=document.querySelectorAll(".galeria-imagenes")[11],j=document.querySelectorAll(".datos")[11];L.innerHTML="",j.style.display="none",document.querySelectorAll(".propiedades-img")[12].src="./imagenes/congreso1.png",document.querySelectorAll(".galeria-imagenes")[12].innerHTML="";const g=document.querySelectorAll(".datos")[12];g.style.display="none",g.innerHTML="";const G=document.querySelectorAll(".datos")[17];G.style.display="none",d(),m()};document.querySelector(".contenido");const F=[{nombre:"Arias 4800",imagenes:["arias1.png","arias2.png","arias3.png","arias4.png","arias5.png","",""],precio:"Consultar",descripcion:`Tenemos para mostrarle un PH de muy buen estado.
        Te cuento un poco más del PH es un alquiler témpora hasta 3 persona, muy luminador, con patio, baños completos, muy buen lugar y está cerca al parque sarmiento.
            
        `,datosGenerales:[{antiguedad:"10 años",estados:"bueno",categoria:"",frente:"",techo:"",lote:"",superficieCubierta:"32m",superficieDescubierta:"",jardinFrente:"",jardinFondo:"",patio:"3x3",entradaServicio:"",garages:"",terraza:"",galeria:"",quincho:"",parrilla:"",pileta:"",orientacion:"Arias",tipoPropiedad:"alquiler temporal"}],datosAmbiente:[{hall:"",living:"",cocina:"",escritorio:"",toillete:"",baño:"completo",dormitorio:"",balcon:"",depedenciaServicio:"",playRoom:"",hallIntimo:"",office:"",lavadero:"",barrio:"Saavedra",tipoPiso:"",calefaccion:"",aguaCaliente:"",aireAcondicionado:"",telefono:""}]}],D=()=>{const r=document.querySelector(".contenido");r.innerHTML=`

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
</div>`;const o=document.createElement("section");o.classList.add("section-alquileres");let s=0;F.forEach((e,t)=>{o.innerHTML+=`
    <div class="propiedades-img-container">
    <img class="propiedades-img" img-index="${s}" src="./imagenes/${e.imagenes[0]}" alt="">
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
    <div class="datos" data-index=${s}">
        <ul class="datos-container datos-generales">
            <li class="datos-title">Datos Generales</li>
            <li><strong>Antigüedad: </strong>${e.datosGenerales[0].antiguedad}</li>
            <li><strong>Categoría: </strong>${e.datosGenerales[0].categoria}</li>
            <li><strong>Entrada de servicio: </strong>${e.datosGenerales[0].entradaServicio}</li>
            <li><strong>Estados: </strong>${e.datosGenerales[0].estados}</li>
            <li><strong>Frente: </strong>${e.datosGenerales[0].frente}</li>
            <li><strong>Garages: </strong>${e.datosGenerales[0].garages}</li>
            <li><strong>Jardín fondo: </strong>${e.datosGenerales[0].jardinFondo}</li>
            <li><strong>Jardín Frente</strong>${e.datosGenerales[0].jardinFrente}</li>
            <li><strong>Lote: </strong>${e.datosGenerales[0].lote}</li>
            <li><strong>Orientación: </strong>${e.datosGenerales[0].orientacion}</li>
            <li><strong>Parrilla: </strong>${e.datosGenerales[0].parrilla}</li>
            <li><strong>Patio: </strong>${e.datosGenerales[0].patio}</li>
            <li><strong>Pileta: </strong>${e.datosGenerales[0].pileta}</li>
            <li><strong>Quincho: </strong>${e.datosGenerales[0].quincho}</li>
            <li><strong>Superficie cubierta: </strong>${e.datosGenerales[0].superficieCubierta}</li>
            <li><strong>Superficie cubierta: </strong>${e.datosGenerales[0].superficieDescubierta}</li>
            <li><strong>Superficie descubierta: </strong>${e.datosGenerales[0].techo}</li>
            <li><strong>Terraza: </strong>${e.datosGenerales[0].terraza}</li>
            <li><strong>Tipo de propiedad: </strong>${e.datosGenerales[0].tipoPropiedad}</li>

        </ul>
        <ul class="datos-container datos-del-ambiente">
            <li class="datos-title">Datos del ambiente</li>
            <li><strong>Hall: </strong>${e.datosAmbiente[0].hall}</li>
            <li><strong>Living: </strong>${e.datosAmbiente[0].living}</li>
            <li><strong>Cocina: </strong>${e.datosAmbiente[0].cocina}</li>
            <li><strong>Escritorio: </strong>${e.datosAmbiente[0].escritorio}</li>
            <li><strong>Toillete: </strong>${e.datosAmbiente[0].toillete}</li>
            <li><strong>Baño: </strong>${e.datosAmbiente[0].baño}</li>
            <li><strong>Dormitorio: </strong>${e.datosAmbiente[0].dormitorio}</li>
            <li><strong>Balcón: </strong>${e.datosAmbiente[0].balcon}</li>
            <li><strong>Dependencia de servicio: </strong>${e.datosAmbiente[0].depedenciaServicio}</li>
            <li><strong>Dependencia de servicio: </strong>${e.datosAmbiente[0].hallIntimo}</li>
            <li><strong>Office: </strong>${e.datosAmbiente[0].office}</li>
            <li><strong>Lavadero: </strong>${e.datosAmbiente[0].lavadero}</li>
            <li><strong>Barrio: </strong>${e.datosAmbiente[0].barrio}</li>
            <li class="varios-li"><strong>varios</strong></li>
            <li><strong>Tipo de piso: </strong>${e.datosAmbiente[0].tipoPiso}</li>
            <li><strong>Calefacción: </strong>${e.datosAmbiente[0].calefaccion}</li>
            <li><strong>Agua caliente: </strong>${e.datosAmbiente[0].aguaCaliente}</li>
            <li><strong>Aire acondicionado: </strong>${e.datosAmbiente[0].aireAcondicionado}</li>
            <li><strong>Teléfono: </strong>${e.datosAmbiente[0].telefono}</li>
        </ul>
    </div>
    <p>Agradecemos su elección, esperamos respuestas suyas.</p>
    </div>
    </div>
    `,s++});let l=document.createElement("div");l.classList.add("galeria-contenedor"),l.innerHTML=`
    <div class="galeria-imagen-contenedor">
        <i class="btn-cerrar-galeria fas fa-close"></i>
        <img class="galeria-img" src="" >
    </div>
`,r.appendChild(o),r.appendChild(l);const n=document.createElement("footer");n.classList.add("footer"),n.innerHTML=`
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
        </div>`,r.appendChild(n),d(),m()},T=document.querySelector(".contenido"),I=()=>{T.innerHTML=`
    <section id="sobrenosotros" class="sobrenosotros">
    <div class="sobrenosotros-img-container">
        <img class="sobrenosotros-img" src="./Diseño/naomi-hebert-MP0bgaS_d1c-unsplash.jpg" alt="">
    </div>
    <div class="sobrenosotros-texto-container">
            <div class="sobrenosotros-title">
                <p>Sobre Nosotros</p>
            </div>
            <div>
                <p>
                S&E Consultora es una de las empresas inmobiliarias con mayor tradición y reputación por la
                calidad de su producto, integridad profesional y sirvió al cliente.
                Nuestro conocimiento tanto del mercando inmobiliario como de las necesidades de los clientes
                mas exigente o los que estas menos experimentando para ayudarlos a que tenga una mejor
                calidad de vida con nuestro conocimiento de inmobiliarias estamos para ayudarlos en su viaje de
                buenos comienzo o buenas aventuras estamos aquí para respectar todos sus derechos y hacerlo
                de la mejor manera posible para que tenga una atención agradable.
                S&E Consultora ha prestado sus servicios a grandes cantidades de clientes satisfechos,
                estableciendo relaciones a largo plazo con compradores, vendedores y profesionales inmobiliarios,
                nuestro personal altamente calificado tiene el firme compromiso de facilitar los mas altos
                estándares de servicio y excelencia a nuestros clientes.
                </p>
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
    `},H=document.querySelector(".contenido"),M=()=>{H.innerHTML=`
    <div class="nuestros-servicios-section">
    <p>Nuestros servicios</p>

    <ul class="sobrenosotros-servicios-list">
        <span>Jurídicos</span>
        <li>1. Asesoría legal en derecho de propiedad.</li>
        <li>2. Asesoría jurídica en derecho civil, comercial, laboral, ocupacional, administrativo, familia.</li>
        <li>3. Elaboración de contratos para todo tipo de negocios.</li>
    </ul>
    <ul class="sobrenosotros-servicios-list">
        <span>Inmobiliarios</span>
        <li>1. Operaciones inmobiliarias.</li>
        <li>2. Tasaciones.</li>
        <li>3. Adminstración de alquileres.</li>
        <li>4. Administración de consorcios.</li>
        <li>5. Inversiones.</li>
    </ul>
    <ul class="sobrenosotros-servicios-list">
        <span>Contables</span>
        <li>1. Servicios contables.</li>
        <li>2. Préstamos personales.</li>
        <li>3. Préstamos hipotecarios.</li>
    </ul>
</div>

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
    `},p=document.querySelectorAll(".ul-list .li-item .li-a"),R=r=>{p.forEach(o=>{o.classList.remove("selected")}),r.classList.add("selected")};p.forEach(r=>{r.addEventListener("click",o=>{R(o.target),o.target.textContent==="Propiedades"?E():o.target.textContent==="Servicios"?M():o.target.textContent==="Sobre Nosotros"?I():o.target.textContent==="Alquileres"&&D()})});const B=()=>{const r=document.querySelector(".open-menu"),o=document.querySelector(".close-menu"),s=document.querySelector(".nav");r.addEventListener("click",()=>{s.style.display="flex"}),o.addEventListener("click",()=>{s.style.display="none"})};d();B();
