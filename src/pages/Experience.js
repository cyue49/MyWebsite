import React from 'react'
import EducationCard from '../components/experience/EducationCard'
import ExperienceCard from '../components/experience/ExperienceCard'

const Experience = () => {
    return (
        <div className='px-4 lg:px-6 py-3 pb-8 flex flex-col flex-wrap gap-8'>
            <EducationCard />
            <ExperienceCard />
        </div>
    )
}

export default Experience
