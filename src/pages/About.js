import React from 'react'
import Languages from '../components/about/Languages'
import Technologies from '../components/about/Technologies'
import Skills from '../components/about/Skills'
import Hobbies from '../components/about/Hobbies'

const About = () => {

    return (
        <div className='px-4 lg:px-6 py-3 pb-8 flex flex-col flex-wrap gap-8'>
            <Languages />
            <Technologies />
            <Skills />
            <Hobbies />
        </div>
    )
}

export default About