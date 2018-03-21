import { LOAD_POSTS_SUCCESS } from './constants';
import { getAllPosts } from '../../services/ReadableAPI';

export const loadPosts = () => {
  getAllPosts().then(data => loadPostsSuccess(data));
};

// export function loadPosts() {
//   getAllPosts().then(data => {
//     console.log('here');
//     dispatch(loadPostsSuccess(data));
//   });
// }

export const loadPostsSuccess = data => ({
  type: LOAD_POSTS_SUCCESS,
  posts: data,
});
