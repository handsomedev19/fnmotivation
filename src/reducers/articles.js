import { GET_CATEGORIES_SUCCESS } from "../actions/articles";

const initialState = {
    categories: null
};

export default function articles (state = initialState, action = {}) {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS :
            return { ...state, 
                categories : action.payload
            };

        default :
            return state;
    }
}