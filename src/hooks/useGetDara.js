const api = {
  data: {
    avatar: "https://res.cloudinary.com/ddzlqebet/image/upload/v1707776594/pablo-tedesco-profile.jpg",
    name: "Pablo Tedesco",
    profession: "Software Developer",
    bio:
      "Soy un programador al que le encantan los nuevos desafíos. Siempre estoy aprendiendo algo nuevo e intentando mejorando día a día.",
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
        nombre: "Leonardo Ruggieri",
        cargo: "Technical Lead",
        empresa: "VU Inc.",
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
        cargo: "Project Manager",
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
        cargo: "Technical Lead",
        empresa: "Middlesoft",
        tel: "+59896408160"
      },
      "6": {
        nombre: "Leticia De Los Santos",
        cargo: "Systems Analyst",
        empresa: "Lecasabe",
        tel: "+59899704354"
      },
    },
    experience: {
      "0": {
        jobTitle: "Programming Teacher -",
        company: "Lecasabe ",
        startDate: "2024",
        endDate: "Present",
        jobDescription:
          "Trabajo como tutor y profesor de programación de software para LECASABE creando cursos, workshops y bootcamps online. En este rol trato de brindar mi experiencia personal con respecto a desarrollar software para empresas y los detalles técnicos y prácticos con respecto a los lenguajes Java, JavaScript, HTML y CSS incluyendo sus frameworks y librerías."
      },
      "1": {
        jobTitle: "Programming Tutor -",
        company: "Superprof ",
        startDate: "2023",
        endDate: "Present",
        jobDescription:
          "En mis tiempos libres brindo tutorías de programación en general, sobre todo a estudiantes y personas que se inician en este campo. Me gusta además de aprender, intentar transmitir lo que he aprendido y dar una mano a todo el que lo necesite siempre que este dentro de mis posibilidades. Me gusta saber que dejo algo de lo que he recibido y además, aprendo mucho de mis pupilos. Para mí es un win win."
      },
      "2": {
        jobTitle: "Software Engineer -",
        company: "TedescoDev ",
        startDate: "2018",
        endDate: "Present",
        jobDescription:
          "Trabajo como freelance en mis tiempos libres junto a un equipo de profesionales y en asociación con otros. Soy responsable de realizar análisis, diseño y programación de soluciones web a problemas y lógicas empresariales de diferentes sectores. También desempeño funciones de gestión de proyectos, analista, soporte de producto de cara al cliente y de scrum máster."
      },
      "3": {
        jobTitle: "Software Developer -",
        company: "VU Inc. ",
        startDate: "2021",
        endDate: "2024",
        jobDescription:
          "Me desempeño como desarrollador de aplicativos web en el equipo de Authentication Management y en colaboración con otros. Mi principal función es crear aplicaciones web e híbridas, mantenibles y escalables aplicando técnicas de arquitectura de software y de código limpio con Javascript, Typescript, React, Svelte, Ionic y Capacitor. Participo en el análisis, diseño y desarrollo de nuevas funcionalidades empleando Java y Spring Boot en un contexto de microservicios. "
      },
      "4": {
        jobTitle: "Frontend Developer -",
        company: "Broken Rubik ",
        startDate: "2019",
        endDate: "2020",
        jobDescription:
          "Mi segundo empleo en la industria de desarrollo de aplicaciones web. Las mismas estaban basadas en NetSuite con Backbone.js, jQuery, Handlebars, Bootstrap 3 y SuiteScript. Me costó más de lo que pensaba poder dar el salto de trabajar sin la ayuda y supervision de un mentor. De igual manera, conocí a grandes personas que me han aportado muchísimo a mi crecimiento profesional y personal. "
      },
      "5": {
        jobTitle: "Backend Developer -",
        company: "Middlesoft ",
        startDate: "2019",
        endDate: "2019",
        jobDescription:
          "Mi primer empleo como desarrollador de software en la industria. Trabaje en equipos que desarrollaban aplicaciones web en ASP.NET y .NET Core con bases de datos SQL Server. Si bien me costó, sabía que así iba a serlo y aprendí lo mas que pude. También me lleve conocer a grandes personas con las que a día de hoy mantengo contacto. Una banda genial! "
      },
      "6": {
        jobTitle: "Community Manager -",
        company: "SU Noticias ",
        startDate: "2015",
        endDate: "2019",
        jobDescription:
          "Encargado de gestionar las redes sociales, crear y distribuir contenido para medio de comunicación digital. También realizaba tareas de diseño, posicionamiento SEO, administrador de sistemas y copywriter."
      },
    },
  },
  education: {
    "0": {
      degree: "Computer Engineer -",
      institution: "School of Engineering / Udelar ",
      startDate: "2021",
      endDate: "Present",
      description: "Bachelor of Engineering. "
    },
    "1": {
      degree: "IT Analyst -",
      institution: "CUTI/INEFOP ",
      startDate: "2019",
      endDate: "2021",
      description: "Community colleges"
    },
    "2": {
      degree: "Bachelor of Technology -",
      institution: "Higher Institute Brazo Oriental  ",
      startDate: "2013",
      endDate: "2018",
      description: "Bachelor of Science"
    },
    "3": {
      degree: "Basic Cycle -",
      institution: "Institute 29 Alicia Goyena  ",
      startDate: "2001",
      endDate: "2004",
      description: "Junior colleges"
    }
  },
  certificate: {
    "0": {
      name: "Information Technology Analyst -",
      institution: "CUTI/INEFOP ",
      date: "2021",
      description:
        "Second and final approved year of a government IT job training program sponsored by INEFOP and delivered by Cuti. "
    },
    "1": {
      name: "Bachelor of Technology in Computing-",
      institution: "Higher Institute Brazo Oriental ",
      date: "2021",
      description:
        "Bachelor's Degree in Computer Technology with emphasis on software development, database management, web design and support. "
    },
    "2": {
      name: "Programmer -",
      institution: "CUTI/INEFOP ",
      date: "2020",
      description:
        "First approved year of a government training program for IT employment sponsored by INEFOP and delivered by Cuti. "
    },
    "3": {
      name: "Big Data Consultant Jr -",
      institution: "Fundación Telefónica ",
      date: "2019",
      description:
        "As a Big Data Consultant Jr I know the analytical needs of business areas and can help solve them, as well as discover new opportunities based on digital transformation and data orientation. "
    },

    "4": {
      name: "PC and Network Repair Technician -",
      institution: "Círculo Informático ",
      date: "2011",
      description:
        "Intensive course in PC repair and computer networks. "
    },
    "5": {
      name: "First Aid -",
      institution: "Cruz Roja ",
      date: "2007",
      description:
        "Theoretical/practical training in first aid. "
    }
  },
  skills: {
    "0": {
      name: "HTML5",
      percentage: "80%"
    },
    "1": {
      name: "CSS",
      percentage: "80%"
    },
    "2": {
      name: "JavaScript",
      percentage: "90%"
    },
    "3": {
      name: "TypeScript",
      percentage: "80%"
    },
    "4": {
      name: "Node",
      percentage: "80%"
    },
    "5": {
      name: "Express",
      percentage: "80%"
    },
    "6": {
      name: "Nest",
      percentage: "70%"
    },
    "7": {
      name: "React",
      percentage: "80%"
    },
    "8": {
      name: "Next",
      percentage: "80%"
    },
    "9": {
      name: "Vue",
      percentage: "80%"
    },
    "10": {
      name: "Nuxt",
      percentage: "80%"
    },
    "11": {
      name: "Svelte",
      percentage: "80%"
    },
    "12": {
      name: "SvelteKit",
      percentage: "75%"
    },
    "13": {
      name: "Java",
      percentage: "75%"
    },
    "14": {
      name: "SpringBoot",
      percentage: "80%"
    },
    "15": {
      name: "Docker",
      percentage: "70%"
    },
    "16": {
      name: "Git",
      percentage: "90%"
    },
    "17": {
      name: "Azure DevOps",
      percentage: "75%"
    },
    "18": {
      name: "Capacitor",
      percentage: "75%"
    },
    "19": {
      name: "Ionic",
      percentage: "75%"
    },
    "20": {
      name: "Electron",
      percentage: "75%"
    },
    "21": {
      name: "Jest",
      percentage: "75%"
    },
    "22": {
      name: "Testing Library",
      percentage: "75%"
    },
    "23": {
      name: "Vitest",
      percentage: "75%"
    },
    "24": {
      name: "Playwright",
      percentage: "75%"
    },
    "25": {
      name: "Puppeter",
      percentage: "75%"
    },
    "26": {
      name: "Webpack",
      percentage: "75%"
    },
    "27": {
      name: "Vite",
      percentage: "75%"
    },
    "28": {
      name: "Babel",
      percentage: "75%"
    },
    "29": {
      name: "Rollup",
      percentage: "75%"
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
