import { ADD_COMMENT, ADD_POST, GET_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, UPDATE_VOTES } from "./actionlist";

const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_POST:
            const posts = { ...state };
            posts[action.post.id] = { ...action.post, comments: [] };
            return posts;

        case UPDATE_POST:
            // if somehow the key we are trying to update is not valid, just skip
            if (action.post.id in state) {
                const posts = { ...state };
                const comments = posts[action.post.id].comments;
                posts[action.post.id] = { ...action.post, comments };
                return posts;
            }
            return state;

        case REMOVE_POST:
            //if somehow the key we are trying to remove is not valid, just skip
            if (action.id in state) {
                const posts = { ...state };
                delete posts[action.id];
                return posts;
            }
            return state;

        case ADD_COMMENT:
            // if somehow the key of the post is not valid, just skip
            if (action.id in state) {
                const posts = { ...state };
                const post = { ...posts[action.id] };
                post.comments = [...post.comments, action.comment];
                posts[action.id] = post
                return posts;
            }
            return state;

        case REMOVE_COMMENT:
            // if somehow the key of the post is not valid, just skip
            if (action.postId in state) {
                const posts = { ...state };
                const post = { ...posts[action.postId] };
                post.comments = post.comments.filter(comment => comment.id !== action.commentId)
                posts[action.postId] = post;
                return posts;
            }
            return state;

        case GET_POST:
            return {
                ...state,
                [action.post.id]: action.post
            };

        case UPDATE_VOTES:
            if (action.id in state) {
                const posts = { ...state };
                posts[action.id] = {...posts[action.id], votes : action.votes};
                return posts;
            }
            return state;

        default:
            return state;
    }
}

export default postsReducer;