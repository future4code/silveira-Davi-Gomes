//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
]
enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}
app.get("/users", (req: Request, res: Response) => {
  res.send(users)
})
// 1)
// A) metodo get
// B) users

app.get('/users/userType/:userType', (req, res) => {
  let errorCode: number = 400
  try {
      const userType: string = req.params.userType
      if (!userType) {
          errorCode = 404
          throw new Error('Type not found')
      }
      const admin = users.filter((user) => user.type === 'ADMIN')
      res.status(200).send(admin)
  } catch (error: any) {
      res.status(errorCode).send({ message: error.message })
  }
})
// 2)
// A)Path parameters, porque tem continuação de caminho.
// B) utilizei ENUM

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});
// 3)
// A)QueryParams,busca por nome.

app.patch("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User updated successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
})
// 4)
// A)PUT para modificar completamente um recurso existente (cria se não existir).
//B) Não, pois não é muito utilizado.
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})
