import React from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import ProfileLink from '../components/ProfileLink'
import ContentItem from '../components/ContentItem'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'

const Home = ({ language }) => {
    const enIntro = "I completed my Bachelor of Computer Science at McGill University in May 2023 and am currently studying Mobile Application Development at John Abbott College, expecting to graduate by the end of this year. I am looking forward to putting to use what I have learned and to further developing my interest and knowledge in this field."

    const frIntro = "J'ai complété mon baccalauréat en informatique à l'université de McGill en mai 2023 et j'étudie présentement le dévelopement d'applications mobiles au collège John Abbott. J'ai hâte appliquer les notions apprises au travail et d'approfondir mes intérêts et connaissances dans ce domaine."

    return (
        <div className='h-screen w-screen flex flex-row items-center justify-center content-center flex-wrap bg-grid'>
            <div className='appear-animation max-w-3xl min-h-80 mx-4 my-8 mb-8 p-6 border border-lightColor rounded-3xl bg-darkColor shadow-type-2 flex flex-col justify-start items-start gap-4 flex-wrap hover-animation'>
                <div className='text-7xl font-bold text-lightColor'>Chen <span className='text-primaryColor'>Yue</span></div>

                <div className='flex flex-row items-center justify-start gap-6'>
                    <ProfileLink link='https://github.com/cyue49' label='GitHub' icon={faGithub} />
                    <ProfileLink link='https://www.linkedin.com/in/chen-yue-yc' label='LinkedIn' icon={faLinkedin} />
                </div>

                <div className='py-2'>{language === 'en' ? enIntro : frIntro}</div>
            </div>

            <div className='mx-4 px-2 py-8 lg:py-0 flex flex-row lg:flex-col gap-6 items-center lg:items-start justify-start lg:min-h-80 overflow-scroll no-scrollbar'>
                <ContentItem label={language === 'en' ? 'About' : 'Profil'} page={<About language={language} />} />
                <ContentItem label={language === 'en' ? 'Projects' : 'Projets'} page={<Projects language={language} />} />
                <ContentItem label={language === 'en' ? 'Experience' : 'Expérience'} page={<Experience language={language} />} />
            </div>
        </div>
    )
}

export default Home
