import React, { useState } from 'react'
import './App.css'
//import {PostsView, Unauthenticated} from "./components/PostAuthentication"
//import {PostsView, UpgradedwithAuthentication} from  "./components/PostUnauthenticated"
import Users from './components/usersme';
import Loginuser from "./components/Login-Logout";
import Register from "./components/Register";
import AllPosts from "./components/PostUnauthenticated";
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import AddPost from './components/AddPost';
import UserPosts from './components/PostAuthentication';
import AuthorMessagesView from './components/AuthorMessagesView';




function App() {
  const [user, setuser] = useState(null);
  const auth = sessionStorage.getItem('token');
  const [isloggedin, setisloggedin] = useState();


  return (
    <>
      <div> 
      <Navbar />
      <Routes>
      
      <Route path='/' element= {<Home />} />
      <Route path='/posts' element= {auth ? <UserPosts /> : <AllPosts />} />
      <Route path='/addpost' element={auth ? <AddPost /> : <Register />} />
      <Route path='/login' element= {<Loginuser />} />
      <Route path="/author-messages/:postId" element={AuthorMessagesView} />
      <Route path='/Register' element= {<Register />} />

      </Routes>
        
      </div>

      {/* {user ? (
        <user
          user={user}
          setuser={setuser}
        />
      ) : (
        <Users setuser={setuser} />
      )} */}

    </>
  )
}

export default App
