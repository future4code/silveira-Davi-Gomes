import app from '../app'
import { login } from '../endpoints/login'
import { profile } from '../endpoints/profile'
import { profilebyId } from '../endpoints/profileById'
import { recipe } from '../endpoints/recipe'
import { recipeById } from '../endpoints/recipeById'
import { signup } from '../endpoints/signup'

app.get('/user/profile', profile)
app.get('/user/:id', profilebyId)
app.get('/recipe/:id', recipeById)
app.post('/signup', signup)
app.post('/login', login)
app.post('/recipe', recipe)