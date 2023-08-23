import React, {useState, useEffect} from "react";
import Users from "./usersme";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function Loginuser() {
const [username, setusername] = useState("");
const [password, setpassword] = useState("");


const [usernameerror, setusernameerror] = useState(null);
const [passworderror, setpassworderror] = useState(null);


const login = async (event) => {
    event.preventDefault();


    //form validation: username
    if (username.length < 6) {
        setusernameerror("Username must be at least 6 characters in length");
        return;
      } else {
        setusernameerror(null);
      }
      
      // form validation: password
      if (password.length < 8) {
        setpassworderror("Password must be at least 6 characters in length");
        return;
      } else {
        setpassworderror(null);
      }

    //console.log username
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
       const result = await response.json();
      console.log(result, username, password);
      return result
    } catch (err) {
      console.log(err);
    }

    // my data after logging in 
    //attempt at sessionstorage
    //if(result.name) {
     //   sessionStorage.setItem('user',JSON.stringify(result));
     //   Navigate("./")
    //}
    //else{
    //    alert("Please enter correct details")
    //}
}

//create form 
    return (
        <>
        <h2>Login</h2>
 <form method="POST"
 onSubmit={login} 
        onClick={() => {
            setusername(username)
        }}>
<label>
    Username:{""}
    <input 
        placeholder='Username'
        value = {username}
         onChange={(e)=> 
        setusername(e.target.value)} />
</label>
{usernameerror && <p style={{ color: "red"}}>{usernameerror}</p>} 

<label >
        Password:{""}
         <input 
         placeholder='Password'
         type='password'
         value={password}
         onChange={(e)=> 
         setpassword(e.target.value)}/>
      </label>
    
         {passworderror && <p style={{ color: "red"}}>{passworderror}</p>}

         <button type='Submit' style=
      {{width: "80px", height: "37px", padding: "10px", 
      fontSize:"15px"}}

     onClick={() => {
     
     }}

      >Login</button>

 </form>
        </>
    );
}
Loginuser 

//if login user successful, store the session and populate logout button 


//log out button 



