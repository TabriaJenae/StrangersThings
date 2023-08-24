//This is the general PostUnauthenticated file with the function AllPosts. If a user clicks on "See Posts" nav link while NOT being authenticated (logged in), they will be routed to this version of the posts, which shows all posts WITHOUT options to add or delete posts.

//If you are looking for the version of "See Posts" that authenticated/logged in users will see, go to PostAuthentication.jsx and the function is called UserPosts. -Lauraimport { useEffect, useState } from 'react'

const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const auth = sessionStorage.getItem('token');


    
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
            </div> 
        ))}

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
