import { useEffect, useState } from "react";


const tabs = ['posts','comments','albums','photos']


function Post()
{

    const [posts,setPosts] = useState([]);
    const [type,setTypes] = useState('posts')


    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    },[type])
    return(
        <div>
            {
                tabs.map(tab =>(
                    <button 
                        style={{
                            padding:10,
                            margin:10,
                        }}
                        key={tab}
                        onClick={() => setTypes(tab)}
                    >
                        {tab}
                    </button>
                ))
            }
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Post;