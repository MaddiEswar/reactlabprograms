import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AxiosApi(){
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((result) => setPosts(result.data))
        .catch((err) => console.log(err));

    });
    return(
        <div>
            <h2>Axios Api</h2>
            <ol align="left">
                {
                    posts.map((d) =>(
                        <li key={d.id}>
                            {d.title}
                        </li>
                    ))
                }
            </ol>
        </div> 
    );
    
}