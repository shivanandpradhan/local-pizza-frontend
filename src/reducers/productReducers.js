import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CLEAR_ERROR
} from '../constants/productConstants.js'

export const productReducer = (state = {products : []}, action) => {

    switch(action.type){
        case FETCH_PRODUCTS_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_PRODUCTS_SUCCESS : return {
            ...state,
            loading : false,
            products : action.payload,
        }
        case FETCH_PRODUCTS_FAILURE : return {
            ...state,
            loading : false,
            error : action.payload
        }
        case CLEAR_ERROR : return {
            ...state,
            error : null
        }
        default : return state;
    }

}