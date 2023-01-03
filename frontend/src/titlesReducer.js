import { ADD_POST, GET_TITLES, REMOVE_POST, UPDATE_POST, UPDATE_VOTES } from "./actionlist";

//takes a full post object and extracts just the id title and description to be put in titles array
const extract = ({ id, title, description, votes }) => {
    return { id, title, description, votes }
}

//sorts the array of titles by vote count
const voteSort = titles => (titles.sort((a, b) => b.votes - a.votes));

const titlesReducer = (state = [], action) => {
    switch (action.type) {
        //since we reuse the same actions, these fire alongside the post reducer when the action is called
        case ADD_POST:
            return voteSort([...state, extract(action.post)]);

        case REMOVE_POST:
            return state.filter(post => post.id !== action.id);

        case UPDATE_POST:
            return state.map(post => (
                post.id === action.post.id
                    ? extract(action.post)
                    : post
            ));

        case GET_TITLES:
            return voteSort([...action.titles]);

        case UPDATE_VOTES:
            return voteSort(state.map(title => (
                title.id === action.id
                    ? { ...title, votes: action.votes }
                    : title
            )));

        default:
            return state;
    }
}

export default titlesReducer;