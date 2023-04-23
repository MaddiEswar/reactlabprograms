import React, { useEffect, useState } from 'react';

export default function FetchApi(){
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        fetch("https://reqres.in/api/users?page=1")
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
                            <td>{d.email}</td>
                            <td>{d.first_name}</td>
                            <td>{d.last_name}</td>
                        </tr>
                    ))
                }
            </table>
        </div> 
    );
    
}
