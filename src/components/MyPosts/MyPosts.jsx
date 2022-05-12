import React from 'react';
import Post from "../Post/Post";
import cl from './MyPosts.module.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const MyPosts = ({posts, deletePost}) => {
    if (posts && posts.length > 0) {
        return (
            <div className={cl.posts__wrapper}>
                <TransitionGroup>
                {posts.map((post, number) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post"
                    >
                    <Post deletePost={deletePost}  id={post.id} number={number + 1} title={post.title} body={post.body}/>
                    </CSSTransition>)}
                </TransitionGroup>
            </div>
        );
    } else {
        return <h1>Posts did not found</h1>
    }
};

export default MyPosts;