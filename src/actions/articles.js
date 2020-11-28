import axios from "axios";
import { SERVER_URL } from "../utils/apiUtils"
import { alert } from "../actions/alerts"
import { data } from "jquery";

export const GET_CATEGORIES_SUCCESS = "get_categories_success";
export const GET_CATEGORIES_FAILURE = "get_categories_failure";
export const GET_ARTICLES_SUCCESS = "get_articles_success";
export const GET_ARTICLES_FAILURE = "get_articles_failure";
export const POST_STORY_SUCCESS = "post_article_success";
export const POST_STORY_FAILURE = "post_article_failure";
export const DELETE_STORY_SUCCESS = "DELETE_STORY_SUCCESS";
export const GET_ARTICLE_TAGS_SUCCESS = "get_article_tags_success";
export const SET_ARTICLE_TAGS = "set_article_tags";
export const GET_COMMUNITY_RECENT_STORIES_SUCCESS = "get_community_recent_stories_success";
export const GET_COMMUNITY_POPULAR_STORIES_SUCCESS = "get_community_popular_stories_success";
export const GET_COMMUNITY_RECENT_ARTICLES_SUCCESS = "get_community_recent_articles_success";
export const GET_COMMUNITY_POPULAR_ARTICLES_SUCCESS = "get_community_popular_articles_success";
export const GET_ONEARTICLE_SUCCESS = "get_article_success";
export const GET_ONEARTICLE_FAILURE = "get_article_failure";
export const POST_COMMENT_SUCCESS = "post_comment_success";
export const POST_COMMENT_FAILURE = "post_comment_failure";
export const POST_COMMENT_REPLY_SUCCESS = "post_comment_success";
export const POST_COMMENT_REPLY_FAILURE = "post_comment_failure";
export const GET_COMMENTS_SUCCESS = "get_comments_success";
export const GET_COMMENTS_FAILURE = "get_comments_failure";
export const GET_RELATED_ARTICLES_SUCCESS = "get_related_articles_success";
export const GET_RELATED_ARTICLES_FAILURE = "get_related_articles_failure";
export const POST_THUMB_UP_SUCCESS = "post_thumb_up_success";
export const POST_THUMB_UP_FAILURE = "post_thumb_up_failure";
export const SUBSCRIBE_MODAL_SHOW = "subscribe_modal_show";
export const SUBSCRIBE_MODAL_HIDE = "subscribe_modal_hide";
export const SUBSCRIBE_SUCCESS = "subscribe_success";
export const SUBSCRIBE_FAILURE = "subscribe_failure";
export const GET_SUBSCRIBE_ITEMS_SUCCESS = "get_subscribe_items_success";
export const GET_SUBSCRIBE_ITEMS_FAILURE = "get_subscribe_items_failure";
export const GET_SUBSCRIBE_RECENT_ARTICLE_SUCCESS = "get_subscribe_recent_article_success";
export const GET_SUBSCRIBE_POPULAR_ARTICLE_SUCCESS = "get_subscribe_popular_article_success";
export const GET_SUBSCRIBE_RECENT_ARTICLE1_SUCCESS = "get_subscribe_recent_article1_success";
export const GET_SUBSCRIBE_POPULAR_ARTICLE1_SUCCESS = "get_subscribe_popular_article1_success";  
export const GET_LINK_PREVIEW_SUCCESS = "get_link_article_success";
export const GET_LINK_PREVIEW_FAILURE = "get_link_article_failure";
export const POST_NEWS_ARTICLE_SUCCESS = "post_news_article_success";
export const POST_NEWS_ARTICLE_FAILURE = "post_news_article_failure";
export const GET_CATEGORY_SUCCESS = "get_category_success";
export const GET_USER_ARTICLES_SUCCESS = "GET_USER_ARTICLES_SUCCESS";
export const GET_USER_STORIES_SUCCESS = "GET_USER_STORIES_SUCCESS";
export const GET_USER_FOLLOWERS_SUCCESS = "GET_USER_FOLLOWERS_SUCCESS";
export const GET_USER_FOLLOWINGS_SUCCESS = "GET_USER_FOLLOWINGS_SUCCESS";
export const POST_USER_FOLLOW_SUCCESS = "POST_USER_FOLLOW_SUCCESS";
export const POST_USER_BOOKMARK_SUCESS = "POST_USER_BOOKMARK_SUCCESS";
export const GET_USER_BOOKMARK_SUCCESS = "GET_USER_BOOKMARK_SUCCESS";
export const ADD_SUBSCRIBE_ITEM_SUCCESS = "ADD_SUBSCRIBE_ITEM";
export const REMOVE_SUBSCRIBE_ITEM_SUCCESS = "REMOVE_SUBSCRIBE_ITEM";
export const GET_ARTICLES_BY_CATEGORYID_SUCCESS = "GET_ARTICLES_BY_CATEGORYID_SUCCESS";
export const GET_ARTICLE_SEARCH_SUCCESS = "GET_ARTICLE_SEARCH_RESULT_SUCCESS";


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

function getCommunityRecentArticlesSuccess(payload){
    return {
        type: GET_COMMUNITY_RECENT_ARTICLES_SUCCESS,
        payload: payload
    } 
}

function getCommunityPopularArticlesSuccess(payload){
    return {
        type: GET_COMMUNITY_POPULAR_ARTICLES_SUCCESS,
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

function postCommentSuccess(payload){
    return {
        type: POST_COMMENT_SUCCESS,
        payload: payload
    }
}

function postCommentFailure() {
    return {
        type: POST_COMMENT_FAILURE
    }
}

function postCommentReplySuccess(payload) {
    return {
        type: POST_COMMENT_REPLY_SUCCESS,
        payload: payload
    }
}

function postCommentReplyFailure(){
    return {
        type: POST_COMMENT_REPLY_FAILURE
    }
}

function getCommentsSuccess(payload){
    return {
        type:GET_COMMENTS_SUCCESS,
        payload: payload
    }
}

function getCommentsFailure(){
    return {
        type: GET_COMMENTS_FAILURE
    }
}

function getRelatedArticlesSuccess(payload){
    return {
        type: GET_RELATED_ARTICLES_SUCCESS,
        payload: payload
    }
}

function getRelatedArticlesFailure(){
    return {
        type: GET_RELATED_ARTICLES_FAILURE
    }
}

function postThumbUpSuccess(payload){
    return {
        type: POST_THUMB_UP_SUCCESS,
        payload: payload
    }
}

function subModalShowSuccess(){
    return{
        type: SUBSCRIBE_MODAL_SHOW
    }
}

function subModalHideSuccess(){
    return {
        type: SUBSCRIBE_MODAL_HIDE
    }
}

function subscribeSuccess(){
    return {
        type: SUBSCRIBE_SUCCESS
    }
}

function subscribeFailure(){
    return {
        type: SUBSCRIBE_FAILURE
    }
}

function getSubscribeItemsSuccess(payload){
    return {
        type: GET_SUBSCRIBE_ITEMS_SUCCESS,
        payload
    }
}

function getSubscribeRecentArticleSuccess(payload){
    return {
        type: GET_SUBSCRIBE_RECENT_ARTICLE_SUCCESS,
        payload
    }
}

function getSubscribePopularArticleSuccess(payload){
    return {
        type: GET_SUBSCRIBE_POPULAR_ARTICLE_SUCCESS,
        payload
    }
}

function getSubscribeRecentArticle1Success(payload){
    return {
        type: GET_SUBSCRIBE_RECENT_ARTICLE1_SUCCESS,
        payload
    }
}

function getSubscribePopularArticle1Success(payload){
    return {
        type: GET_SUBSCRIBE_POPULAR_ARTICLE1_SUCCESS,
        payload
    }
}

function getLinkPreviewSuccess(payload){
    return {
        type: GET_LINK_PREVIEW_SUCCESS,
        payload
    }
}

function getLinkPreviewFailure(){
    return {
        type: GET_LINK_PREVIEW_FAILURE
    }
}

function postNewsArticleSuccess(payload){
    return {
        type: POST_NEWS_ARTICLE_SUCCESS,
        payload
    }
}

function postNewsArticleFailure(){
    return {
        type: POST_NEWS_ARTICLE_FAILURE
    }
}

function getCategorySuccess(payload){
    return {
        type: GET_CATEGORY_SUCCESS,
        payload
    }
}

function getUserStoriesSuccess(payload){
    return{
        type: GET_USER_STORIES_SUCCESS,
        payload
    }
}

function getUserArticlesSuccess(payload){
    return {
        type: GET_USER_ARTICLES_SUCCESS,
        payload
    }
}

function getUserFollowersSuccess(payload){
    return {
        type: GET_USER_FOLLOWERS_SUCCESS,
        payload
    }
}

function getUserFollowingsSuccess(payload){
    return {
        type: GET_USER_FOLLOWINGS_SUCCESS,
        payload
    }
}

function postUserFollowSuccess(){
    return {
        type: POST_USER_FOLLOW_SUCCESS
    }
}

function postUserBookmarkSuccess(){
    return {
        type: POST_USER_BOOKMARK_SUCESS
    }
}

function getUserBookmarkSuccess(payload){
    return {
        type: GET_USER_BOOKMARK_SUCCESS,
        payload
    }
}

function getArticlesByCategoryIdSuccess(payload){
    return {
        type: GET_ARTICLES_BY_CATEGORYID_SUCCESS,
            payload
    }
}

function getArticleSearchSuccess(payload){
    return {
        type: GET_ARTICLE_SEARCH_SUCCESS,
        payload
    }
}

export function addSubscribeItem(payload){
    return {
        type: ADD_SUBSCRIBE_ITEM_SUCCESS,
        payload
    }
}

export function removeSubscribeItem(payload){
    return {
        type: REMOVE_SUBSCRIBE_ITEM_SUCCESS,
        payload
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
        .get(SERVER_URL + "/articles?_limit=5&_where[0][outer]=true")
        .then(response => {
            // Handle success.
            //console.log("Articles:");
            console.log(response.data);
            for(let i in response.data){
                let str = response.data[i].outer_url;
                let str1 = str.split("/");
                let str2 = str1[2];
                let str3 = str2.split(".");
                let str4 = str3[1];
                response.data[i].company = str4;
            }
            dispatch(getArticlesSucces(response.data));          
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            dispatch(getArticlesFailure(error.response));
        });
    }
}

export function getCommunityStories(id){

    //console.log("article_category : " + id);
    //console.log(SERVER_URL + "/articles?_limit=4&_sort=published_at:desc&_where[0][outer]=false&_where[1][article_category]=" + id);
        
        return dispatch => {
            axios
            .get(SERVER_URL + "/articles?_limit=4&_sort=published_at:desc&_where[0][outer]=false&_where[1][article_category]=" + id)
            //.get(SERVER_URL + "/articles?_limit=30&_sort=pubilshed_at:desc&_where[0][outer]=false&_where[1][id]=" + id)
            .then(response => {
                // Handle success.
                
                //console.log("getCommunityRecentStories response arrived");
                //console.log(response.data); 

                dispatch(getCommunityRecentArticlesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                //console.log('An error occurred:', error.response);
                
            });

            axios
            .get(SERVER_URL + "/articles?_limit=4&_sort=likes:asc&_where[0][outer]=false&_where[1][article_category]=" + id)
            //.get(SERVER_URL + "/articles?_limit=30&_sort=pubilshed_at:desc&_where[0][outer]=false&_where[1][id]=" + id)
            .then(response => {
                // Handle success.
                
                //console.log("getCommunityPopularStories response arrived");
                //console.log(response.data); 

                dispatch(getCommunityPopularArticlesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                //console.log('An error occurred:', error.response);
                
            });
        }    

}

export function getCommunityArticles(id){

    //console.log("article_category : " + id);
    //console.log(SERVER_URL + "/articles?_limit=4&_sort=published_at:desc&_where[0][outer]=false&_where[1][article_category]=" + id);
        
        return dispatch => {
            axios
            .get(SERVER_URL + "/articles?_limit=4&_sort=published_at:desc&_where[0][outer]=true&_where[1][article_category]=" + id)
            //.get(SERVER_URL + "/articles?_limit=30&_sort=pubilshed_at:desc&_where[0][outer]=false&_where[1][id]=" + id)
            .then(response => {
                // Handle success.
                
                //console.log("getCommunityRecentStories response arrived");
                //console.log(response.data); 

                dispatch(getCommunityRecentArticlesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                //console.log('An error occurred:', error.response);
                
            });

            axios
            .get(SERVER_URL + "/articles?_limit=4&_sort=likes:asc&_where[0][outer]=true&_where[1][article_category]=" + id)
            //.get(SERVER_URL + "/articles?_limit=30&_sort=pubilshed_at:desc&_where[0][outer]=false&_where[1][id]=" + id)
            .then(response => {
                // Handle success.
                
                //console.log("getCommunityPopularStories response arrived");
                //console.log(response.data); 

                dispatch(getCommunityPopularArticlesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                //console.log('An error occurred:', error.response);
                
            });
        }    

}

export function postStory(formData, data1) {
    return dispatch => {

       
        console.log("post story here");
        console.log(data1);

        axios
            .post(SERVER_URL  + "/articles", formData)
            .then( response => {
                //handle success
                console.log("Post Success");
                console.log(response.data);
                
                data1.article_id = parseInt(response.data.id);
                console.log(data1.article_id);

                if (data1.article_tags.length > 0){
                    axios
                        .post(SERVER_URL  + "/article-tags-multiple", data1)
                        .then( response => {
                            //handle success
                            console.log("Post ArticleTags Success");
                            console.log(response.data);
  
                            dispatch(alert("Post Story Success!"));                    
                        })
                        .catch( error => {
                            //handle error
                            console.log('An error occurred:', error.response);
                            dispatch(alert("Post Story Failed!"));
                        });
                } else {
                    dispatch(alert("Post Story Success!"));
                }               

            })
            .catch( error => {
                //handle error
                console.log('An error occurred:', error.response);

                //dispatch(postArticleFailure());
                dispatch(alert("Post Story Failed!"));
            });
    }
}

export function editStory(formData, articleId) {
    return dispatch => {

        console.log("edit story here");

        axios
            .put(SERVER_URL  + "/articles/" + articleId, formData)
            .then( response => {
                //handle success
                console.log("Post Success");
                console.log(response.data);
                                
                dispatch(alert("Edit Story Success!"));
              
            })
            .catch( error => {
                //handle error
                console.log('Edit story, An error occurred:', error.response);

                //dispatch(postArticleFailure());
                dispatch(alert("Edit Story Failed!"));
            });
    }
}

export function setTags(payload){
    return {
        type: SET_ARTICLE_TAGS,
        payload: payload
    }
}

export function getTagsSuccess(payload) {
    return {
        type: GET_ARTICLE_TAGS_SUCCESS,
        payload
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

            console.log("category ID: " + response.data.article_category.id);

            const article_category = response.data.article_category.id;


            console.log("get related article start: ");
            axios
            .get(SERVER_URL + "/articles?id_nin="+ id +"&_where[1][article_category]=" + article_category)
            .then(response => {
                // Handle success.
                
                console.log("getRelated Articles response arrived");
                console.log(response.data); 
    
                dispatch(getRelatedArticlesSuccess(response.data));     
            })
            .catch(error => {
                // Handle error.
                console.log('getRelated Articles error occurred:', error.response);
                
            });
            

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

        //console.log("post comment data: ");
        //console.log(config.users_permissions_user);
        //console.log(config.article);
        //console.log(config.content);
        
        axios                
        .post(SERVER_URL + '/comments', config)
        .then(response => {
            // Handle success.
            console.log("Post Comment Success!");
            console.log(response.data);

            //dispatch(postArticleSuccess());
            dispatch(alert("Subscribed successfully."));
            dispatch(postCommentSuccess(response.data));
           
            
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
      
            //dispatch(loginFailure(error));
            dispatch(alert("Subscribe Failed, Please Try Again"));
            
        });
    }
}

export function postCommentReply(config){
    return dispatch => {

        console.log("post comment data: ");
        console.log(config.users_permissions_user);
        console.log(config.comment);
        console.log(config.content);
        
        axios                
        .post(SERVER_URL + '/comment-replies', config)
        .then(response => {
            // Handle success.
            console.log("Post Comment Reply Success!");
            console.log(response.data);

            //dispatch(postArticleSuccess());
            dispatch(alert("Comment Reply created was posted successfully."));
            dispatch(postCommentReplySuccess(response.data));
            
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
      
            //dispatch(loginFailure(error));
            dispatch(alert("Post Failed, Please Try Again"));
    
        });
    }   
}

export function getComments(id){
    console.log("article_id : " + id);
    console.log(SERVER_URL + "/comments?_where[0][article]=" + id);
        
    return dispatch => {
        axios
        .get(SERVER_URL + "/comments?_where[0][article]=" + id)
        .then(response => {
            // Handle success.
            
            console.log("getComments response arrived");
            console.log(response.data); 

            dispatch(getCommentsSuccess(response.data));     
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            
        });
    }    
}

export function getRelatedArticles(id){

    console.log("article_id : " + id);
    console.log(SERVER_URL + "/articles?_limit=4&_where[0][article_category]=" + id);
        
    return dispatch => {
        axios
        .get(SERVER_URL + "/articles?_where[article_category]=" + id)
        .then(response => {
            // Handle success.
            
            console.log("getRelated Articles response arrived");
            console.log(response.data); 

            dispatch(getRelatedArticlesSuccess(response.data));     
        })
        .catch(error => {
            // Handle error.
            console.log('getRelated Articles error occurred:', error.response);
            
        });
    }
}

export function postThumbUp(id, likes, userId){
    return dispatch => {

        console.log("article_id : " + id);
        console.log(SERVER_URL + "/articles/" + id);

        const config = {likes:  parseInt(likes) + 1}

        axios                
        .post(SERVER_URL + '/article-likes', {article_id: parseInt(id), user_id: parseInt(userId)})
        .then(response => {
            // Handle success.
            console.log("Post Article Like Success!");
            console.log(response.data); 

            axios                
                .put(SERVER_URL + '/articles/' + id, config)
                .then(response => {
                    // Handle success.
                    //console.log("Post Comment Success!");
                    //console.log(response.data);

                    //dispatch(postArticleSuccess());
                    dispatch(alert("Request created was posted successfully."));
                    dispatch(postThumbUpSuccess(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('An error occurred:', error.response);
            
                    //dispatch(loginFailure(error));
                    dispatch(alert("Request Was Failed, Please Try Again"));
            
                });          
            
        })
        .catch(error => {
            // Handle error.
            console.log('Post Article Like An error occurred:', error.response);
            return;
        });      
    }
}

export function checkThumbUp(articleId, userId){

    console.log("checkThumbUp: " + articleId, userId);

    let articleId1 = parseInt(articleId);
    let userId1 = parseInt(userId);
    
    axios
        .get(SERVER_URL + "/article-likes?_where[0][article_id]=" + articleId1 + "&_where[1][user_id]=" + userId1)
        .then(response => {
            // Handle success.
            console.log("Article Like Response:");
            console.log(response.data);

            if (response.data.length > 0) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => {
            // Handle error.
            console.log('Article Like Response, An error occurred:', error.response);
            return false;
        });
}

export function subModalShow(){
    return dispatch => {
        dispatch(subModalShowSuccess());
    }
}

export function subModalHide(){
    return dispatch => {
        dispatch(subModalHideSuccess());
    }
}

export function subscribe(userId, categoryIds){
    return dispatch => {

        if(userId != null){
            console.log(userId);
            console.log(categoryIds);
            const config = {
                user_id: userId,
                category_ids: categoryIds
            }

            axios                
            .post(SERVER_URL + '/subscribe-categories-multiple', config)
            .then(response => {
                // Handle success.
                console.log("Post Comment Success!");
                console.log(response.data);

                dispatch(alert("Comment created was posted successfully."));
            })
            .catch(error => {
                // Handle error.
                //console.log('An error occurred:', error.response);
                dispatch(alert("Post Failed, Please Try Again"));
            });
        } else {
            dispatch(alert("Please Sign In first!"));
        }
    }
}

export function getSubscribeRecentArticle(userId){
    return dispatch => {

        axios
        .get(SERVER_URL + "/subscribe-categories?_where[0][user_id]=" + userId)
        .then(response => {
            // Handle success.
            console.log("Subscribe Categories responsive arrived:")
            console.log(response.data);
            const categories = response.data;
            let n = categories ? categories.length : 0;
            let param = "";
            
            if (n > 0) {

                for (let i = 0; i < n; i++){
                    if (i == 0) {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    } else {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    }
                    
                }

                //console.log( "/articles?_limit=16&_sort=published_at:ASC" + param);


                axios
                .get(SERVER_URL + "/articles?_limit=16&_sort=published_at:DESC&_where[outer]=false" + param)
                .then(response => {
                    // Handle success.
                    //console.log("subscribe article response arrived.");
                    //console.log(response.data);
                    
                    dispatch(getSubscribeRecentArticleSuccess(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('subscribe An error occurred:', error.response);
                    
                });

            }  else {
                axios
                    .get(SERVER_URL + "/articles?_limit=16&_sort=published_at:DESC")
                    .then(response => {
                        // Handle success.
                        //console.log("subscribe article response arrived.");
                        //console.log(response.data);
                        
                        dispatch(getSubscribeRecentArticleSuccess(response.data));
                        
                    })
                    .catch(error => {
                        // Handle error.
                        //console.log('subscribe An error occurred:', error.response);
                        
                    });
            }       
        })
        .catch(error => {
            // Handle error.
            //console.log('category An error occurred:', error.response);
            
        });
    }
}

export function getSubscribePopularArticle(userId){
    return dispatch => {

        axios
        .get(SERVER_URL + "/subscribe-categories?_where[0][user_id]=" + userId)
        .then(response => {
            // Handle success.
            //console.log("Subscribe Categories responsive arrived:")
            //console.log(response.data);
            const categories = response.data;
            let n = categories ? categories.length : 0;
            let param = "";
            
            if (n > 0) {
              
                for (let i = 0; i < n; i++){
                    if (i == 0) {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    } else {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    }
                    
                }

                //console.log( "/articles?_limit=16&_sort=published_at:ASC" + param);


                axios
                .get(SERVER_URL + "/articles?_limit=16&_sort=likes:ASC&_where[outer]=false" + param)
                .then(response => {
                    // Handle success.
                    //console.log("subscribe article response arrived.");
                    //console.log(response.data);
                    
                    dispatch(getSubscribePopularArticleSuccess(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('subscribe An error occurred:', error.response);
                    
                });

            }   else {
                axios
                    .get(SERVER_URL + "/articles?_limit=16&_sort=likes:ASC")
                    .then(response => {
                        // Handle success.
                        //console.log("subscribe article response arrived.");
                        //console.log(response.data);
                        
                        dispatch(getSubscribePopularArticleSuccess(response.data));
                        
                    })
                    .catch(error => {
                        // Handle error.
                        //console.log('subscribe An error occurred:', error.response);
                        
                    });
            }      
        })
        .catch(error => {
            // Handle error.
            //console.log('category An error occurred:', error.response);
            
        });
    }
}

export function getSubscribeRecentArticleForVisitor(){
    return dispatch => {

                axios
                .get(SERVER_URL + "/articles?_limit=16&_sort=published_at:DESC&_where[outer]=false")
                .then(response => {
                    // Handle success.
                    //console.log("subscribe article response arrived.");
                    //console.log(response.data);
                    
                    dispatch(getSubscribeRecentArticleSuccess(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('subscribe An error occurred:', error.response);
                    
                });
          
    }
}

export function getSubscribePopularArticleForVisitor(){
    return dispatch => {

       
                axios
                    .get(SERVER_URL + "/articles?_limit=16&_sort=likes:ASC")
                    .then(response => {
                        // Handle success.
                        //console.log("subscribe article response arrived.");
                        //console.log(response.data);
                        
                        dispatch(getSubscribePopularArticleSuccess(response.data));
                        
                    })
                    .catch(error => {
                        // Handle error.
                        //console.log('subscribe An error occurred:', error.response);
                        
                    });     
    }
}

export function getSubscribeRecentArticle1(userId){
    return dispatch => {

        axios
        .get(SERVER_URL + "/subscribe-categories?_where[0][user_id]=" + userId)
        .then(response => {
            // Handle success.
            console.log("Subscribe Categories responsive arrived:")
            console.log(response.data);
            const categories = response.data;
            let n = categories ? categories.length : 0;
            let param = "";
            
            if (n > 0) {

                for (let i = 0; i < n; i++){
                    if (i == 0) {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    } else {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    }
                    
                }

                //console.log( "/articles?_limit=16&_sort=published_at:ASC" + param);


                axios
                .get(SERVER_URL + "/articles?_limit=16&_sort=published_at:DESC&_where[outer]=true" + param)
                .then(response => {
                    // Handle success.
                    //console.log("subscribe article response arrived.");
                    //console.log(response.data);
                    
                    dispatch(getSubscribeRecentArticle1Success(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('subscribe An error occurred:', error.response);
                    
                });

            }  else {
                axios
                    .get(SERVER_URL + "/articles?_limit=16&_sort=published_at:DESC")
                    .then(response => {
                        // Handle success.
                        //console.log("subscribe article response arrived.");
                        //console.log(response.data);
                        
                        dispatch(getSubscribeRecentArticle1Success(response.data));
                        
                    })
                    .catch(error => {
                        // Handle error.
                        //console.log('subscribe An error occurred:', error.response);
                        
                    });
            }       
        })
        .catch(error => {
            // Handle error.
            //console.log('category An error occurred:', error.response);
            
        });
    }
}

export function getSubscribePopularArticle1(userId){
    return dispatch => {

        axios
        .get(SERVER_URL + "/subscribe-categories?_where[0][user_id]=" + userId)
        .then(response => {
            // Handle success.
            //console.log("Subscribe Categories responsive arrived:")
            //console.log(response.data);
            const categories = response.data;
            let n = categories ? categories.length : 0;
            let param = "";
            
            if (n > 0) {
              
                for (let i = 0; i < n; i++){
                    if (i == 0) {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    } else {
                        param = param + "&_where[_or][" + i + "][article_category]=" + categories[i].category_id;
                    }
                    
                }

                //console.log( "/articles?_limit=16&_sort=published_at:ASC" + param);


                axios
                .get(SERVER_URL + "/articles?_limit=16&_sort=likes:ASC&_where[outer]=true" + param)
                .then(response => {
                    // Handle success.
                    //console.log("subscribe article response arrived.");
                    //console.log(response.data);
                    
                    dispatch(getSubscribePopularArticle1Success(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('subscribe An error occurred:', error.response);
                    
                });

            }   else {
                axios
                    .get(SERVER_URL + "/articles?_limit=16&_sort=likes:ASC")
                    .then(response => {
                        // Handle success.
                        //console.log("subscribe article response arrived.");
                        //console.log(response.data);
                        
                        dispatch(getSubscribePopularArticle1Success(response.data));
                        
                    })
                    .catch(error => {
                        // Handle error.
                        //console.log('subscribe An error occurred:', error.response);
                        
                    });
            }      
        })
        .catch(error => {
            // Handle error.
            //console.log('category An error occurred:', error.response);
            
        });
    }
}

export function getSubscribeRecentArticle1ForVisitor(){
    return dispatch => {

                axios
                .get(SERVER_URL + "/articles?_limit=16&_sort=published_at:DESC&_where[outer]=true")
                .then(response => {
                    // Handle success.
                    //console.log("subscribe article response arrived.");
                    //console.log(response.data);
                    
                    dispatch(getSubscribeRecentArticle1Success(response.data));
                    
                })
                .catch(error => {
                    // Handle error.
                    //console.log('subscribe An error occurred:', error.response);
                    
                });
          
    }
}

export function getSubscribePopularArticle1ForVisitor(){
    return dispatch => {

       
                axios
                    .get(SERVER_URL + "/articles?_limit=16&_sort=likes:ASC")
                    .then(response => {
                        // Handle success.
                        //console.log("subscribe article response arrived.");
                        //console.log(response.data);
                        
                        dispatch(getSubscribePopularArticle1Success(response.data));
                        
                    })
                    .catch(error => {
                        // Handle error.
                        //console.log('subscribe An error occurred:', error.response);
                        
                    });     
    }
}

export function getLinkPreview1(url){
    return dispatch => {

        console.log("url : " + url);

        let config = {url : url};

        axios                
        .post(SERVER_URL + '/get-link-previews', config)
        .then(response => {
            // Handle success.
            console.log("Get Link Preview Comment Success!");
            console.log(response.data);
    
            dispatch(alert("Link successfully."));
        
            const data = {
                title: !!response.data.title ? response.data.title : "",
                image: !!response.data.image ? response.data.image : "",
                description: !!response.data.description ? response.data.description : "",
                link: !!response.data.link ? response.data.link : "",
                isLinked: true
            }

            dispatch(getLinkPreviewSuccess(data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
      
            //dispatch(loginFailure(error));
            dispatch(alert("Link Failed, Please Try Again"));
        });
    }
}

export function postNewsArticle(config){
    return dispatch => {
        console.log(config);

        axios                
        .post(SERVER_URL + '/articles', config)
        .then(response => {
            // Handle success.
            console.log("Post News Article Success!");
            console.log(response.data);

            //dispatch(postArticleSuccess());
            dispatch(alert("Submitted successfully."));
            dispatch(postNewsArticleSuccess(response.data));
           
            
        })
        .catch(error => {
            // Handle error.
            console.log('Post News Article, An error occurred:', error.response);
      
            dispatch(alert("Submit Failed, Please Try Again"));
            
        });
    }
}

export function getSubscribeItems(userId){
    return dispatch => {

        console.log(userId);
        axios
        .get(SERVER_URL + "/subscribe-categories?_where[0][user_id]=" + userId)
        .then(response => {
            // Handle success.
            console.log("get Subscribe Items:");
            console.log(response.data);

            let subscribeItems = [];
            let items = [];
            items = response.data;
            let n = items.length;
            for(let i = 0; i < n; i++){
                let item = items[i];
                subscribeItems.push(parseInt(item.category_id));
            }   

            dispatch(getSubscribeItemsSuccess(subscribeItems));          
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            dispatch(alert("Some errors found"));
        });
    }
}

export function getCategory(categoryId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/article-categories/" + categoryId)
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getCategorySuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            
        });
    }
}

export function getUserStories(userId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/articles?_where[0][outer]=false&_where[1][article_author]=" + userId)
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getUserStoriesSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            
        });
    }
}

export function getUserArticles(userId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/articles?_where[0][outer]=true&_where[1][article_author]=" + userId)
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getUserArticlesSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            
        });
    }
}

export function getTags(article_id){
    console.log("get tags" + article_id);
    console.log(SERVER_URL + "/article-tags?_where[0][article_id]=" + article_id);
    return dispatch => {
        axios
        .get(SERVER_URL + "/article-tags?_where[0][article_id]=" + article_id)
        .then(response => {
            // Handle success.
            console.log("get tags success:");
            console.log(response.data);     
            dispatch(getTagsSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            console.log('get tags An error occurred:', error.response);   
        });
    }
}

export function postUserBookmark(config){
    return dispatch => {
        console.log(config);

        axios                
        .post(SERVER_URL + '/article-bookmarks', config)
        .then(response => {
            // Handle success.
            console.log("Post Bookmark Success!");
            console.log(response.data);
            
            dispatch(alert("Submitted successfully."));      
            
        })
        .catch(error => {
            // Handle error.
            console.log('Post Bookmark, An error occurred:', error.response);
      
            dispatch(alert("Submit Failed, Please Try Again"));         
        });
    }
}

export function getUserBookmark(userId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/article-bookmarks-custom/" + userId)
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getUserBookmarkSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            
        });
    }
}

export function postUserFollow(config){
    return dispatch => {
        console.log(config);

        axios                
        .post(SERVER_URL + '/user-follows', config)
        .then(response => {
            // Handle success.
            console.log("Post User Follow Success!");
            console.log(response.data);
            
            dispatch(alert("Submitted successfully."));
           
            
        })
        .catch(error => {
            // Handle error.
            console.log('Post Bookmark, An error occurred:', error.response);
      
            dispatch(alert("Submit Failed, Please Try Again"));         
        });
    }
}

export function getUserFollower(userId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/user-follows-followers/" + userId)
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getUserFollowersSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
        });
    }
}

export function getUserFollowing(userId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/user-follows-followings/" + userId)
        .then(response => {
            // Handle success.
            //console.log(response.data);     
            dispatch(getUserFollowingsSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
        });
    }
}

export function getArticlesByCategoryId(categoryId){
    return dispatch => {
        axios
        .get(SERVER_URL + "/articles?_limit=5&_where[0][outer]=true&_where[1][article_category]=" + categoryId)
        .then(response => {
            // Handle success.
            console.log("Get Articles By CategoryId:");
            console.log(response.data);
            dispatch(getArticlesByCategoryIdSuccess(response.data));          
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            dispatch(getArticlesFailure(error.response));
        });
    }
}

export function deleteStory(articleId){
    return dispatch => {
        axios
        .delete(SERVER_URL + "/articles/" + articleId)
        .then(response => {
            // Handle success.
            console.log("Get Articles By CategoryId:");
            console.log(response.data);
            dispatch(alert("Submitted Successfully."));          
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred:', error.response);
            dispatch(alert("Submitted Failed."));
        });
    }
}

export function deleteBookmark(config){
    return dispatch => {
        console.log(config);

        axios                
        .post(SERVER_URL + '/article-bookmarks-delete', config)
        .then(response => {
            // Handle success.
            console.log("Success!");
            console.log(response.data);

            dispatch(alert("Submitted successfully."));          
            
        })
        .catch(error => {
            // Handle error.
            console.log('Delete Bookmark, An error occurred:', error.response);
      
            dispatch(alert("Failed, Please Try Again"));
            
        });
    }
}

export function deleteFollowing(config){
    return dispatch => {
        console.log(config);

        axios                
        .post(SERVER_URL + '/user-follows-delete', config)
        .then(response => {
            // Handle success.
            console.log("Success!");
            console.log(response.data);

            dispatch(alert("Submitted successfully."));          
            
        })
        .catch(error => {
            // Handle error.
            console.log('Delete Following, An error occurred:', error.response);
      
            dispatch(alert("Failed, Please Try Again"));
            
        });
    }
}

export function getArticleSearch(config){
    return dispatch => {
        console.log(config);

        axios                
        .post(SERVER_URL + '/article-search-custom', config)
        .then(response => {
            // Handle success.
            console.log("Post Search Success!");
            console.log(response.data);
            dispatch(getArticleSearchSuccess(response.data));
        })
        .catch(error => {
            // Handle error.
            console.log('Post Search, An error occurred:', error.response);
            dispatch(alert("Search Failed, Please Try Again"));         
        });
    }
}


