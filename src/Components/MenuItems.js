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
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            Anim ipsum ad cillum ea laboris eiusmod esse voluptate.
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default MenuItems;