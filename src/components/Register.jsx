import React, {useState} from "react";

export default function Register ({token}) {

    const [createuser, setcreateuser] = useState("");
    const [createpassword, setcreatepassword] = useState("");

    const [createusernameerror, setcreateusernameerror] = useState(null);
    const [createpassworderror, setcreatepassworderror] = useState(null);

    const registerUser = async (event) => {
        event.preventDefault();

        if (username.length < 6) {
            setcreateusernameerror("Username must be at least 6 characters in length");
            return;
          } else {
            setcreateusernameerror(null);
          }
          
          // form validation: password
          if (createpassword.length < 8) {
            setcreatepassworderror("Password must be at least 8 characters in length");
            return;
          } else {
            setcreatepassworderror(null);
          }

    try {
        const response = await fetch(
          `${BASE_URL}/users/register`, {
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
        const result = await response.json();
        console.log(result)
        return result
      } catch (err) {
        console.error(err);
      }
};
return(
    <>
<h2>Don't have an account? Sign Up</h2>
 <form method="POST"
 onSubmit={registerUser} 
        onClick={() => {
            setcreateuser(createuser)
        }}>
<label>
    Create Username:{""}
    <input 
        placeholder='Create Username'
        value = {createuser}
         onChange={(e)=> 
        setcreateuser(e.target.value)} />
</label>
{createusernameerror && <p style={{ color: "red"}}>{createusernameerror}</p>} 

<label >
        Create Password:{""}
         <input 
         placeholder='Create Password'
         type='password'
         value={createpassword}
         onChange={(e)=> 
         setcreatepassword(e.target.value)}/>
      </label>
    
         {createpassworderror && <p style={{ color: "red"}}>{createpassworderror}</p>}

         <button type='Submit' style=
      {{width: "80px", height: "37px", padding: "10px", 
      fontSize:"15px"}}
      >Submit</button>

 </form>
         </>
 );
}
Register;