import React from "react";
import {link}  from 'react-router-dom'
import '../App.css';


const Navbar =()=> {
    return (
        <div>
            <ul className="navbar">
                <li>
                    <link to={'/'}>Home</link>
                </li>
                <li>
                <link to={'/login'}>Login</link>
                </li>
                <li>
                <link to={'/Register'}>Home</link>
                </li>
            </ul>
        </div>
    )
}