import React, { useState } from 'react'

import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";

import portfolios from "../data/allPortfolios";

const Portfolios = () => {

    let mergedCategories = [];
    portfolios.forEach(item => {
        if(typeof item.category === 'object')
            mergedCategories.push(...item.category);
        else
            mergedCategories.push(item.category);        
    })

    const allCategories = ['All', ...new Set(mergedCategories)];
    const [categories, setCaterogies] =  useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if(category === 'All') {
            setMenuItems(portfolios);
            return;
        }
        const filterData = portfolios.filter((item) => {
            return item.category.includes(category);
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