import pokedex from '../img/portImages/Pokedex.png';
import snapchatClone from '../img/portImages/snapchatClone.png';
import gridFs from '../img/portImages/GridFS.png';
import portfolioCover from '../img/portImages/portfolioCover.png';
import newsApp from '../img/portImages/newsApp.png';
import port5 from '../img/portImages/port5.jpg';
import port6 from '../img/portImages/port6.jpg';
import port7 from '../img/portImages/port7.jpg';

const portfolios = [
    {
        id: 1,
        category: ['React Js', 'Bootstrap 4'],
        link1: 'https://github.com/aditya278/pokedex-webapp-reactjs',
        link2: 'https://aditya278.github.io/pokedex-webapp-reactjs/#/',
        icon1: 'Github',
        icon2: 'App',
        image: pokedex,
        title: 'React Pokedex',
        description : "A Cool Pokedex created using ReactJs. Go Catch 'em all now."
    },
    {
        id: 2,
        category: ['React Js', 'Material-UI', 'Firebase', 'Redux'],
        link1: 'https://github.com/aditya278/react-snapchat-clone',
        link2: 'https://snapchat-clone-55089.web.app/',
        icon1: 'Github',
        icon2: 'App',
        image: snapchatClone,
        title: 'Snapchat Clone',
        description: "A clone of Snapchat (social media app), built with ReactJs, Firebase, Redux Toolkit and Material-UI. Deployed on Firebase."
    },
    {
        id: 3,
        category: ['MongoDB', 'Node Js', 'React Js', 'Express Js', 'Redux', 'Material-UI'],
        link1: 'https://github.com/aditya278/GridFS-Drive',
        link2: 'https://drive.iadityashukla.com',
        icon1: 'Github',
        icon2: 'App',
        image: gridFs,
        title: 'GridFS-Drive',
        description: "A Google Drive Clone for File Storage, made using Node.js as backend involving MongoDB GridFS technology for storage, and React with Material UI as frontend."
    },
    {
        id: 4,
        category: ['React Js', 'SCSS'],
        link1: 'https://github.com/aditya278/my-portfolio',
        link2: 'https://iadityashukla.com',
        icon1: 'Github',
        icon2: 'Website',
        image: portfolioCover,
        title: 'Web Developer Portfolio',
        description: 'My Web Development portfolio created using React JS and styled using SCSS.'
    },
    {
        id: 5,
        category: ['React Js', 'Context API', 'Bootstrap 4'],
        link1: 'https://github.com/aditya278/react-github-profiles',
        link2: 'https://aditya278.github.io/react-github-profiles/',
        icon1: 'Github',
        icon2: 'App',
        image: port5,
        title: 'React GitHub Profiles',
        description: "A Mini Project made using ReactJs and Github's API for diplaying the GitHub users' profiles."
    },
    {
        id: 6,
        category: ['Node Js', 'Express Js', 'MongoDB'],
        link1: 'https://github.com/aditya278/app-monitor',
        icon1: 'Github',
        image: port6,
        title: "AppMon Backend",
        description: "a REST service backend for monitoring the HTTP/HTTPS services registered by the user. The user are notified by SMS when the service that s/he has registered changes it's state from UP to DOWN or vice versa."
    },
    {
        id: 7,
        category: ['Node Js'],
        link1: 'https://github.com/aditya278/nodeJS-no-npm-challenge',
        icon1: 'Github',
        image: port7,
        title: 'NodeJS No-NPM-Challenge',
        description: "Implemented a HTTP/HTTPs server using node.js without using a single npm module (Vanilla NodeJs)."
    },
    {
        id: 7,
        category: ['React Js', 'Bootstrap 4'],
        link1: 'https://github.com/aditya278/react-news-app',
        link2: 'http://aditya-news-app.herokuapp.com/',
        icon1: 'Github',
        icon2: 'App',
        image: newsApp,
        title: 'Nation Wants to Know - News App',
        description: "A News App created using Reactjs, Bootstrap (For CSS) and Mediastack News API."
    },
]

export default portfolios;