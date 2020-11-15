import axios from "axios";
import { SERVER_URL } from "../utils/apiUtils"

export const GET_CATEGORIES_SUCCESS = "get_categories_success";
export const GET_CATEGORIES_FAILURE = "get_categories_failure";

function getCategoriesSuccess(payload){
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: payload
    }
}

function getCategoriesFailure(payload){
    return {
        type: GET_CATEGORIES_FAILURE,
        payload: payload
    }
}

export function getCategories() {

    return dispatch => {
        axios
        .get(SERVER_URL + "/article-categories")
        .then(response => {
            // Handle success.
            console.log(response.data);
            
            dispatch(getCategoriesSuccess(response.data));
            
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);

            dispatch(getCategoriesFailure(error.response));
        });
    }
}