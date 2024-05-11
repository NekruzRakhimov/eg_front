import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostByID, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getGetCommentsByPostID(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostByID(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = ${params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Список комментриев:</h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div style={{marginTop: 15}}>
                                {comm.body}
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;