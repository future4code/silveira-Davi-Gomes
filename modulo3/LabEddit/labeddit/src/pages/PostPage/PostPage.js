import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import {Base_URL} from  '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import {createComment} from '../../services/user'
import downvoteblack from '../../assets/downvoteblack.png'
import downvotered from '../../assets/downvotered.png'
import upvotegreen from '../../assets/upvotegreen.png'
import upvoteblack from '../../assets/upvoteblack.png'
import comment from '../../assets/comment.png'
import axios from 'axios'
import {goToPost} from  '../../routes/coordinator'


export default function PostPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const paramns = useParams()
  const posts = useRequestData([],`${Base_URL}/posts`)
  const comments = useRequestData([],`${Base_URL}/posts/${paramns.id}/comments`)
  const [form, onChange, clear] = useForm({body:""})
  const onSubmitForm = (event) =>{
    event.preventDefault()
    createComment(form,paramns.id,clear)
  }
 const listComment = comments && comments.map((comments)=>{
return(
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
  if(posts.id === paramns.id){
    return (
        <div key={posts.id}>
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
      {listPost}
      {listComment}
      <form onSubmit = {onSubmitForm}> 
      <input
      placeholder={"add comentario"}
      name={"body"}
      onChange={onChange}
      value={form.body}
      required
      >
      </input>
      <button>comentar</button>
      
      </form>
      
      </div>
  )
}
