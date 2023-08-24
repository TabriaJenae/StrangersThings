//When an authenticated/logged in user clicks on "Add New Post" nav link, they will be routed to this page. The code includes a form with the API-required fields to submit a new post and a button. The makePost function will run when the Submit New Post button is clicked, and upon successfully adding the post to the API, the user will be navigated to the See Posts page (the authenticated view).

import React from "react";
import { useState, useEffect, } from "react";
import { useNavigate } from "react-router";

const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function AddPost () {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState("");   
    const navigate = useNavigate();

    const makePost = async () => {
   
      const auth = sessionStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
          }
        })
      });
      const result = await response.json();
      console.log(result);
      if (result) {
        navigate("/posts")
      }
    } 

    return (
      <>
      <div className="register">
          <h1>New Post</h1>
          <input className="inputfield" type="text" placeholder="Enter item title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input className="inputfield" type="text" placeholder="Enter item description" value={description} onChange={(e)=>setDescription(e.target.value)} />
          <input className="inputfield" type="text" placeholder="Enter item price" value={price} onChange={(e)=>setPrice(e.target.value)} />
          <input className="inputfield" type="text" placeholder="Enter pickup location" value={location} onChange={(e)=>setLocation(e.target.value)} />
          <input className="inputfield" type="text" placeholder="Delivery available? Type true or false" value={willDeliver} onChange={(e)=>setWillDeliver(e.target.value)} />
          <button onClick={makePost} className="actionbutton" type="button">Submit New Post</button>
      </div>
      </>
  )
  }