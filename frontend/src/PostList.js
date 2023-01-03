import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeVotes, getTitlesFromAPI } from "./actions";

const PostList = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const titles = useSelector(store => store.titles);

    const vote = (id, change) => {
        dispatch(changeVotes(id, change));
    }

    useEffect(() => {
        const getTitles = async () => {
            dispatch(getTitlesFromAPI());
            setLoading(false);
        }
        if (loading) {
            getTitles();
        }
    }, [loading, dispatch])

    if (loading) {
        return (<div>loading...</div>)
    }

    return (
        <div className="container">
            <div className="row">
                {titles.map(title => (
                    <div key={title.id} className="card col-5 m-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <Link className="card-title" style={{ textDecoration: 'none' }} to={`/${title.id}`}>{title.title}</Link>
                                </div>
                                <div className="col text-end">
                                    <span>votes: {title.votes}</span>
                                    <button
                                        className="btn btn-link text-success"
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => vote(title.id, 'up')}
                                    >
                                        &#9650;
                                    </button>
                                    <button
                                        className="btn btn-link text-danger"
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => vote(title.id, 'down')}
                                    >
                                        &#9660;
                                    </button>
                                </div>
                            </div>

                            <p className="card-text">{title.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostList;