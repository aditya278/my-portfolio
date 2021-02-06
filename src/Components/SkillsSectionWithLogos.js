import React from 'react'

const SkillsSectionWithLogos = ({skills, title}) => {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{title}</h5>
                <div className="skill-grid">
                {
                    skills && skills.map((skill, key) => (
                        <div className="skill">
                            {skill}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default SkillsSectionWithLogos
