import React from 'react'
import { connect } from 'react-redux'
import '../styles/blog.css'

const Blog = props => {
    return(
        <>
            <h1>Work in Progress</h1>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        posts: state.posts,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Blog)