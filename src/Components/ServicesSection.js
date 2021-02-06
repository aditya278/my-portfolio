import React from 'react'

const ServicesSection = ({image, title, company, date, lines}) => {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} className="service-img" alt="service-img" />
                    <h5 className="service-title">
                        {title}
                        <div className="service-info">
                            <h6>
                                {` @${company}`}
                            </h6>
                            <h6 className="service-date">{date}</h6>
                        </div>
                    </h5>
                    {
                        lines && lines.map(line => (
                            <p className="service-text">
                                -{' ' + line}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesSection