import React from 'react'
import { connect } from 'react-redux'

const NewProject = props => {
    return(
        <>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        posts: state.posts,
        error: state.error,
        projects: state.projects
    }
}

export default connect(mapStateToProps, {})(NewProject)