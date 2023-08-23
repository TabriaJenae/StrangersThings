import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
//import {PostsView, Unauthenticated} from "./components/PostAuthentication"
//import {PostsView, UpgradedwithAuthentication} from  "./components/PostUnauthenticated"
import Users from './components/usersme';
import Loginuser from "./components/Login-Logout"
import Register from "./components/Register"
import AllPosts from "./components/PostUnauthenticated"



function App() {
  const [user, setuser] = useState(null);


  return (
    <>
      <div>
      <AllPosts />
      <Loginuser />
      <Register />
      
        
      </div>

      {user ? (
        <user
          user={user}
          setuser={setuser}
        />
      ) : (
        <Users setuser={setuser} />
      )}

    </>
  )
}

export default App
