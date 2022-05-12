import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import {Base_URL} from  '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import {createComment} from '../../services/user'


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
            <p>{posts.voteSum}</p>
            <p>{posts.userVote}</p>
        </div>
    )
  }
});
 
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
