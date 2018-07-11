// action creator

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {

    const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
    const API_KEY = '?key=2';
    const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: req
    };
}