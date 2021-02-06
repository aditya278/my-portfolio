import React from 'react'

const MenuItems = ({menuItem}) => {
    return (
        <div className="portfolios">
            {
                menuItem.map((item, key) => (
                    <div className="portfolio" key={key}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer">{item.icon1}</a>
                                    {
                                        item.link2 && <a href={item.link2} target="_blank" rel="noreferrer">{item.icon2}</a>
                                    }
                                </li>
                            </ul>
                        </div>
                        <h5>
                            <a href={item.link1} target="_blank" rel="noreferrer">{item.title}</a>
                        </h5>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default MenuItems;