import React from 'react'
import { connect } from 'react-redux'

const NewPost = props => {
    return(
        <>
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

export default connect(mapStateToProps, {})(NewPost)