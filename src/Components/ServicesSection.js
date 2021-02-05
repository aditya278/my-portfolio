import React from 'react'

const ServicesSection = ({image, title, text}) => {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt="service" />
                    <h5 className="service-title">{title}</h5>
                    <p className="service=text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection