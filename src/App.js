import React, {useEffect, useMemo, useState} from "react";
import './App.css';
import MyPosts from "./components/MyPosts/MyPosts";
import MyButton from "./ui/MyButton/MyButton";
import MyForm from "./components/MyForm/MyForm";
import {getPost} from "./api/api";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./ui/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import Loader from "./ui/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPages, getTotalPages} from "./utils/getTotalPages";

function App() {
    const [posts, setPosts] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [filters, setFilters] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
        const response = await getPost(limit, page);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getTotalPages(totalCount, limit));
            setPosts(response.data);
    })

    useEffect(() => {
        fetchPosts();
    }, [page])
    const searchedAndSortedPosts = usePosts(posts, filters.sort, filters.query);
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
        setModal(false);
    }
    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id != postId))
    }
    const changePage = (page) => {
        setPage(page);
    }
    return (
        <div className="App">
            <MyButton onClick={() => {
                setModal(true);
            }} style={{width: "200px", marginTop: "10px"}}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <MyForm title={title} body={body} setBody={setBody} setTitle={setTitle} addPost={addPost}/>
            </MyModal>
            <hr/>
            <PostFilter filters={filters} setFilters={setFilters}/>
            {error && <h1>{error}</h1>}
            {isPostsLoading
                ? <div><Loader/></div>
            : <MyPosts deletePost={deletePost} posts={searchedAndSortedPosts}/>}
            {getPages(totalPages).map(p => <span onClick={() => {
                changePage(p);
            }} className={p === page ? 'page page__active' : 'page'}>{p}</span>)}

        </div>
    );
}

export default App;
