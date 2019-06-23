import React, { lazy, Suspense, useContext } from 'react'
import { TransitionGroup } from 'react-transition-group';

import LoadingPhoto from './LoadingPhoto'
import { PostsContext } from '../context/PostsContext'

const Post = lazy(() => import('./Post'));

export default function Posts(path) {

    const [posts] = useContext(PostsContext);

    return (
        <TransitionGroup className="post-list">
            {/* <div className="card-columns mt-5"> */}
            <div className="row mt-5">
                {posts.map(post => (
                    <Suspense fallback={<LoadingPhoto />}>
                        <Post key={post.id} title={post.title} body={post.body} url={post.thumbnailUrl} />
                    </Suspense>
                ))}
            </div>
        </TransitionGroup>
    )
}
