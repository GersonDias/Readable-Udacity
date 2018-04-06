import { LOAD_POSTS_SUCCESS } from './constants';
import { getAllPosts } from '../../services/ReadableAPI';

export function loadPosts() {
  return dispatch => {
    getAllPosts().then(data => dispatch(loadPostsSuccess(data)));
  };
}

// export function loadPosts() {
//   getAllPosts().then(data => {
//     console.log('here');
//     dispatch(loadPostsSuccess(data));
//   });s
// }

export const loadPostsSuccess = data => {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts: data,
  };
};
