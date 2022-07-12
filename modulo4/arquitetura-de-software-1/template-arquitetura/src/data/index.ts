import app from '../app';
import { userController } from '../controller/UserController';

const UserController = new userController() 

app.get('/all', UserController.get);
app.post('/signup', UserController.signup);
app.post('/login', UserController.login);
app.delete('/:id', UserController.deleteUser);