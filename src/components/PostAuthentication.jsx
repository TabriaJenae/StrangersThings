//This is the Authenticated posts file with the function UserPosts. If a user clicks on "See Posts" nav link WHILE AUTHENTICATED/LOGGED IN, they will be routed to this version of the posts, which shows all posts WITH a nav link to Add a New Post AND, for the posts that the user made, buttons to delete the post or view messages related to a post.

//If you are looking for the version of "See Posts" that users who are NOT authenticated/logged in will see, go to allposts.jsx and the function is called AllPosts. -Laura

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";


const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function UserPosts() {

    const [posts, setPosts] = useState([]);



    useEffect(() => {
        async function fetchUserPosts() {
            const auth = sessionStorage.getItem('token');

            try {
                const response = await fetch(`${BASE_URL}/posts`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth}`
                      },
                });
                const result = await response.json();
                console.log(result.data.posts);
                setPosts(result.data.posts);
                return result
            } catch (error) {
                console.error(error);
              }
            }
            fetchUserPosts();
        }, []);

        
        async function deletePost (id) {
            const auth = sessionStorage.getItem('token');
            
            try {
              const response = await fetch(`${BASE_URL}/posts/${id}`, {
                method: "DELETE",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${auth}`
                }
              });
              const result2 = await response.json();
              if (result2) {window.location.reload()}
              alert("Item removed.");
            } catch (error) {
        console.error(error);
      }};



        return (
            <>
        {posts ? 
        posts.map((post) => { 
            return ( <div key={post._id}>
                <h2>Title: {post.title}</h2>
                <h2>Description: {post.description}</h2>
                <h2>Price: {post.price}</h2>
                <h3>Location: {post.location}</h3>
                <h4>Delivery: {post.willDeliver}</h4>
                <li>{post.isAuthor ? <button onClick={()=>deletePost(post._id)}>Delete Post</button> : null}</li>
                <li>{post.isAuthor ? <button onClick={()=>messageForm(post._id)}>See Messages About Item</button> : null}</li>

            </div> )
        }) : null}
            </>
        )

}



