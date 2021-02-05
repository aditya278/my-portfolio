import React from 'react'

import about from '../img/Aditya2.jpg';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>
                    I am
                    <span> Aditya Shukla</span>
                </h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Aditya Shukla</p>
                        <p>: 24</p>
                        <p>: Indian</p>
                        <p>: Hindi, English</p>
                        <p>: 501/4B, Regal Town, Bhopal, M.P.</p>
                        <p>: India</p>
                    </div>
                </div>
                <button className="btn">Download Resume</button>
            </div>
        </div>
    )
}

export default ImageSection;