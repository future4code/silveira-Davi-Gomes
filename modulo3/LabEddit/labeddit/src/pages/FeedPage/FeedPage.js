import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { Base_URL } from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToPost } from '../../routes/coordinator'
import useRequestData from '../../hooks/useRequestData'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/user'
import downvoteblack from '../../assets/downvoteblack.png'
import downvotered from '../../assets/downvotered.png'
import upvotegreen from '../../assets/upvotegreen.png'
import upvoteblack from '../../assets/upvoteblack.png'
import comment from '../../assets/comment.png'
import axios from 'axios'







export default function FeedPage() {
    useProtectedPage();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token")
        goToLogin(navigate)
    }

    const posts = useRequestData([], `${Base_URL}/posts`)

    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        alert("Posts criado com sucesso!")
        createPost(form, clear)
    };

    const listPost = posts && posts.map((posts) => {
        return (
            <div onClick={() => goToPost(navigate, posts.id)} key={posts.id}>
                <p>Enviado por: {posts.username}</p>
                <p>{posts.title}</p>
                <div>
                    <img src={posts.userVote === 1 ? upvotegreen : upvoteblack} onClick={() => handleLike(posts.id, posts.userVote)} />
                    <p>{posts.voteSum}</p>
                    <img src={posts.downVote === -1 ? downvotered : downvoteblack} onClick={() => handleNoLike(posts.id, posts.userVote)} />
                    <img src={comment} onClick={() => goToPost(navigate, posts.id)} key={posts.id} /> {posts.commentCount}
                </div>

            </div>
        )
    });
    const handleVote = (postId, direction) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        const body = {
            direction: direction
        }
        if (direction === 1) {
            axios.post(`${Base_URL}/comments/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else if (direction === -1) {
            axios.put(`${Base_URL}/comments/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            axios.delete(`${Base_URL}/comments/${postId}/votes`, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const handleLike = (postId, userVote) => {
        if (userVote === 1) {
            handleVote(postId)
        } else {
            handleVote(postId, 1)
        }
    }

    const handleNoLike = (postId, userVote) => {
        if (userVote === -1) {
            handleVote(postId)
        } else {
            handleVote(postId, -1)
        }
    }
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <div />
            <div>
                <h1>Feed Page</h1>
                <form onSubmit={onSubmitForm}>
                    <input
                        placeholder="Titulo"
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        required
                    />
                    <input
                        placeholder="Escreva seu post..."
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                    />
                    <button>Postar</button>
                </form>
                {listPost}
            </div>
        </div>
    )
}
