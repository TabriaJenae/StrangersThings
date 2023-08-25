import React, {useState, useEffect} from "react";
import messageForm from "./message-form";


const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Users({ user, setuser}) {

    let auth =  sessionStorage.getItem('token');

    useEffect(() => {
    const myData = async (event) => {
        event.preventDefault();

        try {
          const response = await fetch(`${BASE_URL}/users/me`, {

          
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
          });
          const result = await response.json();
          setuser(result)
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
       
      }
      myData;
    }, []);

    return (
        <>
      {messageForm}
     
 
        </>
   );
}
Users