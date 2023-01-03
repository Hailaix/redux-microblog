// import { v4 } from 'uuid';
import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, GET_TITLES, GET_POST, UPDATE_VOTES } from './actionlist';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api/posts"

// //Takes an object (which should have a title, description and body), adds it to the posts object in store under a generated id
// export const newPost = post => {
//     return {
//         type: ADD_POST,
//         id: v4(),
//         post
//     }
// }

// //Similar to add, except also takes an id to overwrite
// export const updatePost = (id, post) => {
//     return {
//         type: UPDATE_POST,
//         id,
//         post
//     }
// }

// //takes an id, and removes it from posts in store
// export const removePost = id => {
//     return {
//         type: REMOVE_POST,
//         id
//     }
// }

// export const addComment = (id, comment) => {
//     return {
//         type: ADD_COMMENT,
//         id,
//         comment: {
//             id: v4(),
//             text: comment
//         }
//     }
// }

// export const removeComment = (postId, commentId) => {
//     return {
//         type: REMOVE_COMMENT,
//         postId,
//         commentId
//     }
// }

//New methods with database conversion

const getTitles = titles => {
    return {
        type: GET_TITLES,
        titles
    }
}

export const getTitlesFromAPI = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${BASE_URL}`);
            return dispatch(getTitles(data));
        } catch (e) {
            console.log(e.response)
        }
    }
}

const getPost = post => {
    return {
        type: GET_POST,
        post
    }
}

export const getPostFromAPI = id => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/${id}`);
            return dispatch(getPost(data));
        }
        catch (e) {
            console.log(e.response)
        }
    }
}

const addPost = post => {
    return {
        type: ADD_POST,
        post
    }
}

export const addPostToAPI = ({ title, description, body }) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${BASE_URL}`, {
                title,
                description,
                body
            });
            return dispatch(addPost(data));
        } catch (e) {
            console.log(e.response)
        }
    }
}

const updatePost = post => {
    return {
        type: UPDATE_POST,
        post
    }
}

export const putPostToAPI = ({ id, title, description, body }) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${BASE_URL}/${id}`, {
                title,
                description,
                body
            });
            return dispatch(updatePost(data));
        } catch (e) {
            console.log(e.response);
        }
    }
}

const removePost = id => {
    return {
        type: REMOVE_POST,
        id
    }
}

export const removePostFromAPI = id => {
    return async (dispatch) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            return dispatch(removePost(id));
        } catch (e) {
            console.log(e.response)
        }
    }
}

const addComment = (id, comment) => {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
}

export const addCommentToAPI = (id, text) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${BASE_URL}/${id}/comments`, { text });
            return dispatch(addComment(id, data));
        } catch (e) {
            console.log(e.response)
        }
    }
}

const removeComment = (postId, commentId) => {
    return {
        type: REMOVE_COMMENT,
        postId,
        commentId
    }
}

export const removeCommentFromAPI = (postId, commentId) => {
    return async dispatch => {
        try {
            await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
            return dispatch(removeComment(postId, commentId));
        } catch (e) {
            console.log(e.response);
        }
    }
}

const vote = (id, votes) => {
    return {
        type: UPDATE_VOTES,
        id,
        votes
    }
};

export const changeVotes = (id, change) => {
    return async dispatch => {
        try {
            const { data } = await axios.post(`${BASE_URL}/${id}/vote/${change}`);
            return dispatch(vote(id, data.votes));
        } catch (e) {
            console.log(e.response);
        }
    }
}