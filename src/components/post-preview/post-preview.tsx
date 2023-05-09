import React from "react";
import './post-preview.css'
import { Post } from "../../reducers/feed";

interface mProps {
    post: Post
}

const PostPreview: React.FC<mProps> = (props: mProps) => {
    return (
        <div className="post-preview">
            <div className="post-preview--container">
                <h3 className="post-preview--title">{props.post.title}</h3>
                <div className="post-preview--metadata">
                    <span className="post-preview--author">{props.post.author}</span>
                    <span className="post-preview--date">{props.post.date}</span>
                    <span className="post-preview--location">{props.post.location}</span>
                </div>
                <p className="post-preview--text">{props.post.content}</p>
            </div>
        </div>
    )
}

export default PostPreview