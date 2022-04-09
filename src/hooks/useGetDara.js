import { useState, useEffect } from "react";
const api = {
  data: {
    avatar: "https://avatars1.githubusercontent.com/u/45188608?s=460&v=4",
    name: "Pablo Tedesco",
    profession: "Ssr. Software Developer",
    bio:
      "Soy un programador al que le encantan los nuevos desafíos. Siempre estoy aprendiendo algo nuevo e intentando mejorando día a día.",
    address: "Montevideo, Uruguay.",
    contactPhone: "+59898751130.",
    contactEmail: "tedesco8@gmail.com",
    social: {
      "0": {
        name: "facebook",
        url: "https://www.facebook.com/pablo.tedesco.583/"
      },
      "1": {
        name: "twitter",
        url: "https://twitter.com/TedescoPablo?lang=es"
      },
      "2": {
        name: "github",
        url: "https://github.com/tedesco8"
      },
      "3": {
        name: "linkedin",
        url: "https://www.linkedin.com/in/pablo-tedesco/"
      }
    },
    referencia: {
      "0": {
        nombre: "Leonardo Ruggieri",
        cargo: "Líder Técnico",
        empresa: "VU Security",
        tel: "+5491161008745"
      },
      "1": {
        nombre: "Ronald Petrussa",
        cargo: "Scrum Master",
        empresa: "VU Security",
        tel: "+5493513077062"
      },
      "2": {
        nombre: "Pablo Straub",
        cargo: "Gerente de Proyectos",
        empresa: "VU Security",
        tel: "+56998277438"
      },
      "3": {
        nombre: "Diego Campiño",
        cargo: "Founder",
        empresa: "Espacio Natural",
        tel: "+59899935252"
      },
      "4": {
        nombre: "Joaquin Vigna",
        cargo: "Co-founder",
        empresa: "Broken Rubik",
        tel: "+59892522502"
      },
      "5": {
        nombre: "Nicolas Lutter",
        cargo: "Líder Técnico",
        empresa: "Middlesoft",
        tel: "+59896408160"
      },
      "6": {
        nombre: "Leticia De Los Santos",
        cargo: "Analista en Sistemas",
        empresa: "BLACKSOFT",
        tel: "+59899704354"
      },
    },
    experience: {
      "0": {
        jobTitle: "Ssr. Software Developer -",
        company: "VU Security ",
        startDate: "2021",
        endDate: "Present",
        jobDescription:
          "Me desempeño como desarrollador de aplicativos web con Spring Boot y React.js en el equipo de CIAM."
      },
      "1": {
        jobTitle: "Ssr. Software Developer -",
        company: "TedescoDev ",
        startDate: "2018",
        endDate: "Present",
        jobDescription:
          "Responsable de realizar análisis, diseño y programación de soluciones web a problemas y lógicas empresariales."
      },
      "2": {
        jobTitle: "Jr. Frontend Developer -",
        company: "Broken Rubik ",
        startDate: "2019",
        endDate: "2020",
        jobDescription:
          "Desarrollo de aplicaciones basadas en NetSuite con Backbone.js, jQuery, Handlebars, Bootstrap 3, SuiteScript. "
      },
      "3": {
        jobTitle: "Jr. Backend Developer -",
        company: "Middlesoft ",
        startDate: "2019",
        endDate: "2019",
        jobDescription:
          "Desarrollo de aplicaciones ASP.NET y .NET Core con bases de datos SQL Server. "
      },
      "4": {
        jobTitle: "Community Manager -",
        company: "SU Noticias ",
        startDate: "2015",
        endDate: "2019",
        jobDescription:
          "Encargado de gestionar las redes sociales, crear y distribuir contenido."
      },
      "5": {
        jobTitle: "Árbitro Oficial -",
        company: "Organización de Fútbol del Interior (OFI) ",
        startDate: "2016",
        endDate: "2019",
        jobDescription:
          "Árbitro oficial en partidos regionales de primera división."
      },
      "6": {
        jobTitle: "Árbitro Oficial -",
        company: "Asociación Uruguaya de Fútbol (AUF) ",
        startDate: "2014",
        endDate: "2016",
        jobDescription:
          "Árbitro oficial en partidos oficiales de categoría sub 17 y sub 15."
      },
      "7": {
        jobTitle: "Atención al cliente -",
        company: "Casa Chiquis ",
        startDate: "2010",
        endDate: "2014",
        jobDescription:
          "Ventas, atención al cliente, administración, logística."
      },
      "8": {
        jobTitle: "Socorrista Acuático -",
        company: "Seguriocio ",
        startDate: "2007",
        endDate: "2009",
        jobDescription:
          "Salvamento marítimo por temporadas en piscinas con superficie superior a 200 metros cuadrados."
      },
      "9": {
        jobTitle: "Árbitro Oficial -",
        company: "Federación Andaluza de Fútbol (RFEF) ",
        startDate: "2006",
        endDate: "2010",
        jobDescription:
          "Árbitro oficial en partidos regionales de primera división y juveniles."
      }
    },
  },
  education: {
    "0": {
      degree: "Ingeniero en Computación -",
      institution: "Facultad de Ingeniería / Udelar ",
      startDate: "2021",
      endDate: "Presente",
      description: "Educación Terciaria y Universitaria. "
    },
    "1": {
      degree: "Analista en TI -",
      institution: "Programa de Formación para el Empleo TI - CUTI/INEFOP ",
      startDate: "2019",
      endDate: "2021",
      description: "Programa de formación online en Tecnologías de la Información."
    },
    "2": {
      degree: "Bachiller Tecnológico -",
      institution: "Instituto Superior Brazo Oriental  ",
      startDate: "2013",
      endDate: "2018",
      description: "Educación Media Tecnológica"
    },
    "3": {
      degree: "Ciclo Básico -",
      institution: "Liceo 29 Alicia Goyena  ",
      startDate: "2001",
      endDate: "2004",
      description: "Ciclo Básico"
    }
  },
  certificate: {
    "0": {
      name: "Analista en Tecnologías de la Información -",
      institution: "Programa b_IT ",
      date: "2021",
      description:
        "Segundo y último año aprobado de un programa de capacitación gubernamental para el empleo en TI patrocinado por INEFOP e impartido por Cuti. "
    },
    "1": {
      name: "Bachiller Tecnológico en Informática -",
      institution: "Instituto Superior Brazo Oriental ",
      date: "2021",
      description:
        "Bachiller Tecnológico en Informática con énfasis desarrollo de software, gestión de bases de datos, diseño web y soporte. "
    },
    "2": {
      name: "Programador -",
      institution: "Programa b_IT ",
      date: "2020",
      description:
        "Primer año aprobado de un programa de capacitación gubernamental para el empleo en TI patrocinado por INEFOP e impartido por Cuti. "
    },
    "3": {
      name: "Big Data Consultant Jr -",
      institution: "Fundación Telefónica ",
      date: "2019",
      description:
        "El Big Data Consultant conoce las necesidades analíticas de las áreas de negocio y ayuda a resolverlas, así como a descubrir nuevas oportunidades basadas en la transformación digital y orientación a los datos. "
    },
    "4": {
      name: "Árbitro Oficial -",
      institution: "Asociación Uruguaya de Fútbol ",
      date: "2016",
      description:
        "Curso oficial de AUF para árbitros de fútbol profesional. "
    },
    "5": {
      name: "Técnico en reparación PC y Redes -",
      institution: "Círculo Informático ",
      date: "2011",
      description:
        "Curso intensivo en reparación de pc y redes informáticas. "
    },
    "6": {
      name: "Salvamento Maritimo -",
      institution: "Cruz Roja ",
      date: "2007",
      description:
        "Capacitación téorica/física en salvamento marítimo. "
    },
    "7": {
      name: "Primeros Auxilios -",
      institution: "Cruz Roja ",
      date: "2007",
      description:
        "Capacitación téorica/práctica en pirmeros auxilios. "
    },
  },
  skills: {
    "0": {
      name: "HTML5",
      percentage: "80%"
    },
    "1": {
      name: "CSS",
      percentage: "70%"
    },
    "2": {
      name: "JavaScript",
      percentage: "90%"
    },

    "3": {
      name: "Node",
      percentage: "70%"
    },
    "4": {
      name: "Vue",
      percentage: "70%"
    },
    "5": {
      name: "React",
      percentage: "80%"
    },
    "6": {
      name: "Java",
      percentage: "60%"
    },
    "7": {
      name: ".NET",
      percentage: "40%"
    },
    "8": {
      name: "Python",
      percentage: "30%"
    },
    "9": {
      name: "Docker",
      percentage: "50%"
    },
    "10": {
      name: "Git",
      percentage: "80%"
    },
    "11": {
      name: "Testing",
      percentage: "70%"
    },
  }
};

// const useGetData = () => {
//     const [mydata, setData] = useState([]);

//     useEffect(() => {
//         fetch(api)
//         .then(response => response.json())
//         .then(data => setData(data))
//     }, []);

//     return mydata;
// }

export default api;
