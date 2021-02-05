import React from 'react';

import BrandIcons from "../Components/BrandIcons";

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Aditya Shukla.</span>
                </h1>
                <p className="h-sub-text">
                    Excepteur nulla amet exercitation deserunt et cupidatat officia ex exercitation duis ex. Amet velit do ex labore officia do minim ea consequat nostrud amet. Ex non reprehenderit minim ipsum laborum magna reprehenderit veniam. Id et aliquip tempor nisi Lorem pariatur elit aliquip incididunt ut ullamco. Consequat ad labore sunt nisi esse sit sint consequat proident aliquip culpa non.
                </p>
                <div className="icons">
                    <BrandIcons />
                </div>
            </header>
        </div>
    )
}

export default HomePage;