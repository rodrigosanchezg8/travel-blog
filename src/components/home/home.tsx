import React from "react";
import "./home.css"
import Navbar from "../navbar/navbar";
import TopNews from "../top-news/top-news";

export default function Home(){
    return (
        <div className="home">
            <TopNews/>
      </div>
    )
}