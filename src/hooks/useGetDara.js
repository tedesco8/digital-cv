import { useState, useEffect } from 'react';
const api = {
        "data": {
        "avatar": "https://avatars1.githubusercontent.com/u/45188608?s=460&v=4",
        "name": "Pablo Tedesco",
        "profession": "Fullstack Developer",
        "bio": "Soy un programador al que le encantan los nuevos desafios. Siempre estoy aprendiendo algo nuevo y mejorando día a día",
        "address": "Montevideo, Uruguay.",
        "social": {
            "0": {
            "name": "facebook",
            "url": "https://www.facebook.com/profile.php?id=1341313958"
            },
            "1": {
            "name": "twitter",
            "url": "https://twitter.com/TedescoPablo?lang=es"
            },
            "2": {
            "name": "github",
            "url": "https://github.com/tedesco8"
            },
            "3": {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/pablo-tedesco/"
            }
        },
        "experience": {
            "0": {
            "jobTitle": "Fullstack Developer",
            "company": "TedescoDev",
            "startDate": "Jan 2018",
            "endDate": "Present",
            "jobDescription": "Diseño y desarrollo pequeñas aplicaciones de escritorio y web orientado a pequeñas empresas y particulares"
            },
            "1": {
            "jobTitle": "Community Manager",
            "company": "Tedesco Design & Advertising",
            "startDate": "Jul 2015",
            "endDate": "Present",
            "jobDescription": "Encargado de gestionar redes sociales, Crear y gestionar perfiles. Hacer crecer la comunidad. Prestar especial atención a tendencias de interés social. Crear y distribuir contenido"
            }
        },
            "2": {
            "jobTitle": "Junior Developer",
            "company": "BLACKSOFT",
            "startDate": "Jul 2017",
            "endDate": "Aug 2018",
            "jobDescription": "Me desempeñaba realizando tareas de programación con VB.NET y Java, colaborando con el maquetado de páginas web."
            }
        },
        "education": {
            "0": {
            "degree": "System Engineer",
            "institution": "Facultad de Ingeniería",
            "startDate": "Mar 2019",
            "endDate": "Present",
            "description": "Cursando actualmente el primer año de cuatro para la carrera de Ingenieria en Sistemas"
            },
            "1": {
            "degree": "Technological Bachelor",
            "institution": "Instituto Superior Brazo Oriental",
            "startDate": "Mar 2013",
            "endDate": "Oct 2018",
            "description": "Egresado del bachiller tecnológico EMT, cursado en ISBO"
            }
        },
        "certificate": {
            "0": {
            "name": "Introduction to web development",
            "institution": "Google",
            "date": "Feb 2019",
            "description": "Curso introductorio al desarrollo web con HTML5 y CSS3 "
            },
            "1": {
            "name": "Basic Programming",
            "institution": "Platzi",
            "date": "Feb 2019",
            "description": "Introducción a la programación básica con JavaScript"
            },
            "2": {
            "name": "Introduction to Machine Learning",
            "institution": "Miríadax",
            "date": "Feb 2019",
            "description": "Curso introductorio al Aprendizaje Automático"
            },
            "3": {
            "name": "Modern JavaScript",
            "institution": "Udemy",
            "date": "Present",
            "description": "Aprendizaje de JavaScript bajo los estándares de EcmaScript 6"
            },
            "4": {
            "name": "BigData Bussines",
            "institution": "Universidad Católica",
            "date": "Present",
            "description": "Curso realizado con el fin de brindar soluciones tecnológicas a empresas a través de la disciplina Big Data Bussines"
            }
        },
        "skills": {
            "0": {
            "name": "HTML5",
            "percentage": "75%"
            },
            "1": {
            "name": "CSS",
            "percentage": "30%"
            },
            "2": {
            "name": "JavaScript",
            "percentage": "60%"
            },
            "3": {
            "name": "React",
            "percentage": "50%"
            },
            "4": {
            "name": "Node",
            "percentage": "55%"
            },
            "5": {
            "name": "Java",
            "percentage": "30%"
            },
            "6": {
            "name": "VB.NET",
            "percentage": "80%"
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