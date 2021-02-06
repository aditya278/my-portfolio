import React from 'react';

import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
// import SkillsSection from "../Components/SkillsSection";
import SkillsSectionWithLogos from "../Components/SkillsSectionWithLogos";
import ServicesSection from "../Components/ServicesSection";

import company1 from "../img/ths.png";
import company2 from "../img/LTI_logo.png";
import company3 from "../img/zensar.png";

const About = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="MySkills">
                {/* <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'TypeScript'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'NodeJS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'ReactJS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Express.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MongoDB'} progress={'65%'} width={'65%'} /> */}
                <SkillsSectionWithLogos title="Pro" skills={['JavaScript', 'HTML', 'CSS', 'NodeJS', 'Express.JS', 'React', 'Redux', 'Context API', 'Mongoose.JS', 'Python','Bootstrap', 'Material-UI', 'Git', 'Heroku', 'MongoDB', 'MySQL','RESTful Web Services', 'Unity3D', 'Blender', 'C# .NET Framework 4.x', '.NET Core (MVC)', 'Microsoft SQL Server', 'Agile Methodology']} />
                <SkillsSectionWithLogos title="Intermediate" skills={['TypeScript', 'SCSS', 'Swagger-UI', 'NginX', 'GCP']} />
                <SkillsSectionWithLogos title="Familiar With" skills={['Docker', 'Jenkins', 'GitHub Actions']} />
            </div>
            <Title title={'Experience'} span={'Experience'} />
            <div className="MyServices">
                <ServicesSection image={company1} date={'June 2020 - January 2021'} company={'The Hacking School'} title={"Full Stack Developer Bootcamp"} lines={["Learned Full Stack Web Development and developed projects to gain experience in skills in HTML, CSS, JavaScript (ES6), NodeJS, ExpressJS, ReactJS, MongoDB, Git, Linux, Shell Scripting and Python, RESTful APIs, UI/UX Design and CI/CD using Jenkins"," Developed a number of MERN applications by involving Agile Methodologies, which can be found on my GitHub profile."]} />
                <ServicesSection image={company2} date={'July 2018 - August 2020'} company={'L&T Infotech'} title={"Software Engineer"} lines={["Worked primarily with C# .NET Framework, J2EE and MS SQL Server to develop and enhance applications at both Backend and Frontend for a range of Application including Desktop Apps and Web Services (SOAP and REST) by Utilizing Agile Software Development methodology for an Insurance Client.",
                "Worked in a team of cross skilled developers to design a system being used by more than 3000 daily users for automating the process of generating Legal documents using the data provided by the user at the UI. Developed and maintained the backend APIs involved in the process.",
                "Key Responsibilities:  Maintained and Enhanced WPF Application, Developed APIs and Web Services using C# (.NET Framework) and LINQ to be consumed by different applications of the Project. Also developed and deployed various Batch (console) applications which resides on Autosys and are run on a fixed intervals."]} />
                <ServicesSection image={company3} title={"Software Engineering Intern"} date={'April 2017 - July 2017'} company={'Zensar Technologies'} lines={["Learned about developing project plans for IT projects involving information such as Project Objectives, Technologies, System, etc. along with various SDLC processes.", "Key Responsibility : Was involved in developing a Web Application about online Ticket Booking system using Java Servlets as Server side and JSP, JavaScript, HTML and CSS as the client side technologies"]} />
            </div>
        </div>
    )
}

export default About;