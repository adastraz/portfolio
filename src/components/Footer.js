import React from 'react'
import '../styles/footer.css'
import Github from '../styles/pictures/github.png'
import LinkedIn from '../styles/pictures/linkedin.png'

const Footer = () => {
    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    const mailTo = () => {
        window.open("mailto:tylergosox@gmail.com")
    }

    return (
        <>
            <div className='footer'>
                <div className='columnfoot'>
                    
                    <img className='smallgit' onClick={() => redirectFunc('https://github.com/adastraz')} src={Github} />
                    <img className='linkedin' onClick={() => redirectFunc('https://www.linkedin.com/in/tyler-thompson-461963124/')} src={LinkedIn} />
                    
                    <h3 className='txt' onClick={() => mailTo()}>contact me</h3>
                </div>
                <p className='footfoot'>© 2020 Tyler Thompson. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer