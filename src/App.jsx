import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
//import {PostsView, Unauthenticated} from "./components/PostAuthentication"
//import {PostsView, UpgradedwithAuthentication} from  "./components/PostUnauthenticated"
import Loginuser from "./components/Login-Logout"
import Register from "./components/Register"
import AllPosts from "./components/PostUnauthenticated"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <AllPosts />
      <Loginuser />
      <Register />
        
      </div>
    </>
  )
}

export default App
