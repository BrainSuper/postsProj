import React, {useEffect, useMemo, useState} from "react";
import './App.css';
import MyPosts from "./components/MyPosts/MyPosts";
import MyInput from "./ui/MyInput/MyInput";
import MyButton from "./ui/MyButton/MyButton";
import MyForm from "./components/MyForm/MyForm";
import {getPost} from "./api/api";
import MySelect from "./ui/MySelect/MySelect";

function App() {
    const [posts, setPosts] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getPost().then(response => {
            setPosts(response);
        });
    }, [])

    const getSortedPosts = () => {
        console.log("Sorted post function called")
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        } else {
            return posts;
        }
    }
    const sortedPosts = useMemo(getSortedPosts, [selectedSort, posts]);
    const searchedAndSortedPosts = useMemo(() => {
        if (sortedPosts) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
        } else {
            return sortedPosts;
        }
    }, [searchQuery, sortedPosts])
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }
    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id != postId))
    }
    const onSortChange = (sort) => {
        setSelectedSort(sort);
    }
    const options = [
        {value: 'title', name: 'Sort by title'},
        {value: 'body', name: 'Sort by body'}
    ]
    return (
        <div className="App">
            <MyForm setSearchQuery={setSearchQuery} value={searchQuery} title={title} body={body} setBody={setBody} setTitle={setTitle} addPost={addPost}/>
            <hr/>
            <MySelect value={selectedSort} onSortChange={onSortChange} options={options} defaultValue='Select'/>
            {searchedAndSortedPosts && searchedAndSortedPosts.length > 0
                ? <MyPosts deletePost={deletePost} posts={searchedAndSortedPosts}/>
                : <h1>Posts did not find...</h1>}

        </div>
    );
}

export default App;
