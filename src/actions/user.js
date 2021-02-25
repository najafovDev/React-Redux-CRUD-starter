import api from './api';

export const ACTION_TYPES = {
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchALL = () => dispatch => {
    api.user().fetchAll().then( response => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data
        }) 
    }
    ).catch(err => console.log(err))
}