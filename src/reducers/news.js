import { 
  START_FETCH_NEWS, 
  SUCCESS_FETCH_NEWS, 
  ERROR_FETCH_NEWS,
  START_FETCH_TAGS,
  SUCCESS_FETCH_TAGS,
  ERROR_FETCH_TAGS
} from 'actionTypes/news';

const initialState = {
  news: [],
  tags: [],
  currentTag: '',
  index: 0,
  loading: false,
  error: null
};
  
  export default function test(state = initialState, action) {
    switch (action.type) {
      case START_FETCH_NEWS:
        return { ...state, loading: true};
      case SUCCESS_FETCH_NEWS:
        return { 
          ...state, 
          news: action.payload.news,
          tags: action.payload.tags, 
          currentTag: action.payload.currentTag, 
          index: action.payload.index, 
          loading: false
        };
      case ERROR_FETCH_NEWS:
        return {
          ...state,
          error: action.payload.error,
        }
      case START_FETCH_TAGS:
        return { ...state, loading: true};
      case SUCCESS_FETCH_TAGS:
        return { ...state, tags: action.payload, loading: false};
      case ERROR_FETCH_TAGS:
        return { ...state, error: action.payload, loading: false};
      default:
        return state;
    }
  }