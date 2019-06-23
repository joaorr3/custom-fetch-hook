import React, { useEffect, useState, createContext } from 'react'

import useFetchSuspense from '../components/useFetchSuspense'

export const PostsContext = createContext([]);

export const PostsProvider = (props) => {

    const [posts, setPosts] = useState([]);

    let id = 500;

    const data = useFetchSuspense(`https://jsonplaceholder.typicode.com/photos?_limit=${id}`, {
        query: {
            'id': id
        }
    });

    useEffect(() => {

        setPosts(data);

    }, [data])

    return (
        <PostsContext.Provider value={[posts, setPosts]} >
            {props.children}
        </PostsContext.Provider>
    )
}
