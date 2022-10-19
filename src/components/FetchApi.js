import React, { useEffect, useState } from 'react';

export default function FetchApi(){
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((result) => setPosts(result))
        .catch((err) => console.log(err));

    },[]);
    return(
        <div>
            <h2>Fetch Api</h2>
            <table border={1} cellPadding="10px" align='center'>
                {
                    posts.map((d) =>(
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                        </tr>
                    ))
                }
            </table>
        </div> 
    );
    
}