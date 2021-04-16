import { useState, useEffect } from "react";
const api = {
  data: {
    avatar: "https://avatars1.githubusercontent.com/u/45188608?s=460&v=4",
    name: "Pablo Tedesco",
    profession: "Fullstack Developer",
    bio:
      "Soy un programador al que le encantan los nuevos desafios. Siempre estoy aprendiendo algo nuevo e intentando mejorando día a día",
    address: "Montevideo, Uruguay.",
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
        nombre: "Nicolás Montossi",
        cargo: "CEO",
        empresa: "Teko",
        tel: "096906906"
      },
      "1": {
        nombre: "Diego Campiño",
        cargo: "Founder",
        empresa: "Espacio Natural",
        tel: "099935252"
      },
      "2": {
        nombre: "Joaquin Vigna",
        cargo: "Co-founder",
        empresa: "Broken Rubik",
        tel: "092522502"
      },
      "3": {
        nombre: "Nicolas Lutter",
        cargo: "Líder Técnico",
        empresa: "Middlesoft",
        tel: "096408160"
      },
      "4": {
        nombre: "Fernanda Py Silva",
        cargo: "HR Manager",
        empresa: "Middlesoft",
        tel: "098250644"
      },
      "5": {
        nombre: "Leticia De Los Santos",
        cargo: "Analista en Sistemas",
        empresa: "BLACKSOFT",
        tel: "099704354"
      },
      "6": {
        nombre: "Juan Damian Pajares",
        cargo: "Consultor TIC",
        empresa: "BITNET",
        tel: "098476411"
      },
      "7": {
        nombre: "Diego Travieso",
        cargo: "Productor",
        empresa: "Kubric Media",
        tel: "099341877"
      },
    },
    experience: {
      "0": {
        jobTitle: "Fullstack Developer -",
        company: "TedescoDev ",
        startDate: "2018",
        endDate: "Present",
        jobDescription:
          "Diseño y desarrollo de soluciones a problemas y lógicas empresariales, asegurando la correcta ejecución de los requisitos funcionales entre las etapas de diseño y desarrollo."
      },
      "1": {
        jobTitle: "Frontend Developer -",
        company: "Broken Rubik ",
        startDate: "2019",
        endDate: "2020",
        jobDescription:
          "Desarrollo de aplicaciones basadas en NetSuite con Backbone.js, jQuery, Handlebars, Bootstrap 3, SuiteScript. "
      },
      "2": {
        jobTitle: "Backend Developer -",
        company: "Middlesoft ",
        startDate: "2019",
        endDate: "2019",
        jobDescription:
          "Desarrollo de aplicaciones ASP.NET y .NET Core con bases de datos SQL Server. "
      },
      "3": {
        jobTitle: "Community Manager -",
        company: "SU Noticias ",
        startDate: "2015",
        endDate: "2019",
        jobDescription:
          "Encargado de gestionar las redes sociales, crear y distribuir contenido."
      },
      "4": {
        jobTitle: "Sales and customer service -",
        company: "Sole trader ",
        startDate: "2010",
        endDate: "2014",
        jobDescription:
          "Ventas, atención al cliente, administración, logística."
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
      endDate: "Presente",
      description: "b_IT es un programa de formación 100% online en Tecnologías de la Información de 2 años de duración."
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
      name: "Bachiller Tecnológico en Informática -",
      institution: "Instituto Superior Brazo Oriental ",
      date: "2021",
      description:
        "Bachiller Tecnológico en Informática con énfasis desarrollo de software, gestión de bases de datos, diseño web y soporte. "
    },
    "1": {
      name: "Programador -",
      institution: "INEFOP ",
      date: "2020",
      description:
        "Primer año aprobado de un programa de capacitación gubernamental para el empleo en TI patrocinado por INEFOP e impartido por Cuti. "
    },
    "2": {
      name: "Big Data Consultant Jr -",
      institution: "Fundación Telefónica ",
      date: "2019",
      description:
        "El Big Data Consultant conoce las necesidades analíticas de las áreas de negocio y ayuda a resolverlas, así como a descubrir nuevas oportunidades basadas en la transformación digital y orientación a los datos. "
    },
    "3": {
      name: "Árbitro Oficial -",
      institution: "Asociación Uruguaya de Fútbol ",
      date: "2016",
      description:
        "Curso oficial de AUF para árbitros de fútbol profesional. "
    },
    "4": {
      name: "Técnico en reparación PC y Redes -",
      institution: "Círculo Informático ",
      date: "2011",
      description:
        "Curso intensivo en reparación de pc y redes informáticas. "
    },
    "5": {
      name: "Salvamento Maritimo -",
      institution: "Cruz Roja ",
      date: "2007",
      description:
        "Capacitación téorica/física en salvamento marítimo. "
    },
    "6": {
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
      percentage: "50%"
    },
    "1": {
      name: "CSS",
      percentage: "30%"
    },
    "2": {
      name: "JavaScript",
      percentage: "60%"
    },
    "3": {
      name: "React",
      percentage: "5%"
    },
    "4": {
      name: "Vue",
      percentage: "50%"
    },
    "5": {
      name: "Angular",
      percentage: "5%"
    },
    "6": {
      name: "Node",
      percentage: "40%"
    },
    "7": {
      name: ".NET",
      percentage: "20%"
    },
    "8": {
      name: "Python",
      percentage: "10%"
    },
    "9": {
      name: "Java",
      percentage: "15%"
    },
    "10": {
      name: "Testing",
      percentage: "5%"
    },
    "11": {
      name: "Docker",
      percentage: "5%"
    },
    "12": {
      name: "Git",
      percentage: "50%"
    },
    "13": {
      name: "Trabajo en equipo",
      percentage: "90%"
    },
    "14": {
      name: "Autogestión",
      percentage: "90%"
    }
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
