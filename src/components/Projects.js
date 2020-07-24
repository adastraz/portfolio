import React from 'react'
import '../styles/projects.css'
import Droom from '../styles/pictures/screenshot.188.png'
import Droom2 from '../styles/pictures/screenshot.187.png'
import Schematic from '../styles/pictures/screenshot.170.png'
import Schematic2 from '../styles/pictures/screenshot.185.png'

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
                    <p className='imp'>Production Time - 2 Months</p>
                    <p className='imp'>Team Size - 7 Members (1 UX, 1 iOS, 4 Web, 1 Product Manager)</p>
                    <p className='blockt'>
                        Schematic Capture was to allow for machine technicians a more modern way of documenting / annotating specific components of each machine. The product will develop to be a sort of 'portal' for Alloy Solution Technology to assign jobs (machine projects) to technicians. 
                    </p>
                    <ul>
                        <li className='blockt'>Responsible for a complete overhaul of the code base, allowing for clear readability, for future teams that will work with the codebase.</li>
                        <li className='blockt'>Migrated the deployment method of the application to AWS, and linked a DNS.</li>
                        <li className='blockt'>Led an organized Gitflow for the team.</li>
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
                    <h2 className='titlez'>Droom</h2>
                    <p className='imp'>Production Time - 1 Week</p>
                    <p className='imp'>Team Size - 6 Members (5 Web, 1 Product Manager)</p>
                    <p className='blockt'>
                        Droom put a twist on the job search. Droom is a Tinder-like tool in order to view posted jobs. Droom has the capability of creating two seperate user types, an employee (looking for a job) or an employer. 
                    </p>
                    <ul>
                        <li className='blockt'>Responsible for all CRUD operations throughout Droom.</li>
                        <li className='blockt'>Handled state management with Redux.js.</li>
                        <li className='blockt'>Ultilized react-router-dom for routing through the application.</li>
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