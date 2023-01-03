import React from "react";
import { Link } from "react-router-dom";


const NavBox = () => {
    return (
        <header>
            <div className="p-5 bg-light">
                <h1 className="mb-3">MicroBlog</h1>
                <h4 className="mb-3">Get in the Rithm of blogging!</h4>
                <Link className="mr-3" to='/'>Blog</Link>
                <Link className="m-3" to='/new'>Add a new post</Link>
            </div>
        </header>
    )
}

export default NavBox;