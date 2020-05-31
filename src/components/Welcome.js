import React from 'react'
import Postgresql from '../styles/postgresql.jpg'
import Express from '../styles/express.jpg'
import ReactLogo from '../styles/react.png'
import NodeJS from '../styles/node.jpg'
import '../styles/welcome.css'

const Welcome = () => {
    return(
        <>
            <div className='logodiv'>
                <img className='logo' src={Postgresql} />
                <img className='logo express' src={Express} />
                <img className='logo' src={ReactLogo} />
                <img className='logo' src={NodeJS} />
            </div>
        </>
    )
}

export default Welcome