import React from 'react'
import '../styles/projects.css'
import Droom from '../styles/screenshot.169.png'
import Schematic from '../styles/screenshot.170.png'

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
                    <p>Production Time - 2 Months</p>
                    <p>Team Size - 7 Members (1 UX, 1 iOS, 4 Web, 1 Product Manager)</p>
                    <p className='blockt'>This project was to allow for machine technicians a more modern way of documenting / annotating specific components of each machine. This product will go on to be a sort of 'portal' for Alloy Solution Technology to assign jobs (machines) to technicians. They are given a schematic and excel type spreadsheet of components known to be on the machine. Users are able to select images from Dropbox, to input those images into the shared Dropbox amongst employees for easy access later on. My team was in charge of bringing the codeset to be on par with the stakeholders vision, and allow for future teams to develop on top of our code to get the product production ready. 
                    </p>
                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://master.d3bnlq4xzoa0gr.amplifyapp.com/')}
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
                        className='proj2' src={Schematic} 
                        onClick={() => redirectFunc('https://master.d3bnlq4xzoa0gr.amplifyapp.com/')}
                    />
                </div>
                <div className='proj'>
                    <h2 className='titlez'>Droom</h2>
                    <p>Production Time - 1 Week</p>
                    <p>Team Size - 6 Members (5 Web, 1 Product Manager)</p>
                    <p className='blockt'>This project put a twist on the job search. Droom is a Tinder-like tool in order to view posted jobs. There is no real functionality for matching, but all CRUD operations are present in this application. Droom has the capability of creating two seperate user types, an employee (looking for a job) or an employer. Based on which type of user you are, when you are all registered you will see a list of users of the opposite user type. A team member and I were responsible for all state management, along with CRUD operations taken place within the application.</p>
                    <div className='codeStuff'>
                        <p 
                            className='codebuttons application'
                            onClick={() => redirectFunc('https://boring-ardinghelli-c591c1.netlify.app/')}
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
                        className='proj2' src={Droom} 
                        onClick={() => redirectFunc('https://boring-ardinghelli-c591c1.netlify.app/')}
                    />
                </div>
            </div>
        </>
    )
}



export default Projects