import React from "react";
import { Link, useNavigate }  from 'react-router-dom'
import '../App.css';


const Navbar=()=> {
    let auth =  sessionStorage.getItem('token');
    const navigate =useNavigate();
    const logout =()=>{
        sessionStorage.clear();
        navigate('/Register')
    }
    return (
        <div>
            
            {
                auth ? 
      
        
                <ul className="navbar">
                <li>
                <Link to={'/'}>Home</Link>
                </li>
                <li>
                <Link to={'/posts'}>Posts</Link>
                </li>
                <li>
                <Link to='/profile'>Profile</Link>
                </li>
                <li><Link onClick={logout} to='/Register'>Logout</Link></li> 
                </ul>
                :
                <ul className="navbar">
                
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/Register'}>Register</Link></li>     
             </ul>

            }
        </div>
    )
}

export default Navbar;