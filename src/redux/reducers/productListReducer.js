import * as actionTypes from '../actions/actionTypes';
import initialState from '../actions/initialState';

export default function productListReducer(state=initialState.products,actions){
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
            default:
                return state;
    }
}