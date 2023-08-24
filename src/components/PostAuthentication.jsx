//This is the Authenticated posts file with the function UserPosts. If a user clicks on "See Posts" nav link WHILE AUTHENTICATED/LOGGED IN, they will be routed to this version of the posts, which shows all posts WITH a nav link to Add a New Post AND, for the posts that the user made, buttons to delete the post or view messages related to a post.

//If you are looking for the version of "See Posts" that users who are NOT authenticated/logged in will see, go to PostUnauthenticated.jsx and the function is called AllPosts. -Laura

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import MessageForm from './message-form';
import { Link } from 'react-router-dom';


const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function UserPosts() {

    const [posts, setPosts] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const auth = sessionStorage.getItem('token');
    const isAuthor = (post) => {
      const authUserId = sessionStorage.getItem('userId');
      return post.authorId === authUserId && !authUserId;
  };

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

      async function handleMessageSubmit(postId, message) {
        const auth = sessionStorage.getItem('token');
    
        try {
            const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth}`
                },
                body: JSON.stringify({
                    content: message
                })
            });
    
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    async function seeMessages(postId) {
      const auth = sessionStorage.getItem('token');
  
      try {
          const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
              headers: {
                  'Authorization': `Bearer ${auth}`
              }
          });
  
          const result = await response.json();
          console.log(result.data.messages);
      } catch (error) {
          console.error(error);
      }
  }

      function searchPosts() {
        return searchParam
   ? posts.filter((post) =>
       post.title.toLowerCase().includes(searchParam.toLowerCase())
     )
   : posts;}

   const filteredPosts = searchPosts();



        return (
            <>
        <div className='all-posts-container'>
      <h1>Strangers Things</h1>
      <div>
        <label className='search-bar'>
          Search
          <input
            type="text"
            placeholder=""
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </label>
      </div>
        </div>

        {filteredPosts.map(post => (
            <div key={post._id}>
                <h2>{post.title}</h2>
                <h2>{post.description}</h2>
                <h2>{post.price}</h2>
                <h3>{post.location}</h3>
                <h4>{post.willDeliver}</h4>
                {auth && !isAuthor(post) ? (
            <MessageForm postId={post._id} onMessageSubmit={handleMessageSubmit} />
            ) : null}
            </div> 
        ))}

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
                {isAuthor(post) ? (
                <div>
                <button onClick={() => seeMessages(post._id)}>See Messages</button>
                </div>
                ) : null}

            </div> )
        }) : null}
            </>
        )

}



