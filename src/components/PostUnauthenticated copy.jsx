//THIS CODE IS NOT TIED TO ANYTHING. It is just a backup. It is the See Posts view for unauthenticated users but without any search function or message code.

import { useEffect, useState } from 'react'

const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function AllPosts() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const response = await fetch(`${BASE_URL}/posts`)
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
            <>      
        {posts ? 
        posts.map((post) => { 
            return ( <div key={post._id}>
                <h2>Title: {post.title}</h2>
                <h2>Description: {post.description}</h2>
                <h2>Price: {post.price}</h2>
                <h3>Location: {post.location}</h3>
                <h3>Delivery: {post.willDeliver}</h3>
            </div> )
        }) : null}
            </>
        )

}



// const response = await fetch(`${BASE_URL}/posts`, {
//     method: "POST",
//     headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   },
// });
