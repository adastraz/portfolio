import React from 'react'
import Postgresql from '../styles/pictures/postgresql.jpg'
import Express from '../styles/pictures/express.jpg'
import ReactLogo from '../styles/pictures/react.png'
import NodeJS from '../styles/pictures/node.jpg'
import '../styles/welcome.css'
import Git from '../styles/pictures/git.png'
import Github from '../styles/pictures/github.png'
import Slack from '../styles/pictures/slack.png'
import Redux from '../styles/pictures/redux.png'

const Welcome = () => {
    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return(
        <>
            <div className='logodiv'>
                <img 
                    className='logo' src={Postgresql} 
                    onClick={()=> redirectFunc('https://www.postgresql.org/about/')}
                />
                <img 
                    className='logo express' src={Express} 
                    onClick={()=> redirectFunc('https://expressjs.com/')}
                />
                <img 
                    className='logo' src={ReactLogo}
                    onClick={()=> redirectFunc('https://reactjs.org/')}
                />
                <img 
                    className='logo' src={NodeJS} 
                    onClick={()=> redirectFunc('https://nodejs.org/en/about/')}
                />
            </div>
            <div className='first'>
                <div className='ptag one'>
                    <p>I am a developer that is open to new oppertunities, currently based in the east coast. I have experience in product management, and agile team environments.</p>
                </div>
                <div onClick={() => redirectFunc('https://github.com/adastraz')}>
                    <img className='logo git' src={Github} />
                </div>
            </div>
            <div className='second'>
                <div>
                    <img 
                        className='logo slack' src={Slack} 
                        onClick={()=> redirectFunc('https://slack.com/')}
                    />
                </div>
                <div>
                    <img 
                        className='redux logo' src={Redux} 
                        onClick={()=> redirectFunc('https://redux.js.org/')}
                    />
                </div>
            </div>
            <div className='second secblock'>
                <div className='ptag two'>
                    <p>8 months ago I made the decision not to go back to college, but to become a student at Lambda School to learn full-stack web development. Along the way, I have found my passion.</p>
                </div>
                <div>
                    <img 
                        className='logo git' src={Git} 
                        onClick={()=> redirectFunc('https://git-scm.com/')}
                    />
                </div>
            </div>
        </>
    )
}

export default Welcome