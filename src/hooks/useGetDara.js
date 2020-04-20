import { useState, useEffect } from "react";
const api = {
  data: {
    avatar: "https://avatars1.githubusercontent.com/u/45188608?s=460&v=4",
    name: "Pablo Tedesco",
    profession: "Fullstack Developer",
    bio:
      "Soy un programador al que le encantan los nuevos desafios. Siempre estoy aprendiendo algo nuevo y mejorando día a día",
    address: "Montevideo, Uruguay.",
    social: {
      "0": {
        name: "facebook",
        url: "https://www.facebook.com/profile.php?id=1341313958"
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
        nombre: "Nicolas Lutter",
        cargo: "Líder Técnico",
        empresa: "Middlesoft",
        tel: "096408160"
      },
      "1": {
        nombre: "Fernanda Py Silva",
        cargo: "HR Manager",
        empresa: "Middlesoft",
        tel: "098250644"
      },
      "2": {
        nombre: "Leticia De Los Santos",
        cargo: "Analista en Sistemas",
        empresa: "BLACKSOFT",
        tel: "099704354"
      },
      "3": {
        nombre: "Juan Damian Pajares",
        cargo: "Consultor TIC",
        empresa: "BITNET",
        tel: "098476411"
      }
    },
    experience: {
      "0": {
        jobTitle: "Fullstack Developer Jr -",
        company: "TedescoDev ",
        startDate: "2018",
        endDate: "Present",
        jobDescription:
          "Diseño y desarrollo pequeñas aplicaciones de escritorio y web para pequeñas empresas y particulares. También realizo trabajos puntuales en plataformas freelance como Workana."
      },
      "1": {
        jobTitle: "Fullstack Developer Jr -",
        company: "Middlesoft ",
        startDate: "2019",
        endDate: "2019",
        jobDescription:
          "Desarrollo de aplicaciones ASP.NET bajo arquitecturas MVC, realizando tareas de frontend y backend con manipulación de base de datos SQL Server."
      },
      "2": {
        jobTitle: "Community Manager -",
        company: "Tedesco Design & Advertising ",
        startDate: "2015",
        endDate: "2019",
        jobDescription:
          "Encargado de gestionar redes sociales, Crear y gestionar perfiles. Hacer crecer la comunidad. Prestar especial atención a tendencias de interés social. Crear y distribuir contenido."
      },
      "3": {
        jobTitle: "Junior Developer -",
        company: "BLACKSOFT ",
        startDate: "2017",
        endDate: "2018",
        jobDescription:
          "Me desempeñaba realizando tareas de programación con VB.NET y Java, colaborando con el maquetado de páginas web."
      }
    },
  },
  education: {
    "0": {
      degree: "Ingeniería en Computación -",
      institution: "Udelar ",
      startDate: "2020",
      endDate: "Presente",
      description:
        "La formación de﻿l In﻿geniero en Computación apunta a una cobertura amplia y coherente en la planificación, desarrollo, manteni﻿﻿miento y aplicación de sistemas computarizados, que unida a la experiencia adquirida, se proyectará en un profesional competente."
    },
    "1": {
      degree: "Analista Programador -",
      institution: "Cuti (Cámara Uruguaya de Tecnologías de la Información) ",
      startDate: "2019",
      endDate: "Presente",
      description: "b_IT es un programa de formación 100% online en Tecnologías de la Información de 2 años de duración."
    },
    "2": {
      degree: "Bachiller Tecnológico -",
      institution: "Instituto Superior Brazo Oriental  ",
      startDate: "2013",
      endDate: "2019",
      description: "Egresado del bachiller tecnológico CEPT-UTU plan EMT, cursado en ISBO"
    }
  },
  certificate: {
    "9": {
      name: "Introducción al Desarollo Web -",
      institution: "Google ",
      date: "2019",
      description: "Curso introductorio al desarrollo web con HTML5 y CSS3 "
    },
    "8": {
      name: "Programación Básica -",
      institution: "Platzi ",
      date: "2019",
      description: "Introducción a la programación básica con JavaScript"
    },
    "7": {
      name: "Introducción a Machine Learning -",
      institution: "Miríadax ",
      date: "2019",
      description: "Curso introductorio al Aprendizaje Automático"
    },
    "6": {
      name: "Modern JavaScript (ES6 Y ES7) -",
      institution: "Udemy ",
      date: "2019",
      description:
        "Aprendizaje de JavaScript bajo los estándares de EcmaScript 6 y 7"
    },
    "5": {
      name: "BigData Bussines -",
      institution: "Fundación Telefónica ",
      date: "2019",
      description:
        "Curso realizado con el fin de brindar soluciones tecnológicas a empresas a través de la disciplina Big Data Bussines"
    },
    "4": {
      name: "Máster en SQL Server -",
      institution: "Udemy ",
      date: "2019",
      description:
        "Curso realizado con el fin de dominar y gestionar una de los motores de bd más potentes del mercado"
    },
    "3": {
      name: "Design Thinking -",
      institution: "Edx ",
      date: "2019",
      description:
        "Curso realizado para adoptar el pensamiento de diseño, con el fin de poder crear soluciones innovadoras."
    },
    "2": {
      name: "Python 3 a Django -",
      institution: "Udemy ",
      date: "2019",
      description:
        "Curso realizado para aprender las nociones básicas del este lenguaje de programación"
    },
    "1": {
      name: "Introducción al Aprendizaje Automático con Python -",
      institution: "Udemy ",
      date: "2019",
      description:
        "Curso realizado para aprender los conceptos básicos de Machine Learning aplicado con Python"
    },
    "0": {
      name: "RestFul Api con Python y Django Rest Framework -",
      institution: "Udemy ",
      date: "2020",
      description:
        "Curso realizado para aprender a crear servicios Rest utilizando Python"
    }
  },
  skills: {
    "0": {
      name: "HTML5",
      percentage: "70%"
    },
    "1": {
      name: "CSS",
      percentage: "30%"
    },
    "2": {
      name: "JavaScript",
      percentage: "50%"
    },
    "3": {
      name: "React",
      percentage: "15%"
    },
    "4": {
      name: "Vue",
      percentage: "20%"
    },
    "5": {
      name: "Node",
      percentage: "30%"
    },
    "6": {
      name: "Java",
      percentage: "10%"
    },
    "7": {
      name: ".NET",
      percentage: "40%"
    },
    "8": {
      name: "Python",
      percentage: "20%"
    },
    "9": {
      name: "IA",
      percentage: "25%"
    },
    "10": {
      name: "Big Data",
      percentage: "20%"
    },
    "11": {
      name: "Blockchain",
      percentage: "15%"
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
