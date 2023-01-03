import React, { useState } from "react";

const CommentForm = ({ save }) => {
    const [comment, setComment] = useState('');

    const handleChange = e => {
        setComment(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        save(comment);
        setComment('');
    }

    return (
        <div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-10">
                    <input
                        className="form-control"
                        placeholder="Comment"
                        value={comment}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">Add</button>
                </div>

            </form>
        </div>
    )
}

export default CommentForm;