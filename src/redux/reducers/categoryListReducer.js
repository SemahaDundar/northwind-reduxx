import * as actionTypes from '../actions/actionTypes';
import initialState from '../actions/initialState';

export default function changeCategoryReducer(state=initialState.categories,actions){
    switch (action.type){
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
            default:
                return state;
    }
}