export default {
  global: {
    componenteFormativo: 'Generalidades de la gestión del talento humano',
    descripcionCurso:
      'La gestión del talento humano se encarga de procesos para atraer, incorporar y retener colaboradores en las empresas. Con este enfoque, una organización busca emplear y retener personal calificado y valioso, debido a que los procesos de reclutamiento, selección, desarrollo y capacitación, son costosos. Para toda empresa, es fundamental ubicar al individuo en un cargo, donde sus habilidades y conocimientos se utilicen de forma óptima.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión del talento humano',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cultura organizacional',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación de las necesidades del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis de necesidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Instrumentos de recolección de información',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Descripción de cargos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Perfil laboral',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Funciones',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Reclutamiento y selección',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Contratación',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión del talento humano',
      referencia:
        'lepatru007. (2018).<em> Gestión del Talento Humano: Conceptos </em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/yZ7-ckjDE1I',
    },
    {
      tema: 'Estructura organizacional',
      referencia:
        'Zona Administrativa. (s.f.).<em> Estructura y Diseño Organizacional </em>(video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=V9PMrldu2Jc ',
    },
    {
      tema: 'Identificación de las necesidades del talento humano',
      referencia:
        'Código Sustantivo del Trabajo. Decreto Ley 3743 de 1950. (Colombia).  ',
      tipo: 'Documento',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html ',
    },
    {
      tema: 'Identificación de las necesidades del talento humano',
      referencia:
        'Engelmann, M. (2021). <em>Proceso de selección cómo es y cómo se hace – Explicación selección de personal </em> (video). YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QAIIOn5YqAY ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de puesto',
      significado:
        'análisis variable, característica y elementos de un puesto de trabajo (requerimientos de conocimiento, aptitudinales y físicos).',
    },
    {
      termino: 'Cargo',
      significado:
        'conjunto de actividades relacionadas o agrupadas en un mismo campo de acción.',
    },
    {
      termino: 'Clasificación de puestos:',
      significado:
        'son técnicas para analizar la naturaleza de los puestos para agruparlos en cargos, clases y estratos ocupacionales.',
    },
    {
      termino: 'Coordinación',
      significado:
        'es el proceso de analizar diferentes actividades y combinarlas de tal manera, que se ejecuten en un momento específico.',
    },
    {
      termino: 'Delegación',
      significado:
        'acto de encomendar o confiar actividades, responsabilidades a los subordinados.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'indicador que indica menos o menor costo en el desarrollo de una actividad o proyecto.',
    },
    {
      termino: 'Escala salarial',
      significado:
        'ubicación jerárquica de la valoración económica a los empleados, que se define según el nivel del cargo, formación y responsabilidades.',
    },
    {
      termino: 'Especialización del trabajo',
      significado:
        'acción que permite a los empleados especializarse en una función o tareas, a modo de ser más eficientes y eficaces en su desarrollo.',
    },
    {
      termino: 'Experiencia',
      significado:
        'identificación del nivel de acción o práctica que ha tenido el aspirante frente en determinada área del conocimiento. ',
    },
    {
      termino: 'Formación académica',
      significado:
        'hace referencia a la capacitación que el aspirante haya realizado a nivel de postgrado, profesional, técnica, tecnológica o auxiliar.',
    },
    {
      termino: 'Pruebas de selección',
      significado:
        'actividades que se deben aplicar durante el proceso de selección, permiten filtran y seleccionar la mejor opción.',
    },
    {
      termino: 'Supervisión',
      significado:
        'acción de vigilar, monitorear y ayudar al cumplimiento de la tareas o actividades asignadas a un grupo de trabajo. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal Torres, C. A. y Sierra Arango, H. D. (2017). <em>Proceso Administrativo</em>. Editorial Pearson.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6926&pg=196',
    },
    {
      referencia:
        'Blandez Ricalde, M. D. G. y Blandez Ricalde, M. (2014). <em>Proceso administrativo.</em> Editorial Digital UNID. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/41174?page=61 ',
    },
    {
      referencia:
        'Boada, R. (2015). <em> Identificando el talento humano.</em> McGraw-Hill Interamericana. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7452 ',
    },
    {
      referencia:
        'Bouzas Ortiz, J. A. y Reyes Gaytán, G. (2019). <em>Gestión del talento humano. </em>IURE Editores. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/130372?page=8',
    },
    {
      referencia:
        'Chivaneto, A. (2009). <em>Gestion del talento humano</em> (3ª. Ed.)  ',
      link:
        'http://104.207.147.154:8080/bitstream/54000/1143/1/Chiavenato-Talento%20humano%203ra%20ed.pdf   ',
    },
    {
      referencia:
        'Chiavenato, I. (2017). <em>Administración del recurso humano.</em> McGraw-Hill Interamericana. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5207&pg=389',
    },
    {
      referencia:
        'Chiavenato, I. (2020). <em> Gestión del talento humano </em>. McGraw-Hill Interamericana. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9350  ',
    },
    {
      referencia:
        'Cuesta Santos, A. (2010).<em> Gestión del talento humano y el conocimiento.</em> Ecoe Ediciones. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=110 ',
    },
    {
      referencia:
        'Louffat, E. (2017).<em> Reclutando y seleccionando al personal.</em> Pearson Educación. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10379 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
