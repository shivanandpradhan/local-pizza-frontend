import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CLEAR_ERROR
} from '../constants/productConstants';

import axios from 'axios'

// action creator for async fetch pizza items using axios
export const getProducts = () => async (dispatch) => {
    
    try {
        dispatch({ type : FETCH_PRODUCTS_REQUEST });

        const { data } = await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")

        dispatch({ 
            type : FETCH_PRODUCTS_SUCCESS, 
            payload : data
        })
        
    } catch (error) {
        dispatch({
            type : FETCH_PRODUCTS_FAILURE,
            payload : error.response.data
        })
    }
}

// clear error action creator..
export const clearErrors = () => dispatch => {
    return dispatch({ type : CLEAR_ERROR })
}