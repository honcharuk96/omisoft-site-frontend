import axios from 'axios';

import { 
  START_FETCH_NEWS, 
  SUCCESS_FETCH_NEWS, 
  ERROR_FETCH_NEWS,
  START_FETCH_TAGS,
  SUCCESS_FETCH_TAGS,
  ERROR_FETCH_TAGS
} from 'actionTypes/news';

///////// NEWS ///////////

export const startFetchNews = () => ({
  type: START_FETCH_NEWS
});

export const successFetchNews = (news, index) => ({
  type: SUCCESS_FETCH_NEWS,
  payload: { 
    news,
    index,
  }
});

export const errorFetchNews = error => ({
  type: ERROR_FETCH_NEWS,
  payload: error
});

export const fetchNews = (tag) => async dispatch => {

  dispatch(startFetchNews());

  const resonse = axios.get(`http://ualegion.com:9999/api/v1/blog/posts/tag?tag=${tag}&page=0&size=10`);
  const data = resonse.data;
  
  

  // .then(responce => {
  //     const currentTag = responce.data[this.state.index].tag_en,
  //           tags = responce.data;

  //       this.setState({
  //       tags,
  //       currentTag,
  //     });
  //     this.updateNews(currentTag);
  //   });
}

///////// TAGS ///////////

export const startFetchTags = () => ({
  type: START_FETCH_TAGS
});

export const successFetchTags = response => ({
  type: SUCCESS_FETCH_TAGS,
  payload: response
});

export const errorFetchTags = error => ({
  type: ERROR_FETCH_TAGS,
  payload: error
});

export const fetchTags = () => async dispatch => {

  dispatch(startFetchTags());

  try {
    const resonse = await axios.get('http://ualegion.com:9999/api/v1/tags/all?lng=en');
    const data = resonse.data;
    
    dispatch(successFetchTags(data));
  } catch (error) {
    dispatch(errorFetchTags(error.message));
  }

  // .then(responce => {
  //     const currentTag = responce.data[this.state.index].tag_en,
  //           tags = responce.data;

  //       this.setState({
  //       tags,
  //       currentTag,
  //     });
  //     this.updateNews(currentTag);
  //   });
}