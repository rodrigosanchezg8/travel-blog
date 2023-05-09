import React from "react";
import './feed.css'
import PostPreview from "../post-preview/post-preview";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Post } from "../../reducers/feed";

export default function Feed() {

    const posts = useSelector((state: any) => state.feed.posts)

    return (
        <section className="feed">
            <Link to="/feed/new">
                <button type="button" className="add-post">Add post</button>
            </Link>
            {
                posts?.map((post: Post, index: number) => {
                    return <PostPreview key={index} post={post} />
                })
            }
        </section>
    )

}