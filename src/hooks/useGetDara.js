const api = {
  data: {
    avatar:
      "https://res.cloudinary.com/ddzlqebet/image/upload/v1707776594/pablo-tedesco-profile.jpg",
    name: "Pablo Tedesco",
    profession: "Software Developer",
    bio: "Soy un programador al que le encantan los nuevos desafíos. Siempre estoy aprendiendo algo nuevo e intentando mejorando día a día.",
    address: "Montevideo, Uruguay.",
    social: {
      0: {
        name: "facebook",
        url: "https://www.facebook.com/pablo.tedesco.583/",
      },
      1: {
        name: "twitter",
        url: "https://twitter.com/TedescoPablo?lang=es",
      },
      2: {
        name: "github",
        url: "https://github.com/tedesco8",
      },
      3: {
        name: "linkedin",
        url: "https://www.linkedin.com/in/pablo-tedesco/",
      },
    },
    referencia: {
      0: {
        nombre: "Leonardo Ruggieri",
        cargo: "Technical Lead",
        empresa: "VU Inc.",
        tel: "+5491161008745",
      },
      1: {
        nombre: "Ronald Petrussa",
        cargo: "Scrum Master",
        empresa: "VU Inc.",
        tel: "+5493513077062",
      },
      2: {
        nombre: "Diego Campiño",
        cargo: "Founder",
        empresa: "Espacio Natural",
        tel: "+59899935252",
      },
      3: {
        nombre: "Joaquin Vigna",
        cargo: "Co-founder",
        empresa: "Broken Rubik",
        tel: "+59892522502",
      },
      4: {
        nombre: "Nicolas Lutter",
        cargo: "Technical Lead",
        empresa: "Middlesoft",
        tel: "+59896408160",
      },
      5: {
        nombre: "Leticia De Los Santos",
        cargo: "Systems Analyst",
        empresa: "Lecasabe",
        tel: "+59899704354",
      },
    },
    experience: {
      0: {
        jobTitle: "Software Developer -",
        company: "Scanntech ",
        startDate: "2024",
        endDate: "Present",
      },
      1: {
        jobTitle: "Content Creator -",
        company: "Lecasabe ",
        startDate: "2024",
        endDate: "Present",
      },
      2: {
        jobTitle: "Programming Tutor -",
        company: "Superprof ",
        startDate: "2023",
        endDate: "Present",
      },
      3: {
        jobTitle: "Software Engineer -",
        company: "TedescoDev ",
        startDate: "2018",
        endDate: "Present",
      },
      4: {
        jobTitle: "Software Developer -",
        company: "VU Inc. ",
        startDate: "2021",
        endDate: "2024",
      },
      5: {
        jobTitle: "Frontend Developer -",
        company: "Broken Rubik ",
        startDate: "2019",
        endDate: "2020",
      },
      6: {
        jobTitle: "Backend Developer -",
        company: "Middlesoft ",
        startDate: "2019",
        endDate: "2019",
      },
      7: {
        jobTitle: "Community Manager -",
        company: "SU Noticias ",
        startDate: "2015",
        endDate: "2019",
      },
    },
  },
  education: {
    0: {
      degree: "Computer Engineer -",
      institution: "School of Engineering / Udelar ",
      startDate: "2021",
      endDate: "Present",
      description: "Bachelor of Engineering. ",
    },
    1: {
      degree: "IT Analyst -",
      institution: "CUTI/INEFOP ",
      startDate: "2019",
      endDate: "2021",
      description: "Community colleges",
    },
    2: {
      degree: "Bachelor of Technology -",
      institution: "Higher Institute Brazo Oriental  ",
      startDate: "2013",
      endDate: "2018",
      description: "Bachelor of Science",
    },
    3: {
      degree: "Basic Cycle -",
      institution: "Institute 29 Alicia Goyena  ",
      startDate: "2001",
      endDate: "2004",
      description: "Junior colleges",
    },
  },
  certificate: {
    0: {
      name: "Information Technology Analyst -",
      institution: "CUTI/INEFOP ",
      date: "2021",
      description:
        "Second and final approved year of a government IT job training program sponsored by INEFOP and delivered by Cuti. ",
    },
    1: {
      name: "Bachelor of Technology in Computing-",
      institution: "Higher Institute Brazo Oriental ",
      date: "2021",
      description:
        "Bachelor's Degree in Computer Technology with emphasis on software development, database management, web design and support. ",
    },
    2: {
      name: "Programmer -",
      institution: "CUTI/INEFOP ",
      date: "2020",
      description:
        "First approved year of a government training program for IT employment sponsored by INEFOP and delivered by Cuti. ",
    },
    3: {
      name: "Big Data Consultant Jr -",
      institution: "Fundación Telefónica ",
      date: "2019",
      description:
        "As a Big Data Consultant Jr I know the analytical needs of business areas and can help solve them, as well as discover new opportunities based on digital transformation and data orientation. ",
    },

    4: {
      name: "PC and Network Repair Technician -",
      institution: "Círculo Informático ",
      date: "2011",
      description: "Intensive course in PC repair and computer networks. ",
    },
    5: {
      name: "First Aid -",
      institution: "Cruz Roja ",
      date: "2007",
      description: "Theoretical/practical training in first aid. ",
    },
  },
  skills: [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node",
    "Express",
    "Nest",
    "React",
    "Next",
    "Vue",
    "Nuxt",
    "Angular",
    "Svelte",
    "SvelteKit",
    "Java",
    "SpringBoot",
    "Docker",
    "Git",
    "Azure DevOps",
    "Capacitor",
    "Ionic",
    "Electron",
    "Jest",
    "Testing Library",
    "Vitest",
    "Playwright",
    "Puppeter",
    "Webpack",
    "Vite",
    "Babel",
    "Rollup",
  ],
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
