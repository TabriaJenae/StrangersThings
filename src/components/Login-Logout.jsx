import React, {useState} from "react";
import { useNavigate } from "react-router-dom";




export default function Loginuser() {
const [username, setusername] = useState("");
const [password, setpassword] = useState("");

const [error, seterror] = useState(null);
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
        setpassworderror("Password must be at least 8 characters in length");
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
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      });
       result = await response.json();
      console.log(result);
      return result
    } catch (erroe) {
      seterror.error(error.message);
    }
    //attempt at sessionstorage
    if(result.name) {
        sessionStorage.setItem('user',JSON.stringify(result));
        Navigate("./")
    }
    else{
        alert("Please enter correct details")
    }
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
      >Login</button>

 </form>
        </>
    );
}
Loginuser 



//MY DATA after logging in

//const myData = async () => {

  //  try {
    //  const response = await fetch(`${BASE_URL}/users/me`, {
      //  headers: {
        //  'Content-Type': 'application/json',
          //'Authorization': `Bearer ${TOKEN_STRING_HERE}`
       // },
     /// });
      //const result = await response.json();
      //console.log(result);
     // return result
   // } catch (err) {
     // console.error(err);
    //}

//return myData

//  }
//myData




