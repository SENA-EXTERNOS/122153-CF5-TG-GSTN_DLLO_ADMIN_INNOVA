(function(e){function a(a){for(var o,i,r=a[0],s=a[1],d=a[2],l=0,u=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&u.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},c={app:0},t=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"0aa9eb4a","chunk-0206bfa0":"08ff7102","chunk-039c07ee":"9157d02d","chunk-13a6037e":"795db77f","chunk-16215048":"dd2f4567","chunk-18f95272":"92ff8633","chunk-2c06842c":"7dd02792","chunk-2d0c5615":"66262bf8","chunk-2d0e96ec":"0e3944de","chunk-2d208d90":"687062ac","chunk-2d21d0e2":"3396eb7b","chunk-2d22c123":"f6af4ae4","chunk-2e80bb9a":"ef232ae9","chunk-2fdc87ee":"bf1212d0","chunk-30d2f332":"739e77dd","chunk-36769079":"a99a338f","chunk-398c63f0":"87bcb814","chunk-44daca35":"40802002","chunk-4adb6690":"1a0d735a","chunk-5309f94e":"7c7600cc","chunk-53ccb27e":"c2e3d10f","chunk-55d286b8":"3335923a","chunk-681f37d3":"d6188e20","chunk-6928a14a":"7c039623","chunk-69444b4c":"e256e6c7","chunk-6e45141e":"a7b43e30","chunk-863a1ee8":"1d2351db","chunk-923527cc":"3698c4a6","chunk-a48a3e88":"9b6b4a94","chunk-c796899c":"7a3e85cf","chunk-e8a7823a":"9ddf7174","chunk-eaa1fac2":"39a4b7b8","chunk-f2a44bde":"2ad66664",comple:"b4194870",creditos:"addf4ee5",glosario:"d60852d7",intro:"14a929c0",referencias:"d6ed96ce",sintesis:"b6737656",tema1:"3bd2cf2b",tema2:"74203d2f",tema3:"f129cf6b"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-923527cc":1,"chunk-a48a3e88":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"cb84b683","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"fcef2197","chunk-923527cc":"985220b5","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f2a44bde":"c02cabcb",comple:"bfff5dee",creditos:"b6e74207",glosario:"50b77f6c",intro:"31d6cfe0",referencias:"2ff3aa21",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",c=s.p+o,t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var d=t[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===c))return a()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){d=u[r],l=d.getAttribute("data-href");if(l===o||l===c)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||c,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=c[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=c[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=c[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}c[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);var o=n("68f3"),i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},c=[],t={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},r=t,s=n("2877"),d=Object(s["a"])(r,i,c,!1,null,null,null),l=d.exports,u=n("2b0e"),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);const h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:()=>n.e("intro").then(n.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>n.e("tema1").then(n.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>n.e("tema2").then(n.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>n.e("tema3").then(n.bind(null,"eb46"))}]},{path:"/actividad",name:"actividad",component:()=>n.e("actividad").then(n.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>n.e("glosario").then(n.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>n.e("comple").then(n.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>n.e("referencias").then(n.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>n.e("creditos").then(n.bind(null,"ef72"))}],scrollBehavior(e,a){if(e.hash){const n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise(e=>{setTimeout(()=>{e(n)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Generalidades de la gestión del talento humano",descripcionCurso:"La gestión del talento humano se encarga de procesos para atraer, incorporar y retener colaboradores en las empresas. Con este enfoque, una organización busca emplear y retener personal calificado y valioso, debido a que los procesos de reclutamiento, selección, desarrollo y capacitación, son costosos. Para toda empresa, es fundamental ubicar al individuo en un cargo, donde sus habilidades y conocimientos se utilicen de forma óptima.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Gestión del talento humano",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Estructura organizacional",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Identificación de las necesidades del talento humano",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Gestión del talento humano",referencia:"lepatru007. (2018).<em> Gestión del Talento Humano: Conceptos </em> (video). YouTube. ",tipo:"Video",link:"https://youtu.be/yZ7-ckjDE1I"},{tema:"Estructura organizacional",referencia:"Zona Administrativa. (s.f.).<em> Estructura y Diseño Organizacional </em>(video). YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=V9PMrldu2Jc "},{tema:"Identificación de las necesidades del talento humano",referencia:"Código Sustantivo del Trabajo. Decreto Ley 3743 de 1950. (Colombia).  ",tipo:"Documento",link:"http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html "},{tema:"Identificación de las necesidades del talento humano",referencia:"Engelmann, M. (2021). <em>Proceso de selección cómo es y cómo se hace – Explicación selección de personal </em> (video). YouTube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=QAIIOn5YqAY "}],glosario:[{termino:"Análisis de puesto",significado:"análisis variable, característica y elementos de un puesto de trabajo (requerimientos de conocimiento, aptitudinales y físicos)."},{termino:"Cargo",significado:"conjunto de actividades relacionadas o agrupadas en un mismo campo de acción."},{termino:"Clasificación de puestos",significado:"son técnicas para analizar la naturaleza de los puestos para agruparlos en cargos, clases y estratos ocupacionales."},{termino:"Coordinación",significado:"es el proceso de analizar diferentes actividades y combinarlas de tal manera, que se ejecuten en un momento específico."},{termino:"Delegación",significado:"acto de encomendar o confiar actividades, responsabilidades a los subordinados."},{termino:"Eficiencia",significado:"indicador que indica menos o menor costo en el desarrollo de una actividad o proyecto."},{termino:"Escala salarial",significado:"ubicación jerárquica de la valoración económica a los empleados, que se define según el nivel del cargo, formación y responsabilidades."},{termino:"Especialización del trabajo",significado:"acción que permite a los empleados especializarse en una función o tareas, a modo de ser más eficientes y eficaces en su desarrollo."},{termino:"Experiencia",significado:"identificación del nivel de acción o práctica que ha tenido el aspirante frente en determinada área del conocimiento. "},{termino:"Formación académica",significado:"hace referencia a la capacitación que el aspirante haya realizado a nivel de postgrado, profesional, técnica, tecnológica o auxiliar."},{termino:"Pruebas de selección",significado:"actividades que se deben aplicar durante el proceso de selección, permiten filtrar y seleccionar la mejor opción."},{termino:"Supervisión",significado:"acción de vigilar, monitorear y ayudar al cumplimiento de las tareas o actividades asignadas a un grupo de trabajo. "}],referencias:[{referencia:"Bernal Torres, C. A. y Sierra Arango, H. D. (2017). <em>Proceso Administrativo</em>. Editorial Pearson.",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6926&pg=196"},{referencia:"Blandez Ricalde, M. D. G. y Blandez Ricalde, M. (2014). <em>Proceso administrativo.</em> Editorial Digital UNID. ",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/41174?page=61 "},{referencia:"Boada, R. (2015). <em> Identificando el talento humano.</em> McGraw-Hill Interamericana. ",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7452 "},{referencia:"Bouzas Ortiz, J. A. y Reyes Gaytán, G. (2019). <em>Gestión del talento humano. </em>IURE Editores. ",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130372?page=8"},{referencia:"Chivaneto, A. (2009). <em>Gestion del talento humano</em> (3ª. Ed.)  ",link:"http://104.207.147.154:8080/bitstream/54000/1143/1/Chiavenato-Talento%20humano%203ra%20ed.pdf   "},{referencia:"Chiavenato, I. (2017). <em>Administración del recurso humano.</em> McGraw-Hill Interamericana. ",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5207&pg=389"},{referencia:"Chiavenato, I. (2020). <em> Gestión del talento humano </em>. McGraw-Hill Interamericana. ",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9350  "},{referencia:"Cuesta Santos, A. (2010).<em> Gestión del talento humano y el conocimiento.</em> Ecoe Ediciones. ",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=110 "},{referencia:"Louffat, E. (2017).<em> Reclutando y seleccionando al personal.</em> Pearson Educación. ",link:"https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10379 "}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;const k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:e=>e(l)}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.5425fa0a.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.55d3f639.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.368720ea.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.a57f83eb.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.32228650.png"}});
//# sourceMappingURL=app.b0541eaf.js.map