import React, { useState } from "react";
import './new-post.css'
import { useDispatch, useSelector } from "react-redux";
import { Post, addPost } from "../../reducers/feed";
import { redirect, useNavigate } from "react-router";

export default function NewPost() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        author: '',
        content: '',
    } as Post)

    function handleChange(event: any) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function savePost() {
        dispatch(addPost(formData))
        resetFormData()
        navigate('/feed')
    }

    function resetFormData() {
        setFormData({
            title: '',
            date: '',
            author: '',
            content: '',
        } as Post)
    }

    return (
        <section>
            <div className="new-post">
                <div className="new-post--container">
                    <h3>Create new post</h3>
                    <form>
                        <div className="new-post--metadata">
                            <input
                                name="title"
                                type="text"
                                placeholder="Title"
                                onChange={handleChange}
                                defaultValue={formData.title}
                            />
                            <input
                                name="author"
                                type="text"
                                placeholder="Author"
                                onChange={handleChange}
                                defaultValue={formData.author} />
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                onChange={handleChange}
                                defaultValue={formData.location} />
                            <input
                                name="date"
                                type="datetime-local"
                                placeholder="Date"
                                onChange={handleChange}
                                defaultValue={formData.date} />
                        </div>
                        <textarea
                            name="content"
                            placeholder="Content"
                            onChange={handleChange}
                            defaultValue={formData.content} />
                        <button
                            type="button"
                            onClick={savePost}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}