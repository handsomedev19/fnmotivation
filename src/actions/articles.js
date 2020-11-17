import axios from "axios";
import { SERVER_URL } from "../utils/apiUtils"

export const GET_CATEGORIES_SUCCESS = "get_categories_success";
export const GET_CATEGORIES_FAILURE = "get_categories_failure";
export const GET_ARTICLES_SUCCESS = "get_articles_success";
export const GET_ARTICLES_FAILURE = "get_articles_failure";
export const POST_STORY_SUCCESS = "post_article_success";
export const POST_STORY_FAILURE = "post_article_failure";

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

export function postStory(config) {
    return dispatch => {

        /*config = {
            title: "tempArticle.tempTitle",
            category: "tempArticle.tempCategory",
            intro: "tempArticle.tempIntro",
            body: "tempArticle.tempBody",
            tag: "tempArticle.tempTag"
        }*/
        console.log(JSON.stringify(config));

        var bodyFormData = new FormData();
        bodyFormData.append('title', 'aaa');

        var object = {};
        bodyFormData.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);
        console.log(json);

        axios
            .post(SERVER_URL  + "/articles", config, {
                headers: { 'Content-Type': 'multipart/form-data' },
              })
            .then( response => {
                //handle success
                console.log("Post Success");
                console.log(response.data);

                dispatch(postArticleSuccess());
            })
            .catch( error => {
                //handle error
                console.log('An error occurred:', error.response);

                dispatch(postArticleFailure());
            });
    }
}