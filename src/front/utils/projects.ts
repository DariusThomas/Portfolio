import icons from "./icons"

const projects: Array<IProject> = [
    {
       id: 1,
        title: "Full-Stack Blog",
        img: icons.blogs,
        description: "The purpose of this project was to integrate a React front-end, Node.js back-end and MySQL Data Base, into a single application. The app needed to utilize React Router, React Hooks, authorization/registration methods, asynchronous CRUD functionality, and a 3rd party API, which all had to be accesible from a front-end interface.",
        appLink: "https://protected-gorge-79324.herokuapp.com/",
        codeLink: "https://github.com/DariusThomas/Full-Stack-Blogs",
        technologiesIcon:[icons.react,icons.bootstrap,icons.ts,icons.node,icons.mysql],
        technologies: ["React", "Bootstrap","Typrescript","Node.JS","MySQL"]
    }, {
       id: 2,
        title: "Timed Exam",
        img: icons.finalExam,
        description: "This was the Final exam for the coding bootcamp I attended. The purpose was to develop a functioning Full-stack application, that utilized a front end, backend, and data base, all within 5 hours.",
        appLink: "https://whispering-scrubland-49224.herokuapp.com/",
        codeLink: "https://github.com/DariusThomas/book-store-attempt-2",
        technologiesIcon:[icons.react,icons.bootstrap,icons.ts,icons.node,icons.mysql],
        technologies: ["React", "Bootstrap","Typrescript","Node.JS","MySQL"]
    }, {
       id: 3,
        title: "KeyBoard Game",
        img: icons.typing,
        description: "This app was written entirely using JQuery. Its a keyboard typing game where the user trys to complete typing each sentence as quickly and accurately as possible. The app relys on keypress event listeners which relay specific keycode characters to the inteface and compare them to the currently presented character on the display.",
        appLink: "https://salty-mountain-10279.herokuapp.com/",
        codeLink: "https://github.com/DariusThomas/Just-My-Type",
        technologiesIcon:[icons.jquery,icons.js,icons.css3,icons.bootstrap],
        technologies: ["JQuery","Javascript","CSS", "Bootstrap"]
    }, {
       id: 4,
        title: "Portfolio",
        img: icons.portfolio,
        description: "This Portfolio is my first stand alone project designed and built, after completion of the Covalnce Code Academy. This portfolio was fun to build and gave me a chance to think more creativley, focusing a bit more on design. After complteing this portfolio, I have an even greater respect for ux/ui designers.",
        appLink: "https://darius-dev-portfolio.herokuapp.com/",
        codeLink: "https://github.com/DariusThomas/Portfolio",
        technologiesIcon:[icons.react,icons.ts,icons.jquery,icons.sass,icons.node],
        technologies: [ "React","Typescript","JQuery","Sass","Node.JS"]
    }, {
       id: 5,
        title: "Stop Watch",
        img: icons.timer,
        description: "This is a JQuery Stop Watch that was desigened and built on codepen.io. It has a functioning start stop and reset button. The difficult part of this code was implementing the design. Other than that, the logic is straight forward.",
        appLink: "https://codepen.io/DariusT/full/qzZbXG",
        codeLink: "https://gist.github.com/DariusThomas/254029499350d19a856fcf239a082aff",
        technologiesIcon:[icons.html5,icons.css3,icons.jquery],
        technologies: [ "HTML","CSS","JQuery"]
    }, {
       id: 6,
        title: "Image Slider",
        img: icons.slider,
        description: "This is another Codepen.io project. The pen displays a single image with an interactive click and drag divider. The project gives the illusion of a single image switching between satuartion and grayscale as the divider passes over it. The project was very fun to build . It also gave a chance to touch up on my jquery knowlede and script writting logic.",
        appLink: "https://codepen.io/DariusT/full/pmMmKV",
        codeLink: "https://gist.github.com/DariusThomas/388963ec942c1636de28be7c5ee5d796",
        technologiesIcon:[icons.html5,icons.css3,icons.jquery],
        technologies: [ "HTML","CSS","JQuery"]
    }
]

interface IProject {
   id: number,
    img: string,
    title: string,
    description: string,
    appLink: string,
    codeLink: string,
    technologiesIcon:Array<string>,
    technologies: Array<string>
}

export {
    projects,
    IProject
}