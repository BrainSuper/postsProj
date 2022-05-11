import React, {useEffect, useMemo, useState} from "react";
import './App.css';
import MyPosts from "./components/MyPosts/MyPosts";
import MyInput from "./ui/MyInput/MyInput";
import MyButton from "./ui/MyButton/MyButton";
import MyForm from "./components/MyForm/MyForm";
import {getPost} from "./api/api";
import MySelect from "./ui/MySelect/MySelect";
import cl from "./components/MyForm/MyForm.module.css";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {
    const [posts, setPosts] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [filters, setFilters] = useState({sort: '', query: ''});

    useEffect(() => {
        getPost().then(response => {
            setPosts(response);
        });
    }, [])

    const getSortedPosts = () => {
        console.log("Sorted post function called")
        if (filters.sort) {
            return [...posts].sort((a, b) => a[filters.sort].localeCompare(b[filters.sort]));
        } else {
            return posts;
        }
    }
    const sortedPosts = useMemo(getSortedPosts, [filters.sort, posts]);
    const searchedAndSortedPosts = useMemo(() => {
        if (sortedPosts) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(filters.query));
        } else {
            return sortedPosts;
        }
    }, [filters.query, sortedPosts])
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }
    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id != postId))
    }

    return (
        <div className="App">
            <MyForm title={title} body={body} setBody={setBody} setTitle={setTitle} addPost={addPost}/>
            <hr/>
            <PostFilter filters={filters} setFilters={setFilters}/>
            <MyPosts deletePost={deletePost} posts={searchedAndSortedPosts}/>
        </div>
    );
}

export default App;
