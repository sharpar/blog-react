// all the action creators

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=27';

export function fetchPosts() {
  // action creator
  const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: req
  };
}

export function createPost(values, callback) {
  const req = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: req
  };
}

export function fetchPost(id) {
  const req = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: req
  };
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
