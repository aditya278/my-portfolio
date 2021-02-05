import React from 'react';

import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";

import design from "../img/design.svg";
import gameDev from "../img/game-dev.svg";
import intelligence from "../img/intelligence.svg";

const About = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="MySkills">
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'TypeScript'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'NodeJS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'ReactJS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Express.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MongoDB'} progress={'65%'} width={'65%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="MyServices">
                <ServicesSection image={design} title={"Web Dev"} text={'Laborum et consectetur anim laboris ut fugiat exercitation quis nulla aute ea tempor.'} />
                <ServicesSection image={gameDev} title={"Game Dev"} text={'Laborum et consectetur anim laboris ut fugiat exercitation quis nulla aute ea tempor.'} />
                <ServicesSection image={intelligence} title={"Backend APIs"} text={'Laborum et consectetur anim laboris ut fugiat exercitation quis nulla aute ea tempor.'} />
            </div>
        </div>
    )
}

export default About;