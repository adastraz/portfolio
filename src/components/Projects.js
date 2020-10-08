import React from 'react'
import '../styles/projects.css'
import Droom from '../styles/pictures/screenshot.188.png'
import Droom2 from '../styles/pictures/screenshot.187.png'
import Schematic from '../styles/pictures/screenshot.170.png'
import Schematic2 from '../styles/pictures/screenshot.185.png'
import Social from '../styles/pictures/screenshot.209.png'
import Social2 from '../styles/pictures/screenshot.208.png'

const Projects = () => {
    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return(
        <>
            <div className='projects'>
                <div className='proj'>
                    <h2 className='titlez'>Schematic Capture</h2>
                    <p className='imp'>Production Time - 2 months</p>
                    <p className='imp'>Team Size - 7 Members (1 UX, 1 iOS, 4 Web, 1 Product Manager)</p>
                    <p className='blockt'>
                        Schematic Capture was to allow for machine technicians a more modern way of documenting / annotating specific components of each machine. The product will develop to be a sort of 'portal' for Alloy Solution Technology to assign jobs (machine projects) to technicians. 
                    </p>
                    <ul>
                        <li className='blockt'>Responsible for a complete overhaul of the code base, allowing for clear readability, for future teams that will work with the codebase</li>
                        <li className='blockt'>Migrated the deployment method of the application to AWS, and linked a DNS</li>
                        <li className='blockt'>Led an organized Gitflow for the team</li>
                    </ul>
                    <div>
                        <p className='none imp'>Test User Information *subject to change*</p>
                        <p className='none imp'>email : bob_johnson@lambdaschool.com</p>
                        <p className='none imp'>password : testing123!</p>
                    </div>

                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://master.d2k3j4ts424kuy.amplifyapp.com/')}
                        >
                            Application
                        </p>
                        <p 
                            className='codebuttons code'
                            onClick={() => redirectFunc('https://github.com/adastraz/schematic-capture-fe')}
                        >
                            Code
                        </p>
                    </div>
                    <img 
                        className='proj2 schemimg' src={Schematic2} alt='Schematic Capture project image'
                        onClick={() => redirectFunc('https://master.d2k3j4ts424kuy.amplifyapp.com/')}
                        onMouseOver={e => (e.currentTarget.src='/static/media/screenshot.170.62e89d16.png')}
                        onMouseOut={e => (e.currentTarget.src='/static/media/screenshot.185.8aea9b49.png')}
                    />
                </div>

                <div className='proj'>
                    <h2 className='titlez'>Social Media Clone</h2>
                    <p className='imp'>Production Time ~ 2 months (Ongoing)</p>
                    <p className='imp'>Team Size - 1 Member (me!)</p>
                    <p className='blockt'>
                        My social media clone was the first project I took on after completing Lambda School. I wanted to see how far I could stretch my abilities to make something as intricate as a social media platform. I want to continue work on this project as long as I am still interested in new features!
                    </p>
                    <ul>
                        <li className='blockt'>Every line of code in this application was written by me!</li>
                        <li className='blockt clickMe' onClick={() => redirectFunc('https://github.com/adastraz/social-media-be')}>Designed all data schema on the backend using Node.js with Express.js</li>
                        <li className='blockt'>Managed all forms of state with Redux (no hooks at the moment)</li>
                    </ul>
                    <p className='none imp'>This project is still very much a work in progress!</p>
                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://developement.d2gyknsnhpxh90.amplifyapp.com/')}
                        >
                            Application
                        </p>
                        <p 
                            className='codebuttons code'
                            onClick={() => redirectFunc('https://github.com/adastraz/social-media-fe')}
                        >
                            Code
                        </p>
                    </div>
                    <img 
                        className='proj2 socialimg' src={Social2} alt='Social media clone project image'
                        onClick={() => redirectFunc('https://developement.d2gyknsnhpxh90.amplifyapp.com/')}
                        onMouseOver={e => (e.currentTarget.src='/static/media/screenshot.209.214cb78c.png')}
                        onMouseOut={e => (e.currentTarget.src='/static/media/screenshot.208.813f9db2.png')}
                    />
                </div>

            </div>
            <div className='projects2'>
                <div className='proj'>
                    <h2 className='titlez'>Disney Parent API</h2>
                    <p className='imp'>Production Time - 1 week</p>
                    <p className='imp'>Team Size - 5 Members (4 Web, 1 Product Manager)</p>
                    <p className='blockt'>
                        Disney Parent makes it so much more affordable to travel inside of Disney parks with your children! Disney Parent allows for users to post their stroller for available pickup, with an attached location based on which ride you left your stroller to be picked up. 
                    </p>
                    <ul>
                        <li className='blockt'>Responsible for complete construction of a Node.js API built with Express.js</li>
                        <li className='blockt'>Connected the application to a Heroku hosted PostgreSQL server to add data persistance to the API.</li>
                        <li className='blockt'>Communicated with the front-end team to allow for ease of use while in the development process of the API</li>
                    </ul>
                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://obscure-scrubland-65975.herokuapp.com/')}
                        >
                            API
                        </p>
                        <p 
                            className='codebuttons code'
                            onClick={() => redirectFunc('https://github.com/adastraz/Backend')}
                        >
                            Code
                        </p>
                    </div>
                </div>

                <div className='proj'>
                    <h2 className='titlez'>Droom</h2>
                    <p className='imp'>Production Time - 1 week</p>
                    <p className='imp'>Team Size - 6 Members (5 Web, 1 Product Manager)</p>
                    <p className='blockt'>
                        Droom put a twist on the job search. Droom is a Tinder-like tool in order to view posted jobs. Droom has the capability of creating two seperate user types, an employee (looking for a job) or an employer. 
                    </p>
                    <ul>
                        <li className='blockt'>Responsible for all CRUD operations throughout Droom</li>
                        <li className='blockt'>Handled state management with Redux.js</li>
                        <li className='blockt'>Ultilized react-router-dom for routing through the application</li>
                    </ul>

                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://master.d1bur35z3z2y1d.amplifyapp.com/')}
                        >
                            Application
                        </p>
                        <p 
                            className='codebuttons code'
                            onClick={() => redirectFunc('https://github.com/adastraz/droom')}
                        >
                            Code
                        </p>
                    </div>
                    <img 
                        className='proj2 droomimg' src={Droom} alt='Droom project image'
                        onClick={() => redirectFunc('https://master.d1bur35z3z2y1d.amplifyapp.com/')}
                        onMouseOver={e => (e.currentTarget.src='/static/media/screenshot.187.d1894be3.png')}
                        onMouseOut={e => (e.currentTarget.src='static/media/screenshot.188.2c1c9b80.png')}
                    />
                </div>
            </div>
        </>
    )
}

export default Projects