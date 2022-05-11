import React from 'react';
import Post from "../Post/Post";
import cl from './MyPosts.module.css'

const MyPosts = ({posts, deletePost}) => {
    if (posts && posts.length > 0) {
        return (
            <div className={cl.posts__wrapper}>
                {posts.map((post, number) => <Post deletePost={deletePost} key={post.id} id={post.id} number={number + 1} title={post.title} body={post.body}/>)}
            </div>
        );
    } else {
        return <h1>Posts did not found</h1>
    }
};

export default MyPosts;