import React, { useState } from "react";

const INITIAL_STATE = {
    title: '',
    description: '',
    body: ''
}
const PostForm = ({ post = INITIAL_STATE, save, cancel }) => {
    const [formData, setFormData] = useState({
        title: post.title,
        description: post.description,
        body: post.body
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        save(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="container">
                <div className="row">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <label htmlFor="description">Description:</label>
                    <input
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        className="form-control"
                        rows='10'
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary">Save</button>
                    <button className="btn btn-secondary mx-3" type='button' onClick={cancel}>Cancel</button>
                </div>
            </fieldset>
        </form>
    )
}

export default PostForm;