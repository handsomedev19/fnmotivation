import { GET_CATEGORIES_SUCCESS, GET_CATEGORY_SUCCESS, POST_COMMENT_SUCCESS, POST_THUMB_UP_SUCCESS } from "../actions/articles";
import { GET_ARTICLES_SUCCESS } from "../actions/articles";
import { POST_STORY_SUCCESS } from "../actions/articles";
import { POST_STORY_FAILURE } from "../actions/articles";
import { GET_ARTICLE_TAGS_SUCCESS } from  "../actions/articles";
import { SET_ARTICLE_TAGS } from "../actions/articles";
import { GET_COMMUNITY_RECENT_STORIES_SUCCESS } from "../actions/articles";
import { GET_COMMUNITY_POPULAR_STORIES_SUCCESS } from "../actions/articles";
import { GET_ONEARTICLE_SUCCESS } from "../actions/articles";
import { GET_ONEARTICLE_FAILURE } from "../actions/articles";
import { POST_COMMENT_REPLY_SUCCESS } from "../actions/articles";
import { POST_COMMENT_REPLY_FAILURE } from "../actions/articles";
import { GET_COMMENTS_SUCCESS } from "../actions/articles";
import { GET_RELATED_ARTICLES_SUCCESS } from "../actions/articles";
import { SUBSCRIBE_MODAL_SHOW } from "../actions/articles";
import { SUBSCRIBE_MODAL_HIDE } from "../actions/articles";
import { GET_SUBSCRIBE_RECENT_ARTICLE_SUCCESS } from "../actions/articles";
import { GET_SUBSCRIBE_POPULAR_ARTICLE_SUCCESS } from "../actions/articles";
import { GET_LINK_PREVIEW_SUCCESS } from "../actions/articles";
import { GET_LINK_PREVIEW_FAILURE } from "../actions/articles";
import { POST_NEWS_ARTICLE_SUCCESS } from "../actions/articles";
import { 
    GET_SUBSCRIBE_ITEMS_SUCCESS,
    GET_USER_STORIES_SUCCESS,
    GET_USER_ARTICLES_SUCCESS,
    GET_USER_FLLOWERS_SUCCESS,
    GET_USER_FOLLOWINGS_SUCCESS

} from "../actions/articles";

const initialState = {
    categories: null,
    articles: null,
    meessage: null,
    tags: {},
    communityRecentStories: null,
    communityPopularStories: null,
    oneArticle: {},
    comments: {},
    commentReplies: {},
    relatedArticles: null,
    subModalShow: false,
    subscribeRecentStories: null,
    subscribePopularStories: null,
    linkPreviewData: {
        title: null,
        image: null,
        link: null,
        description: null,
        isLinked: false
    },
    subscribeItems: {},
    category: {},
    userStories: {},
    userArticles: {}
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

        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        
        case POST_COMMENT_REPLY_SUCCESS:
            return {
                ...state,
                commentReplies: action.payload
            }

        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload
            }

        case GET_RELATED_ARTICLES_SUCCESS:
            return {
                ...state,
                relatedArticles: action.payload
            }

        case POST_THUMB_UP_SUCCESS:
            return {
                ...state,
                oneArticle: action.payload
            }

        case SUBSCRIBE_MODAL_SHOW:
            return {
                ...state,
                subModalShow: true
            }

        case SUBSCRIBE_MODAL_HIDE:
            return {
                ...state,
                subModalShow: false
            }

        case GET_SUBSCRIBE_RECENT_ARTICLE_SUCCESS:
            return {
                ...state,
                subscribeRecentStories: action.payload
            }

        case GET_SUBSCRIBE_POPULAR_ARTICLE_SUCCESS:
            return {
                ...state,
                subscribePopularStories: action.payload
            }

        case GET_LINK_PREVIEW_SUCCESS:
            return {
                ...state,
                linkPreviewData : Object.assign({}, state.linkPreviewData, action.payload)
            }

        case GET_LINK_PREVIEW_FAILURE:
            return {
                ...state,
                linkPreviewData: {title: null, image: null, link: null, description: null, isLinked: false}
            }

        case POST_NEWS_ARTICLE_SUCCESS:
            return {
                ...state,
                linkPreviewData : {
                    title: null,
                    image: null,
                    link: null,
                    description: null,
                    isLinked: false
                }
            }

        case GET_SUBSCRIBE_ITEMS_SUCCESS:
            return {
                ...state,
                subscribeItems: action.payload
            }

        case GET_CATEGORY_SUCCESS:
            return {
                    ...state,
                    category: action.payload
                }
        
        case GET_USER_STORIES_SUCCESS:
            return {
                ...state,
                userStories: action.payload
            }

        case GET_USER_ARTICLES_SUCCESS:
                return {
                    ...state,
                    userArticles: action.payload
                }

        case GET_ARTICLE_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.payload
            }


        default :
            return state;
    }
}