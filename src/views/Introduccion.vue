<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde se estudiará el talento humano como el proceso para administrar las competencias y habilidades de las personas dentro de una organización, permitiéndoles crecer dentro de la misma y generar valor agregado a su trabajo, además de contribuir con el fortalecimiento y crecimiento de la institución.
            br
            br
            p Toda empresa debe identificar y potenciar el talento de sus colaboradores para construir, con un ambiente laboral fuerte y competente, pero cabe resaltar que talento humano no se refiere a características fuera de lo común, sino a rasgos humanos. Por eso, el talento humano de una organización es muy importante porque, a partir de cada individuo, se construye la empresa y administra el talento humano adecuadamente, lo que es indispensable para el éxito organizacional.

    p.mb-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
