import axios from 'axios'
import { Base_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

const headers = {
  headers:
      { authorization: localStorage.getItem("token") }
}

export const login = (body,clear,navigate) => {
    axios.post(`${Base_URL}/users/login`,body)
      .then((res) => {
        localStorage.setItem("token",res.data.token)
        clear()
        goToFeed(navigate)
      })
      .catch((err) => alert("Erro no login",err.response))
  }

  export const signUp = (body,clear,navigate) => {
    axios.post(`${Base_URL}/users/signup`,body)

    .then((res) => {
        localStorage.setItem("token",res.data.token)
        clear()
        alert("usuario criado com sucesso!")
        goToFeed(navigate)
      })
      .catch((err) =>
      alert(err.response.data.message)
      )
  }
  export const createPost = (body, clear) => {
    axios.post(`${Base_URL}/posts`, body, headers)
        .then((res) => {
            alert("post criado com sucesso!")
          clear()
        })
        .catch((err) => {
            alert("Ocorreu um erro por favor, tente novamente.",err.response)
        })
}
export const createComment = (body, id, clear) =>{
  axios.post(`${Base_URL}/posts/${id}/comments`,body, headers)
  .then((res) => {
    clear()
    alert("Comentario criado com sucesso!")
  })
  .catch((err) =>{
    alert("Ocorreu um erro por favor, tente novamente.",err.response)
  })
}