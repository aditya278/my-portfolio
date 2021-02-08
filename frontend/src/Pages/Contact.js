import React from 'react'

import Title from "../Components/Title";
import ContactItem from "../Components/ContactItem";
import GetInTouch from "../Components/GetInTouch";

import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

const Contact = () => {
    return (
        <>
            <Title className="title" title={'Contact Me'} span={'Contact Me'} />
            <div className="ContactPage">
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98663.80901084658!2d77.36719893926976!3d23.220670397882273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1612784596727!5m2!1sen!2sin" title="myMap" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-section">
                    <ContactItem icon={phone} text1={'+91 9960125854'} text2={'+91 8698641362'} title={'Phone'} />
                    <ContactItem icon={email} text1={'aditya.sh278@gmail.com'} text2={'aditya.shukla278@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Awadhpuri'} text2={'Bhopal, M.P., India'} title={'Location'} />
                </div>
            </div>
            <Title className="title" title={'Get In Touch'} span={'Get In Touch'} />
            <GetInTouch />
        </>
    )
}

export default Contact;