import { LOAD_POSTS_SUCCESS } from './constants';

const initialState = {
  posts: [],
  numberOfPosts: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return {
        posts: action.posts,
        numberOfPosts: action.posts.length,
      };
    default:
      return state;
  }
};

export default reducer;
