import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlexDiv } from '../styles/header.js'
import '../styles/header.css'
import Boy from '../styles/pictures/147682696_s.jpg'

const Header = () => {
    const location = useLocation()

    const redirectFunc = link => {
        const win = window.open(link, '_blank')
        win.focus()
    }

    return(
        <>
            <FlexDiv>
                <div className='name'>
                    <img src={Boy} alt='Animated boy image' onClick={() => redirectFunc('https://www.linkedin.com/in/tyler-thompson-461963124/')}/>
                </div>
                <div className='links'>
                    <Link to='/' 
                        className={
                            location.pathname =='/' ? 'active' : ''
                        }
                    >
                        Welcome
                    </Link>
                    {/* <Link to='/blog' 
                        className={
                            location.pathname =='/blog' ? 'active' : ''
                        }
                    >
                        Blog
                    </Link> */}
                    <Link to='/projects' 
                        className={
                            location.pathname =='/projects' ? 'active' : ''
                        }
                    >
                        Projects
                    </Link>
                    {/* <Link to='/newpost' 
                        className={
                            location.pathname =='/newpost' ? 'active' : ''
                        }
                    >
                        new post
                    </Link> */}
                </div>
            </FlexDiv>
            <div className='title'>
                <h2>{
                    location.pathname == '/' ? "Hi, I'm Tyler!" : '' || 
                    location.pathname =='/projects' ? 'Projects' : ''|| 
                    location.pathname =='/blog' ? 'Blog' : ''}</h2>
            </div>
        </> 
    )
}

export default Header