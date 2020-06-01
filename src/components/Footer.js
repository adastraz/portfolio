import React from 'react'
import '../styles/footer.css'
import Github from '../styles/github.png'

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
                    <h3 
                        className='txt' 
                        onClick={() => redirectFunc('https://github.com/adastraz')}
                    >
                        <img className='smallgit' src={Github} />
                        github
                    </h3>
                    <h3 className='txt' onClick={() => mailTo()}>contact me</h3>
                </div>
                <p className='footfoot'>© 2020 Tyler Thompson. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer