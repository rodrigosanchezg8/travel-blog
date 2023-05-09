import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/home';
import Feed from './components/feed/feed';
import Navbar from './components/navbar/navbar';
import NewPost from './components/new-post/new-post';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/feed/new" element={<NewPost/>}/>
        <Route path="*" element={NotFound()}/>  
      </Routes>
    </div>
  );
}

function NotFound() {
  return <>This page doesn't exist</>;
}

export default App;
