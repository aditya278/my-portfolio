import React from 'react';

import BrandIcons from "../Components/BrandIcons";

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Aditya Shukla.</span>
                </h1>
                <p className="h-sub-text">
                    A Software Engineer with 2.5 Years of Industry as well as Freelance Experience of Developing Scalable Desktop and Web Applications as well as Video Games.
                </p>
                <p className="h-sub-text">
                    A Coding Bootcamp Graduate with Extensive background in JavaScript, Python and C#. Specializes in <b>Full Stack Web Development</b> with <b>NodeJs</b> and <b>ReactJs</b>, to develop and deploy websites from the ground up.
                </p>
                <div className="icons">
                    <BrandIcons />
                </div>
            </header>
        </div>
    )
}

export default HomePage;