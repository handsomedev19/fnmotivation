import axios from "axios";
import { SERVER_URL } from "../utils/apiUtils"
import { alert } from "../actions/alerts"

export const GET_CATEGORIES_SUCCESS = "get_categories_success";
export const GET_CATEGORIES_FAILURE = "get_categories_failure";
export const GET_ARTICLES_SUCCESS = "get_articles_success";
export const GET_ARTICLES_FAILURE = "get_articles_failure";
export const POST_STORY_SUCCESS = "post_article_success";
export const POST_STORY_FAILURE = "post_article_failure";
export const GET_ARTICLE_TAGS = "get_article_tags";
export const SET_ARTICLE_TAGS = "set_article_tags";

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

function getArticlesSucces(payload){
    return {
        type: GET_ARTICLES_SUCCESS,
        payload: payload
    }
}

function getArticlesFailure(payload){
    return {
        type: GET_ARTICLES_FAILURE,
        payload: payload
    }
}

function postArticleSuccess(){
    return {
        type: POST_STORY_SUCCESS
    }
}

function postArticleFailure(){
    return {
        type: POST_STORY_FAILURE
    }
}

export function getCategories() {

    return dispatch => {
        axios
        .get(SERVER_URL + "/article-categories")
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getCategoriesSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            dispatch(getCategoriesFailure(error.response));
        });
    }
}

export function getArticles() {

    return dispatch => {
        axios
        .get(SERVER_URL + "/articles?_limit=5")
        .then(response => {
            // Handle success.
            console.log("Articles:");
            console.log(response.data);
            dispatch(getArticlesSucces(response.data));          
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            dispatch(getArticlesFailure(error.response));
        });
    }
}

export function postStory(formData) {
    return dispatch => {

       
        console.log("post story here");

        axios
            .post(SERVER_URL  + "/articles", formData)
            .then( response => {
                //handle success
                console.log("Post Success");
                console.log(response.data);

                //dispatch(postArticleSuccess());
                dispatch(alert("Post Story Success!"));

            })
            .catch( error => {
                //handle error
                console.log('An error occurred:', error.response);

                //dispatch(postArticleFailure());
                dispatch(alert("Post Story Failed!"));
            });
    }
}

export function setTags(payload){
    return {
        type: SET_ARTICLE_TAGS,
        payload: payload
    }
}

export function getTags() {
    return {
        type: GET_ARTICLE_TAGS
    }
}