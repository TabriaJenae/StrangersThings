import React from "react";
import { Link, useNavigate }  from 'react-router-dom'
import '../App.css';


const Navbar=()=> {
    const auth = sessionStorage.getItem('user');
    const navigate =useNavigate();
    const logout =()=>{
        sessionStorage.clear();
        navigate('/Register')
    }
    return (
        <div>
            
        
      
        
                <ul className="navbar">
                <li>
                <Link to={'/'}>Home</Link>
                </li>
                <li>
                <Link to={'/posts'}>Posts</Link>
                </li>
                <li><Link onClick={logout} to='/logout'>Logout </Link> 
                </li>
                <li>
                <Link to={'/login'}>Login</Link>
                </li>
                <li>
                <Link to={'/Register'}>Register</Link>
                </li>
             </ul>

        </div>
    )
}

export default Navbar;