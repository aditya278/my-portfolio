import React from 'react'

import Title from "../Components/Title";
import ContactItem from "../Components/ContactItem";

import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

const Contact = () => {
    return (
        <>
            <Title className="title" title={'Contact Me'} span={'Contact Me'} />
            <div className="ContactPage">
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.1841666870305!2d77.49744805205502!3d23.22967994770612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92789b8c0f752e06!2sRegal%20Town!5e0!3m2!1sen!2sin!4v1612523286247!5m2!1sen!2sin" title="myMap" width="600" height="450" frameBorder="0" style={{border:0}} allowfullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-section">
                    <ContactItem icon={phone} text1={'+91 9960125854'} text2={'+91 8698641362'} title={'Phone'} />
                    <ContactItem icon={email} text1={'aditya.sh278@gmail.com'} text2={'aditya.shukla278@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Regal Town, Awadhpuri'} text2={'Bhopal, M.P., India'} title={'Location'} />
                </div>
            </div>
        </>
    )
}

export default Contact;