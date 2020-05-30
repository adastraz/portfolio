import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    NEW_POST
} from '../actions'

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
    projects: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}