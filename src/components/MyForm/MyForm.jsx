import React, {useState} from 'react';
import MyInput from "../../ui/MyInput/MyInput";
import MyButton from "../../ui/MyButton/MyButton";
import cl from './MyForm.module.css';

const MyForm = ({addPost, title, body, setTitle, setBody}) => {


    const onAddPost = () => {
        let newPost = {
            id: Date.now(),
            title,
            body
        }
        addPost(newPost);
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <h2>Type your post</h2>
            <MyInput onChange={(e) => {
                setTitle(e.target.value);
            }} value={title} placeholder='type your post title'/>
            <MyInput onChange={(e) => {
                setBody(e.target.value);
            }} value={body} placeholder='type your post body'/>
            <MyButton onClick={onAddPost}>Add post</MyButton>

        </form>
    );
};

export default MyForm;