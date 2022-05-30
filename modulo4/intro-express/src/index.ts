import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req, res) => {
    res.send("test")
})

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}
const users: User[] = [
    {
        "id": 1,
        "name": "robervaldo",
        "phone": 40028922,
        "email": "robervaldo@gmail.com",
        "website": "www.robervaldo.com"
    },
    {
        "id": 2,
        "name": "robertinho",
        "phone": 635478165,
        "email": "robertinho@gmail.com",
        "website": "www.robertinho.com"
    }

]



app.get("/user", (req, res) => {
    res.send(users)
})

type Users2 = {
    id: number,
    title: string,
    body: string,
    userId: number

}
const users2: Users2[] = [
    {
        "id": 3,
        "title": "antes",
        "body": "Quem dera eu pudesse voltar como era antes",
        "userId": 24
    }
]

app.get("/post", (req, res) => {
    res.send(users2)
})
// criei em um aray separado pois fica mais organizado


app.get("/posts/:id",(req, res)=>{
    const id:number= Number(req.params.id)

    const postsId = users.filter((item)=>{
        return item.id == id
    })
    res.status(200).send(postsId)
})