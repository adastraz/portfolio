import React from 'react'
import Postgresql from '../styles/postgresql.jpg'
import Express from '../styles/express.jpg'
import ReactLogo from '../styles/react.png'
import NodeJS from '../styles/node.jpg'
import '../styles/welcome.css'
import Git from '../styles/git.png'
import Github from '../styles/github.png'
import Slack from '../styles/slack.png'
import Redux from '../styles/redux.png'

const Welcome = () => {
    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return(
        <>
            <div className='logodiv'>
                <img className='logo' src={Postgresql} />
                <img className='logo express' src={Express} />
                <img className='logo' src={ReactLogo} />
                <img className='logo' src={NodeJS} />
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
                    <img className='logo slack' src={Slack} />
                </div>
                <div>
                    <img className='logo' src={Redux} />
                </div>
            </div>
            <div className='second'>
                <div className='ptag two'>
                    <p>8 months ago I made the decision not to go back to college, but to become a student at Lambda School to learn full-stack web development. Along the way, I have found my passion.</p>
                </div>
                <div>
                    <img className='logo git' src={Git} />
                </div>
            </div>
        </>
    )
}

export default Welcome