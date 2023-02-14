<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión del talento humano
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img2.png', alt='imagen relacionada')
      .col-md-7      
        p Para empezar, es importante tener presente que la gestión del talento humano es el área, dentro de la organización, que se encarga de administrar el capital humano, por medio de funciones estructuradas que se aplican desde el proceso de reclutamiento, hasta el proceso de evaluación, capacitación y mejoramiento del mismo.
    
    p.md-4 Las personas son recursos fundamentales para el éxito organizacional. Conozcamos cómo comenzó y se desarrolló este proceso (Chiavenato I., 2017):

    .row.justify-content-around.align-items-center
      .col-lg-9
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-8.mb-4.mb-md-0(style="margin-top: 9px;")
              h5 Elton Mayo
              p A partir de la teoría de “Relaciones Humanas” de Elton Mayo, surge el concepto de administración de recursos humanos, un recurso productivo con actividades planeadas y controladas, según necesidades organizacionales. 
            .col-md-4.col-sm-7.mt-4
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder1.svg', alt='imagen ilustrativa')

          .row
            .col-md-4.col-sm-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder2.svg', alt='imagen ilustrativa')
                
            .col-md-8
              h5 Administración de personal
              p Posteriormente, surgen procesos de administración de personal con un área focalizada en el manejo del equipo humano. 
        
          .row
            .col-md-8.mb-4.mb-md-0
              h5 Retos
              p Retos tales como globalización, competitividad, incertidumbre, dinamismo, entre otros, impulsaron a las organizaciones a no percibir al personal como agentes pasivos y dependientes y empezar a administrarlos como personas activas, proactivas, creativas e inteligentes, con habilidades y competencias. 
          
            .col-md-4.col-sm-7
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder3.svg', alt='imagen ilustrativa')

          .row
            .col-md-4.col-sm-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder4.svg', alt='imagen ilustrativa')

            .col-md-8
              h5 Gestión de personal
              p El recurso humano se convirtió en activo organizacional; a partir de entonces, nace la gestión de personal que considera a las personas socios estratégicos y no como recursos, porque son diferentes entre sí, son elementos vivos y son socios de la organización.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10          
        p.ps-5.ms-5 Para concretar, el concepto la gestión del talento humano, según Chiavenato (2009):          
        .bloque-texto-f.pt-4.px-4.mb-4
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto “Es el conjunto de políticas y prácticas necesarias para dirigir los aspectos de los cargos gerenciales, relacionados con las personas o recursos, incluidos reclutamiento, selección, capacitación, recompensas y evaluación del desempeño”.

    
    p.mb-4 Además, para desarrollar un proceso de gestión del talento humano estructurado y organizado, es necesario considerar diversas fases o procesos a través de los cuales se establecen las acciones correspondientes. A continuación, se presentan algunas de estas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.carrusel2.p-4(style="background-color: #EAF086 !important")
        .row.justify-content-center.mb-3
          .bloque-texto-f2__avatar
            .bloque-texto-f2__avatar__img(style=" margin-top: -75px; border-style: none;")
              img(src='@/assets/curso/temas/tarjetas/avatar1.svg', alt='Texto que describa la imagen')
        
        h5.text-center.mb-4(style=" margin-top: -15px;") Fase o proceso.
        p.text-center.mb-4(style=" margin-top: -15px;") Análisis y descripción de cargos.
        br
        h5.text-center.mb-4(style=" margin-top: -15px;") Acción
        p.text-center.mb-4(style=" margin-top: -15px;") Diseño de cargos.

      .tarjeta.carrusel2.p-4(style="background-color: #EAF086 !important")
        .row.justify-content-center.mb-3
          .bloque-texto-f2__avatar
            .bloque-texto-f2__avatar__img(style=" margin-top: -75px; border-style: none")
              img(src='@/assets/curso/temas/tarjetas/avatar2.svg', alt='Texto que describa la imagen')
        
        h5.text-center.mb-4(style=" margin-top: -15px;") Fase o proceso.
        p.text-center.mb-4(style=" margin-top: -15px;") Reclutamiento y selección del personal.
        br
        h5.text-center.mb-4(style=" margin-top: -15px;") Acción
        p.text-center.mb-4(style=" margin-top: -15px;") Contratación de candidatos seleccionados.

      .tarjeta.carrusel2.p-4(style="background-color: #EAF086 !important")
        .row.justify-content-center.mb-3
          .bloque-texto-f2__avatar
            .bloque-texto-f2__avatar__img(style=" margin-top: -75px; border-style: none")
              img(src='@/assets/curso/temas/tarjetas/avatar3.svg', alt='Texto que describa la imagen')
        
        h5.text-center.mb-4(style=" margin-top: -15px;") Fase o proceso.
        p.text-center.mb-4(style=" margin-top: -15px;") Inducción a nuevos empleados.
        br
        h5.text-center.mb-4(style=" margin-top: 10px;") Acción
        p.text-center.mb-4(style=" margin-top: -15px;") Administración de cargos y salarios.
      
      .tarjeta.carrusel2.p-4(style="background-color: #EAF086 !important")
        .row.justify-content-center.mb-3
          .bloque-texto-f2__avatar
            .bloque-texto-f2__avatar__img(style=" margin-top: -75px; border-style: none")
              img(src='@/assets/curso/temas/tarjetas/avatar4.svg', alt='Texto que describa la imagen')
        
        h5.text-center.mb-4(style=" margin-top: -15px;") Fase o proceso.
        p.text-center.mb-4(style=" margin-top: -15px;") Incentivos salariales y beneficios sociales.
        br
        h5.text-center.mb-4(style=" margin-top: -15px;") Acción
        p.text-center.mb-4(style=" margin-top: -15px;") Comunicación y desarrollo personal.
      
      .tarjeta.carrusel2.p-4(style="background-color: #EAF086 !important")
        .row.justify-content-center.mb-3
          .bloque-texto-f2__avatar
            .bloque-texto-f2__avatar__img(style=" margin-top: -75px; border-style: none")
              img(src='@/assets/curso/temas/tarjetas/avatar5.svg', alt='Texto que describa la imagen')
        
        h5.text-center.mb-4(style=" margin-top: -15px;") Fase o proceso.
        p.text-center.mb-4(style=" margin-top: -15px;") Evaluación del desempeño
        br
        h5.text-center.mb-4(style=" margin-top: 10px;") Acción
        p.text-center.mb-4(style=" margin-top: -15px;") Capacitación y planes de mejoramiento.
      
      .tarjeta.carrusel2.p-4(style="background-color: #EAF086 !important")
        .row.justify-content-center.mb-3
          .bloque-texto-f2__avatar
            .bloque-texto-f2__avatar__img(style=" margin-top: -75px; border-style: none")
              img(src='@/assets/curso/temas/tarjetas/avatar6.svg', alt='Texto que describa la imagen')
        
        h5.text-center.mb-4(style=" margin-top: -15px;") Fase o proceso.
        p.text-center.mb-4(style=" margin-top: -15px;") Desarrollo organizacional.
        br
        h5.text-center.mb-4(style=" margin-top: -15px;") Acción
        p.text-center.mb-4(style=" margin-top: -15px;") Higiene, seguridad, bienestar y calidad de vida - relaciones sindicales.

    p.md-5.mt-4 A su vez, la gestión del talento humano posee unas características dentro de las organizaciones. Lo invitamos a conocer cada una de ellas: 
    
    SlyderF.mb-5(columnas="col-lg-12 col-xl-4")
      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/curso/temas/tarjetas/avatar7.svg' alt='dibujo relacionado')
        p.text-center Se compromete con el cuidado de la salud física del personal a cargo.  

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/avatar8.svg' alt='dibujo relacionado')    
        p.text-center Se preocupa por la salud mental de empleados, con psicólogos que tratan temas como el manejo de ansiedad, el estrés y la familia.  

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar9.svg' alt='dibujo relacionado')
        p.text-center Afianza la comunicación con empleados, para evitar inconsistencias en información y apoya el intercambio de opiniones.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar10.svg' alt='dibujo relacionado')
        p.text-center Anima a empleados a seguir su proceso de formación, promueve la capacitación y el desarrollo de empleados.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar11.svg' alt='dibujo relacionado')
        p.text-center Gestiona la productividad con recomendaciones para trabajar eficientemente, acondiciona espacios y recursos tecnológicos.  

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/curso/temas/tarjetas/avatar12.svg' alt='dibujo relacionado')
        p.text-center Crea nuevos esquemas de trabajo, trabajos en grupo, fortalece espacios para empleados, fomenta reuniones virtuales, etc.
      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/curso/temas/tarjetas/avatar13.svg' alt='dibujo relacionado')
        p.text-center Implementa actividades de bienestar (actividades online, clases variadas, rutinas de ejercicios, obras de teatro, eventos públicos, etc.).
      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/curso/temas/tarjetas/avatar14.svg' alt='dibujo relacionado')
        p.text-center Se asegura que los empleados se encuentren cómodos. 
    
    p Por otra parte, la gestión del talento humano también mantiene una serie de objetivos.
    p.mb-4 Estos objetivos son:

    .row.justify-content-center.mb-4
      .col-md-3.col-lg-4(style="margin-top: 20px; ")
        img(src='@/assets/curso/temas/texto_destacado/img3.png', alt='imagen relacionada') 
      .col-md-8.col-lg-8
        TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Atraer<br>empleados")
              .row
                .col-md-8.p-4.color-fondo
                  p Permite captar candidatos calificados o que puedan adquirir las competencias necesarias, según el cargo a desempeñar y los objetivos empresariales.
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Retener y motivar <br>empleados")
              .row
                .col-md-12.p-4.color-fondo
                  p Brinda colaboradores calificados, satisfechos y fieles a la empresa, identificados y comprometidos con la posibilidad de crecer profesionalmente.   
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Evaluar el<br>desempeño de <br>los empleados")
              .row
                .col-md-12.p-4.color-fondo
                  p Permite tomar medidas para identificar su contribución e importancia para la empresa.
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Mejorar la<br> productividad")
              .row
                .col-md-12.p-4.color-fondo
                  p Con entrenamiento y motivación, se mejora la competitividad y la empresa puede alcanzar los objetivos planteados.
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Generar buen<br>clima laboral")
              .row
                .col-md-12.p-4.color-fondo
                  p Se establecen políticas que generen buena conducta entre los empleados, se preocupan por su bienestar, mejoran el lugar y horarios de trabajo, reconocen y valoran los logros, fomentan actividades recreativas fuera del trabajo, entre otros.
    
    p.mb-4 Y, finalmente, se respalda todo el proceso en un el marco legal, el cual se expone en orden cronológico:

    .row.justify-content-center.mb-4
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Código Sustantivo del Trabajo")
            .col-md-12.mb-4.mb-md-0
              p Decreto Ley 2663 de 1950 como compendio de normas, ordena las disposiciones entre relaciones laborales y leyes aplicadas al proceso de gestión del talento humano.
        
          .row(titulo="Sistema de Seguridad Social Integral")
            .col-md-12.mb-4.mb-md-0
              p Ley 100 de 1993, garantiza derechos de comunidad y persona a tener calidad de vida acorde con la dignidad humana. Incluye sistema general de pensiones, de salud, de riesgos profesionales y servicios sociales complementarios. 

          .row(titulo="Código General Disciplinario")
            .col-md-12.mb-4.mb-md-0
              p Ley 1952 de 2019, mecanismo de intervención en procesos disciplinarios, sobre todo, servidores públicos. Incluye a víctimas de acoso laboral como sujetos procesales.

          .row(titulo="Trabajo para adultos mayores sin pensión")
            .col-md-12.mb-4.mb-md-0
              p Ley 2040 del 2020, otorga beneficios tributarios a empleadores, deducción en el impuesto sobre la renta de 120 % del valor de salarios y prestaciones sociales, al vincular, al menos durante un año, a un adulto mayor que no reciba pensión por vejez, familiar o de sobrevivencia.
          
          .row(titulo="Ley de Pasantías")
            .col-md-12.mb-4.mb-md-0
              p Ley 2043 del 2020, incentiva contratar jóvenes recién graduados de carrera profesional, técnica o tecnológica y pasantías, judicaturas o prácticas formativas que son obligatoriamente reconocidas como experiencia laboral.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img4.png', alt='imagen relacionada')  

          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
