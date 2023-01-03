import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { addComment, removeComment, removePost, updatePost } from "./actions";
import { addCommentToAPI, changeVotes, getPostFromAPI, putPostToAPI, removeCommentFromAPI, removePostFromAPI } from './actions';
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostForm from "./PostForm";

const PostPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    const post = useSelector(store => store.posts[id]);

    //GET the post from the API if it isn't currently in the store
    useEffect(() => {
        const getPost = async () => {
            dispatch(getPostFromAPI(id));
        }
        if (!post) {
            getPost();
        }
    }, [id, post, dispatch]);

    //We can't redirect to the homepage anymore due to the fact that we need to wait for the API now,
    //so instead we show a loading screen
    if (!post) {
        return (<div>Loading...</div>)
    }

    //toggles between the edit form and displaying the post
    const toggleEdit = () => {
        setEditing(editing => !editing);
    }

    //given to the form to update the post in store
    const save = post => {
        //post will only be title, description and body, so we add id
        dispatch(putPostToAPI({ ...post, id }));
        toggleEdit();
    }

    //removes the post from the store and returns to homepage
    const remove = () => {
        dispatch(removePostFromAPI(id));
        navigate('/');
    }

    //adds a comment to the post
    const saveComment = text => {
        dispatch(addCommentToAPI(id, text));
    }

    //removes a comment from the post
    const rmComment = commentId => {
        dispatch(removeCommentFromAPI(id, commentId));
    }

    //changes the votes up or down
    const vote = change => {
        dispatch(changeVotes(id, change));
    }

    //if currently editing, show the edit form
    if (editing) {
        return <PostForm post={post} save={save} cancel={toggleEdit} />
    }

    //otherwise show the post
    return (
        <div className="container">
            <div className="row">
                <h1 className="col">{post.title}</h1>
                <div className="col text-end">
                    <button className="btn btn-success" onClick={toggleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={remove}>Remove</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>votes: {post.votes}</span>
                    <button
                        className="btn btn-link text-success"
                        style={{ textDecoration: 'none' }}
                        onClick={() => vote('up')}
                    >
                        &#9650;
                    </button>
                    <button
                        className="btn btn-link text-danger"
                        style={{ textDecoration: 'none' }}
                        onClick={() => vote('down')}
                    >
                        &#9660;
                    </button>
                </div>

            </div>
            <div className="row mt-3">
                <i>{post.description}</i>
            </div>
            <div className="row mt-3">
                <p>{post.body}</p>
            </div>
            <hr />
            <div className="row">
                <h2>Comments</h2>
                <CommentList comments={post.comments} removeComment={rmComment} />
                <CommentForm save={saveComment} />
            </div>
        </div>
    )
}

export default PostPage;