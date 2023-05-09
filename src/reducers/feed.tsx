import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Post {
    title: string
    date: string
    author: string
    content: string
    location: string
}

export interface FeedState {
    posts: Post[]
}

const initialState: FeedState = {
    posts: []
}

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        addPost: (state: FeedState, action: PayloadAction<Post>) => {
            state.posts = [...state.posts, action.payload]
        },
    }
})

export const { addPost } = feedSlice.actions

export default feedSlice.reducer