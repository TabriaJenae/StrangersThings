
import './App.css'
import { Route, Routes } from "react-router-dom";
import {PostsView, Unauthenticated} from "./components/PostAuthentication"
import {PostsView, UpgradedwithAuthentication} from  "./components/PostUnauthenticated"
import {RegisterLoginLogoutAuthentication} from "./components/Login-Logout"
import AllPosts from "./components/PostUnauthenticated"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AllPosts />
      </div>
    </>
  )
}

export default App
