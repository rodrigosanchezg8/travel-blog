import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './reducers/feed'

export default configureStore({
    reducer: {
        feed: feedReducer
    }
})  