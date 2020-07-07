import React from 'react'
import '../styles/projects.css'
import Droom from '../styles/screenshot.188.png'
import Droom2 from '../styles/screenshot.187.png'
import Schematic from '../styles/screenshot.170.png'
import Schematic2 from '../styles/screenshot.185.png'

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
                    <p className='blockt'>Schematic Capture was to allow for machine technicians a more modern way of documenting / annotating specific components of each machine. The product will go on to be a sort of 'portal' for Alloy Solution Technology to assign jobs (machines) to technicians. Technicians are given a schematic and excel type spreadsheet of components known to be on the machine. Technicians are able to select images from Dropbox, to input those images into the shared Dropbox amongst employees for easy access later on. My team was in charge of bringing the codeset to be on par with the stakeholders vision, and allow for future teams to develop on top of our code to get the product production ready. 
                    </p>
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
                        className='proj2 schemimg' src={Schematic2} 
                        onClick={() => redirectFunc('https://master.d2k3j4ts424kuy.amplifyapp.com/')}
                        onMouseOver={e => (e.currentTarget.src='/static/media/screenshot.170.62e89d16.png')}
                        onMouseOut={e => (e.currentTarget.src='/static/media/screenshot.185.8aea9b49.png')}
                    />
                </div>
                <div className='proj'>
                    <h2 className='titlez'>Droom</h2>
                    <p className='imp'>Production Time - 1 Week</p>
                    <p className='imp'>Team Size - 6 Members (5 Web, 1 Product Manager)</p>
                    <p className='blockt'>Droom put a twist on the job search. Droom is a Tinder-like tool in order to view posted jobs. Unfortunately the team never got to the point where users and companies could match, but all CRUD operations are present in this application. Droom has the capability of creating two seperate user types, an employee (looking for a job) or an employer. Based on which type of user you are, when you are all registered you will see a list of users of the opposite user type. A team member and I were responsible for all state management, along with CRUD operations taken place within the application.</p>
                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://master.d1bur35z3z2y1d.amplifyapp.com/')}
                        >
                            Application
                        </p>
                        <p 
                            className='codebuttons code'
                            onClick={() => redirectFunc('https://github.com/Droom3/Front-End')}
                        >
                            Code
                        </p>
                    </div>
                    <img 
                        className='proj2 droomimg' src={Droom} 
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