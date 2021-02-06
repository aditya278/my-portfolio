import React from 'react';

const Categories = ({filter, categories}) => {
    return (
        <div className="category-btns">
            {
                categories.map((category, key) => (
                    <button className="btn-portfolio" key={key} onClick={() => filter(category)}>
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories;