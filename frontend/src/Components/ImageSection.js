import React from 'react'

import about from '../img/Aditya2.jpg';
import resume from '../data/resume.pdf';

const ImageSection = () => {

    const clickHandler = () => {
        const a = document.createElement("a");
        a.href = resume;
        a.download = "Aditya-Resume";
        a.target = "_blank";
        a.click();
    }

    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>
                    Hi, I'm
                    <span> Aditya</span>.
                </h4>
                <p className="about-text">
                    I make Websites, Apps and Video Games. I have been working as a Software Engineer since 2018. In the midst of a deadly pandemic, I decided to learn Web Development and joined <i>The Hacking School</i> Coding Bootcamp, and since then I have fallen in love with <b>JavaScript</b> and <b>ReactJs</b>. This Website has been designed using ReactJs. While you're here, check out my other works in the <b>Projects</b> tab.
                </p>
                Some Random trivia about me:
                <div className="about-details">
                    <div className="left-section">
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: 24</p>
                        <p>: Indian</p>
                        <p>: Hindi, English</p>
                    </div>
                </div>
                <button className="btn" onClick={clickHandler} >Download Resume</button>
            </div>
        </div>
    )
}

export default ImageSection;