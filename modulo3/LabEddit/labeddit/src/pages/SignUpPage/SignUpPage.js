import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'


export default function SignUpPage() {
  const navigate = useNavigate()
  const [form, onChange,clear] = useForm({username:"", email:"", password: ""})
  const onSubmitForm =  (event) => {
  event.preventDefault()
  console.log(form)
  }
  return (
    <div>
        <div>
        {/* imagem */}
      </div>
        <form onSubmit={onSubmitForm}>
      <input
      value={form.username}
      name={"username"}
      onChange={onChange}
      placeholder="username"
      type={"username"}
      />
      <input 
      value={form.email}
      name={"email"}
      onChange={onChange}
      placeholder="Email"
      required
      type={"email"}
      />
      
      <input 
      value={form.password}
      name={"password"}
      onChange={onChange}
      placeholder="Senha"
      type={"password"}
      required
      />
        
    
      <button
      type={"submit"}
      >Cadastrar
      </button>
          
        </form>
      </div>
    
  )
}
