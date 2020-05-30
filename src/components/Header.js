import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlexDiv } from '../styles/header.js'
import '../styles/header.css'
import Boy from '../styles/147682696_s.jpg'

const Header = () => {
    const location = useLocation()
    return(
        <>
            <FlexDiv>
                <div className='name'>
                    <img src={Boy} />
                </div>
                <div className='links'>
                    <Link to='/' 
                        className={
                            location.pathname =='/' ? 'active' : ''
                        }
                    >
                        Welcome
                    </Link>
                    <Link to='/blog' 
                        className={
                            location.pathname =='/blog' ? 'active' : ''
                        }
                    >
                        Blog
                    </Link>
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
        </> 
    )
}

export default Header