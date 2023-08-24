import { useEffect, useState } from 'react'

const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const [posts, setPosts] = useState([]);

export default function AllPosts() {

  

    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT/posts")
                const result1 = await response.json();
                console.log(result1.data.posts);
                setPosts(result1.data.posts);
                return result1
              } catch (error) {
                console.error(error);
              }
            }
            fetchAllPosts();
        }, [])

        return (
            <>
        <h1>Test</h1>
        {posts ? 
        posts.map((post) => { 
            return ( <div key={post._id}>
                <h2>{post.title}</h2>
                <h2>{post.description}</h2>
                <h2>{post.price}</h2>
                <h3>{post.location}</h3>
                <h4>{post.willDeliver}</h4>
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