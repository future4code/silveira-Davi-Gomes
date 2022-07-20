import app from './controller/app';
import { postController } from './controller/postController';
import { userController } from './controller/userController';

const UserController = new userController()

const PostController = new postController()
app.post('/signup', UserController.signup)
app.post('/login', UserController.login)
app.post('/post', PostController.create)
app.get('/postById/:id', PostController.postById)
