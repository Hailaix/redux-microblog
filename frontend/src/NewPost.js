import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPostToAPI } from "./actions";
import PostForm from "./PostForm";

const NewPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = ({ title, description, body }) => {
        dispatch(addPostToAPI({ title, description, body }));
        navigate('/');
    }
    const cancel = () => {
        navigate('/');
    }

    return (
        <PostForm save={save} cancel={cancel} />
    )
}

export default NewPost;