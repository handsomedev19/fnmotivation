import { GET_CATEGORIES_SUCCESS } from "../actions/articles";
import { GET_ARTICLES_SUCCESS } from "../actions/articles";
import { POST_STORY_SUCCESS } from "../actions/articles";
import { POST_STORY_FAILURE } from "../actions/articles";
import { GET_ARTICLE_TAGS } from  "../actions/articles";
import { SET_ARTICLE_TAGS } from "../actions/articles";
import { GET_COMMUNITY_RECENT_STORIES_SUCCESS } from "../actions/articles";
import { GET_COMMUNITY_POPULAR_STORIES_SUCCESS } from "../actions/articles";
import { GET_ONEARTICLE_SUCCESS } from "../actions/articles";
import { GET_ONEARTICLE_FAILURE } from "../actions/articles";

const initialState = {
    categories: null,
    articles: null,
    meessage: null,
    tags: [],
    communityRecentStories: null,
    communityPopularStories: null,
    oneArticle: {},
};

export default function articles (state = initialState, action = {}) {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return { 
                ...state, 
                categories : action.payload
            };

        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles : action.payload
            }

        case POST_STORY_SUCCESS:
            return {
                ...state,
                meessage : "Your Post Story submitted successfuly"
            }

        case POST_STORY_FAILURE:
            return {
                ...state,
                meessage : "Your Submition was failed"
            }

        case GET_ARTICLE_TAGS:
            return {
                state
            }
        
        case  SET_ARTICLE_TAGS:
            return {
                ...state,
                tags: action.payload
            }

        case GET_COMMUNITY_RECENT_STORIES_SUCCESS:
            return {
                ...state,
                communityRecentStories: action.payload
            }
        
        case GET_COMMUNITY_POPULAR_STORIES_SUCCESS:
            return {
                ...state,
                communityPopularStories: action.payload
            }
        
        case GET_ONEARTICLE_SUCCESS:
            return {
                ...state,
                oneArticle: action.payload
            }


        default :
            return state;
    }
}