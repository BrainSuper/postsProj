import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {getCommentsById, getPostById} from "../../api/api";
import Loader from "../../ui/Loader/Loader";

const PostId = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchingPostById, isPostLoading, error] = useFetching(async (id) => {
        const response = await getPostById(id)
        setPost(response.data);
    })
    const [fetchingCommentsById, isCommentsLoading, errorComm] = useFetching(async (id) => {
        const response = await getCommentsById(id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchingPostById(params.id);
        fetchingCommentsById(params.id);
    }, [])
    console.log(post);
    return (
        <div>
            {isPostLoading
                ? <Loader/>
                : <div>
                    <h1>You have opened post with ID = {params.id}</h1>
                    <h2><i>{post.title}</i></h2>
                    <hr/>
                    <hr/>
                </div>}
            {isCommentsLoading
            ? <Loader/>
            : <div>
                    <h1>Comments</h1>
                    {comments.map((comm, i) => <div key={comm.id}>
                        <span>{i + 1}</span>
                        <h2>{comm.name}</h2>
                        <span>{comm.email}</span>
                        <div>{comm.body}</div>
                        <hr/>
                    </div>)}
                </div>}

        </div>
    );
};

export default PostId;