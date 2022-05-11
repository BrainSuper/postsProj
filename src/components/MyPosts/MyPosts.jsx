import React from 'react';
import Post from "../Post/Post";
import cl from './MyPosts.module.css'

const MyPosts = ({posts, deletePost}) => {
    return (
        <div className={cl.posts__wrapper}>
            {posts.map((post, number) => <Post deletePost={deletePost} key={post.id} id={post.id} number={number + 1} title={post.title} body={post.body}/>)}
        </div>
    );
};

export default MyPosts;