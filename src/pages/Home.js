import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = ({ language }) => {
    const enIntro = "I completed my Bachelor of Computer Science at McGill University in May 2023 and am currently studying Mobile Application Development at John Abbott College, expecting to graduate by the end of this year. I am looking forward to putting to use what I have learned and to further developing my interest and knowledge in this field."
    const frIntro = "J'ai complété mon baccalauréat en informatique à l'université de McGill en mai 2023 et j'étudie présentement le dévelopement d'applications mobiles au collège John Abbott. J'ai hâte appliquer les notions apprises au travail et d'approfondir mes intérêts et connaissances dans ce domaine."

    return (
        <div className='h-screen v-screen center-of-div'>
            <div className='appear-animation max-w-lg border border-lightColor rounded-3xl m-4 p-6 bg-darkColor shadow-md shadow-primaryColor/50 flex flex-col justify-start items-start gap-4 flex-wrap'>
                <div className='text-7xl font-bold text-lightColor'>Chen <span className='text-primaryColor'>Yue</span></div>

                <div className='flex flex-row items-center justify-start gap-6'>
                    <a href='https://github.com/cyue49' target='_blank' rel='noreferrer'
                        className='flex flex-row gap-2 items-center text-xl border-b border-b-transparent hover:border-lightColor opacity-50 hover:opacity-100'>
                        <FontAwesomeIcon icon={faGithub} className='p-0 m-0' />
                        <div>GitHub</div>
                    </a>
                    <a href='https://www.linkedin.com/in/chen-yue-yc' target='_blank' rel='noreferrer'
                        className='flex flex-row gap-2 items-center text-xl border-b border-b-transparent hover:border-lightColor opacity-50 hover:opacity-100'>
                        <FontAwesomeIcon icon={faLinkedin} className='p-0 m-0' />
                        <div>LinkedIn</div>
                    </a>
                </div>

                {language === 'en' ? <div>{enIntro}</div> : <div>{frIntro}</div>}
            </div>
        </div>
    )
}

export default Home
