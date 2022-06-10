import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import  connection  from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

const createUser = (name: string, nickname: string, email: string) => {
    return connection("TodoListUser")
        .insert({ name, nickname, email, id: Date.now() })
        .into("TodoListUser")
}

app.post('/user', async (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error('Parameters invalid')
        }
        await createUser(req.body.name, req.body.nickname, req.body.email)
        res.status(200).send('Success')
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.get('/user/id/:id', async (req: Request, res: Response) => {
    try {
        const result = await connection("TodoListUser")
            .select("id", "nickname")
            .where({ id: req.params.id })
        if (result.length === 0) {
            throw new Error('User not found')
        }
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.put('/user/edit/:id', async (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error('Parameters invalid')
        }
        const result = await connection("TodoListUser")
            .update({ name: req.body.name, nickname: req.body.nickname, email: req.body.name })
            .where({ id: req.params.id })

        res.status(200).send('Success')
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.post('/task', async (req: Request, res: Response) => {
    const { limit_date } = req.body
    const limitDate = limit_date.split('/').reverse().join('-')
    try {
        if (!req.body.title || !req.body.description || !limitDate || !req.body.creator_user_id) {
            throw new Error('Parameters invalid')
        }
        await connection("TodoListTask")
            .insert({ id: Date.now(), title: req.body.title, description: req.body.description, limit_date: limitDate, creator_user_id: req.body.creator_user_id })
        res.status(200).send('Success')
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        if (!req.params.id) {
            throw new Error('Task not found')
        }
        const result = await connection("TodoListTask")
            .select("*")
            .where({ id: req.params.id })
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.get('/users/all', async (req: Request, res: Response) => {
    try {
        const result = await connection("TodoListUser")
            .select("*")
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})