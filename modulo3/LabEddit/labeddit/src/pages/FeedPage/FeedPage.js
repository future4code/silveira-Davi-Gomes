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
import { ScreenContainer, Header3, ContainerPost, ButtonLike, Form} from './styled'
import Logo from '../../assets/logo.png'





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
            <ContainerPost>
                <p>Enviado por: {posts.username}</p>
                <p>{posts.title}</p>
                <ButtonLike>
                    <img src={posts.userVote === 1 ? upvotegreen : upvoteblack} onClick={() => handleLike(posts.id, posts.userVote)} />
                    <p>{posts.voteSum}</p>
                    <img src={posts.downVote === -1 ? downvotered : downvoteblack} onClick={() => handleNoLike(posts.id, posts.userVote)} />
                    <img src={comment} onClick={() => goToPost(navigate, posts.id)} key={posts.id} /> {posts.commentCount}
                </ButtonLike>
            </ContainerPost>
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
            axios.post(`${Base_URL}/posts/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else if (direction === -1) {
            axios.put(`${Base_URL}/posts/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            axios.delete(`${Base_URL}/posts/${postId}/votes`, headers
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
            <Header3>
                <img src={Logo}></img>
                <button onClick={logout}>Logout</button>
            </Header3>
            <ScreenContainer>
                    <form onSubmit={onSubmitForm}>
                        <Form>
                        <textarea
                            placeholder="Escreva seu post..."
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            
                        />
                        <button>Postar</button>
                        <hr/>
                        </Form>
                    </form>
                    {listPost}
            </ScreenContainer>
        </div>
    )
}
