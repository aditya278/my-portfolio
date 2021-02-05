import React, { useState } from 'react'

import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";

import portfolios from "../data/allPortfolios";

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

const Portfolios = () => {
    const [categories, setCaterogies] =  useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if(category === 'All') {
            setMenuItems(portfolios);
            return;
        }
        const filterData = portfolios.filter((item) => {
            return item.category === category;
        });
        setMenuItems(filterData);
    }

    return (
        <>
            <Title className="title" title={'Projects'} span={'Projects'} />
            <div className="PortfoliosPage">
                <div className="portfolio-data">
                    <Categories filter={filter} categories={categories} />
                    <MenuItems menuItem={menuItems} />
                </div>
            </div>
        </>
    )
}

export default Portfolios;