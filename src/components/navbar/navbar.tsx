import React from "react";
import './navbar.css'
import Search from "../search/search";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar--logo">
                <img src="https://www.pngall.com/wp-content/uploads/5/Italy-PNG-Download-Image.png" />
            </div>
            <div className="navbar--menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/feed">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <Search />
        </div>
    )

}