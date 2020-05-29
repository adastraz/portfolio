import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <div>
                <Link to='/'>Welcome</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/newpost'>New Post</Link>
            </div>
            <h2>Tyler Thompson</h2>
        </div>
    )
}

export default Header