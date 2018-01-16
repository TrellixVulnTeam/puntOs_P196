import {
SUBMIT_REVIEW,
POST_REVIEW_CHANGE,
RESET_POST_REVIEW
} from '../actions/types';


const INITIAL_STATE = {
    businessID: '',
    date: '',
    text: '',
    rating: 0,
    caption: '',
    uid: '',
    username: '',
    images: [],
    loading: false,
    error: '',
    message: '',
    modalIsVisible: false,
    selectedImage: {},
    tallied: false,
    businessName: '',
    userIcon: '',
    attached: false
};

export default ( state=INITIAL_STATE, action ) => {
    switch(action.type){
        case SUBMIT_REVIEW:
            return { ...state, loading: true};
        case POST_REVIEW_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case RESET_POST_REVIEW:
            return INITIAL_STATE;
        default:
            return state;
    }
};
