import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { Base_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { createComment } from '../../services/user'
import downvoteblack from '../../assets/downvoteblack.png'
import downvotered from '../../assets/downvotered.png'
import upvotegreen from '../../assets/upvotegreen.png'
import upvoteblack from '../../assets/upvoteblack.png'
import comments from '../../assets/comment.png'
import axios from 'axios'
import { goToPost, goToLogin, goBack} from '../../routes/coordinator'
import { ScreenContainer, Header, ButtonVoltar,ContainerPost, ButtonLike, Form, ListComment } from './styled'
import Logo from '../../assets/logo.png'



export default function PostPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    goToLogin(navigate)
  }
  const paramns = useParams()
  const posts = useRequestData([], `${Base_URL}/posts`)
  const detail = useRequestData([], `${Base_URL}/posts/${paramns.id}/comments`)
  const [form, onChange, clear] = useForm({ body: "" })
  const onSubmitForm = (event) => {
    event.preventDefault()
    createComment(form, paramns.id, clear)
  }
  const listComment = detail && detail.map((comments) => {
    return (
      <div key={comments.id}>
        <p>
          enviado por:{comments.username}
        </p>
        <p>
          {comments.body}
        </p>
      </div>
    )
  })
  const listPost = posts && posts.map((posts) => {
    if (posts.id === paramns.id) {
      return (
        <ContainerPost key={posts.id}>
          <p>Enviado por: {posts.username}</p>
          <p>{posts.title}</p>
          <ButtonLike>
            <img src={posts.userVote === 1 ? upvotegreen : upvoteblack} onClick={() => handleLike(posts.id, posts.userVote)} />
            <p>{posts.voteSum}</p>
            <img src={posts.userVote === -1 ? downvotered : downvoteblack} onClick={() => handleNoLike(posts.id, posts.userVote)} />
            <img src={comments} onClick={() => goToPost(navigate, posts.id)} key={posts.id} /> {posts.commentCount}
          </ButtonLike>
        </ContainerPost>
      )
    }
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
      
      <Header>
        
        <img src={Logo}></img>
        <button onClick={logout}>Logout</button>
        
      </Header>
      <ScreenContainer>
        {listPost}
        <Form onSubmit={onSubmitForm}>
          <input
            placeholder={"add comentario"}
            name={"body"}
            onChange={onChange}
            value={form.body}
            required
          >
          </input>
          <button>comentar</button>
          <hr />
        </Form>
        <ListComment>
          {listComment}
        </ListComment>
      </ScreenContainer>
    </div>
  )
}
