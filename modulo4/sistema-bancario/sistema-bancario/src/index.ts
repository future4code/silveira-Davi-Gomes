
import express, { Request, Response } from "express"
import cors from "cors";
import { Account, users } from "./data"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

app.post('/users', (req: Request, res: Response) => {
  let codeError: number = 400
  const { name, cpf, birthdate, balance, extract } = req.body
  const [day, month, year] = req.body.birthdate.split('/')
  const birth: Date = new Date(`${year}-${month}-${day}`)
  const age = Date.now() - birth.getTime()
  const ageNow = age / 1000 / 60 / 60 / 24 / 365

  try {
    if (ageNow < 18) {
      codeError = 422
      throw new Error('Invalid parameter. You must be over 18 to create your account')
    }
    if (!name || !cpf || !birthdate || (!balance && balance !== 0) || !extract) {
      codeError = 422
      throw new Error('Invalid parameter')
    }
    const newUser: Account = {
      name,
      cpf,
      birthdate,
      balance,
      extract
    }
    users.push(newUser)
    res.status(200).send(req.body)
  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

app.get('/users', (req: Request, res: Response) => {
  let codeError: number = 400

  try {
    if (!users) {
      codeError = 404
      throw new Error('User not found')
    }
    res.status(200).send(users)
  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
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
