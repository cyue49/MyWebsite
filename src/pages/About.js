import React from 'react'
import Languages from '../components/About/Languages'
import Technologies from '../components/About/Technologies'
import Skills from '../components/About/Skills'
import Hobbies from '../components/About/Hobbies'

const About = () => {

    return (
        <div className='px-5 py-3 flex flex-col flex-wrap gap-4'>
            <Languages />
            <Technologies />
            <Skills />
            <Hobbies />
        </div>
    )
}

export default About
