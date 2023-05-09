import React from "react"
import "./search.css"


export default function Search(){

    return (
        <div className="search">
            <span className="search--text">SEARCH THE SITE</span>
            <div className="search--form">
                <input type="text" placeholder="ENTER KEYWORD"></input>
                <button type="button">SEARCH</button>
            </div>
        </div>
    )

}