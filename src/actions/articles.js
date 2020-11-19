import axios from "axios";
import { SERVER_URL } from "../utils/apiUtils"
import { alert } from "../actions/alerts"
import { func } from "prop-types";

var qs = require('qs');
var assert = require('assert');

export const GET_CATEGORIES_SUCCESS = "get_categories_success";
export const GET_CATEGORIES_FAILURE = "get_categories_failure";
export const GET_ARTICLES_SUCCESS = "get_articles_success";
export const GET_ARTICLES_FAILURE = "get_articles_failure";
export const POST_STORY_SUCCESS = "post_article_success";
export const POST_STORY_FAILURE = "post_article_failure";
export const GET_ARTICLE_TAGS = "get_article_tags";
export const SET_ARTICLE_TAGS = "set_article_tags";
export const GET_COMMUNITY_RECENT_STORIES_SUCCESS = "get_community_recent_stories_success";
export const GET_COMMUNITY_POPULAR_STORIES_SUCCESS = "get_community_popular_stories_success";
export const GET_ONEARTICLE_SUCCESS = "get_article_success";
export const GET_ONEARTICLE_FAILURE = "get_article_failure";
export const POST_COMMENT_SUCCESS = "post_comment_success";
export const POST_COMMENT_FAILURE = "post_comment_failure";

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

function getCommunityRecentStoriesSuccess(payload){
    return {
        type: GET_COMMUNITY_RECENT_STORIES_SUCCESS,
        payload: payload
    } 
}

function getCommunityPopularStoriesSuccess(payload){
    return {
        type: GET_COMMUNITY_POPULAR_STORIES_SUCCESS,
        payload: payload
    } 
}

function getOneArticleSuccess(payload){
    return {
        type: GET_ONEARTICLE_SUCCESS,
        payload: payload
    }
}

function getOneArticleFailure(payload){
    return {
        type: GET_ONEARTICLE_FAILURE,
        payload: payload
    }
}

function postCommentSuccess(){
    return {
        type: POST_COMMENT_SUCCESS
    }
}

function postCommentFailure() {
    return {
        type: POST_COMMENT_FAILURE
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

export function getCommunityStories(id){

    console.log("article_category : " + id);
    console.log(SERVER_URL + "/articles?_limit=4&_sort=published_at:desc&_where[0][outer]=false&_where[1][article_category]=" + id);
        
        return dispatch => {
            axios
            .get(SERVER_URL + "/articles?_limit=4&_sort=published_at:desc&_where[0][outer]=false&_where[1][article_category]=" + id)
            //.get(SERVER_URL + "/articles?_limit=30&_sort=pubilshed_at:desc&_where[0][outer]=false&_where[1][id]=" + id)
            .then(response => {
                // Handle success.
                
                console.log("getCommunityRecentStories response arrived");
                console.log(response.data); 

                dispatch(getCommunityRecentStoriesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                
            });

            axios
            .get(SERVER_URL + "/articles?_limit=4&_sort=likes:asc&_where[0][outer]=false&_where[1][article_category]=" + id)
            //.get(SERVER_URL + "/articles?_limit=30&_sort=pubilshed_at:desc&_where[0][outer]=false&_where[1][id]=" + id)
            .then(response => {
                // Handle success.
                
                console.log("getCommunityPopularStories response arrived");
                console.log(response.data); 

                dispatch(getCommunityPopularStoriesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                
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

export function getOneArticle(id) {
    return dispatch => {
        axios
        .get(SERVER_URL + "/articles/" + id)
        .then(response => {
            // Handle success.
            console.log("One Article:");
            console.log(response.data);
            dispatch(getOneArticleSuccess(response.data));          
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            dispatch(getOneArticleFailure(error.response));
        });
    }
}

export function postComment(config){
    return dispatch => {

        console.log("post comment data: ");
        console.log(config.users_permissions_user);
        console.log(config.article);
        console.log(config.content);
        
        axios                
        .post(SERVER_URL + '/comments', config)
        .then(response => {
            // Handle success.
            console.log("Post Comment Success!");
            console.log(response.data);

            //dispatch(postArticleSuccess());
            dispatch(alert("Comment created was posted successfully."));
            
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
      
            //dispatch(loginFailure(error));
            dispatch(alert("Post Failed, Please Try Again"));
    
        });
    }
}