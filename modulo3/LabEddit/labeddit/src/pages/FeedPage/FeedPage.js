import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {Base_URL} from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/coordinator'
import useRequestData from '../../hooks/useRequestData'
import useForm from '../../hooks/useForm'
import {createPost} from '../../services/user'



export default function FeedPage() {
  useProtectedPage();
  const navigate = useNavigate();

  

  const posts = useRequestData([], `${Base_URL}/posts`)

  const [ form, onChange, clear ] = useForm({title:"", body:""})

  const onSubmitForm = (event) => {
      event.preventDefault()
      createPost(form, clear)
  };

  const listPost = posts && posts.map((posts) => {
      return (
          <div onClick={() => goToPost(navigate, posts.id)} key={posts.id}>
              <p>Enviado por: {posts.username}</p>
              <p>{posts.title}</p>
              <p>{posts.voteSum}</p>
              <p>{posts.userVote}</p>
          </div>
      )
  });

  return (
      <div>
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
                  />
                  <button>Postar</button>
              </form>
              {listPost}
          </div>
      </div>
  )
}