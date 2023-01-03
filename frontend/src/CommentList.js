import React from "react";

const CommentList = ({ comments, removeComment }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} className="m-2">
                    <button
                        className="btn btn-sm btn-danger me-3"
                        onClick={() => removeComment(comment.id)}
                    >
                        &#9932;
                    </button>
                    {comment.text}
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default CommentList;