import React from 'react'
import { connect } from 'react-redux'

const Projects = () => {
    return(
        <>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        projects: state.projects,
        posts: state.posts
    }
}

export default connect(mapStateToProps, {})(Projects) 