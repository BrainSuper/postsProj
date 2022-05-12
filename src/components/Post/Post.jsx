import React from 'react';
import cl from './Post.module.css';
import MyButton from "../../ui/MyButton/MyButton";

const Post = ({title, body, number, id, deletePost}) => {
    return (
        <div className={cl.post}>
            <div className={cl.number}><strong>{id}</strong></div>
            <div className={cl.title}>
                <h1>{title}</h1>
                <div className={cl.body}>{body}</div>
            </div>
            <MyButton onClick={() => {
                deletePost(id);
            }}>
                Delete
            </MyButton>
        </div>
    );
};

export default Post;