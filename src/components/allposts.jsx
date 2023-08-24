

import { useEffect, useState } from 'react'
import AddPost from './AddPost';

const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const [posts, setPosts] = useState([]);

export default function AllPosts() {

  
    useEffect(() => {

        async function fetchAllPosts() {
            const auth = sessionStorage.getItem('token');

            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT/posts")
                const result = await response.json();
                console.log(result.data.posts);
                setPosts(result.data.posts);
                return result
              } catch (error) {
                console.error(error);
              }
            }
            fetchAllPosts();
        }, [])
        
   
        return (
        <div className="posts">
            <>
        {posts ? 
        posts.map((post) => { 
            return ( 
        
            <div key={post._id} className="post">
                <h2>{post.title}</h2>
                <h2>{post.description}</h2>
                <h2>{post.price}</h2>
                <h3>{post.location}</h3>
                <h4>{post.willDeliver}</h4>
            
            
            </div>
        )
    }) : null}
     </>
     </div>
     )
} 




// const response = await fetch(`${BASE_URL}/posts`, {
//     method: "POST",
//     headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
// });
