import posts from './postsReducer';
import titles from './titlesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    posts,
    titles
})

// import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST } from "./actionlist";
// const INITIAL_STATE = {
//     posts: {}
// };

// const rootReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case ADD_POST:
//             const posts = { ...state.posts };
//             posts[action.id] = { ...action.post, comments: [] };
//             return { posts };
//         case UPDATE_POST:
//             // if somehow the key we are trying to update is not valid, just skip
//             if (action.id in state.posts) {
//                 const posts = { ...state.posts };
//                 const comments = posts[action.id].comments;
//                 posts[action.id] = { ...action.post, comments };
//                 return { posts };
//             }
//             return state;
//         case REMOVE_POST:
//             //if somehow the key we are trying to remove is not valid, just skip
//             if (action.id in state.posts) {
//                 const posts = { ...state.posts };
//                 delete posts[action.id];
//                 return { posts };
//             }
//             return state;
//         case ADD_COMMENT:
//             // if somehow the key of the post is not valid, just skip
//             if (action.id in state.posts) {
//                 const posts = { ...state.posts };
//                 console.log()
//                 posts[action.id].comments = [...posts[action.id].comments, action.comment]
//                 return { posts };
//             }
//             return state;
//         case REMOVE_COMMENT:
//             // if somehow the key of the post is not valid, just skip
//             if (action.postId in state.posts) {
//                 const posts = { ...state.posts };
//                 posts[action.postId].comments = posts[action.postId].comments.filter(comment => comment.id !== action.commentId);
//                 return { posts };
//             }
//             return state;
//         default:
//             return state;
//     }
// }

// export default rootReducer;