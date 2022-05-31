import express from "express"
import cors from "cors"


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
}) 

type Tasks = {
  userId: number,
  id:number,
  title:string,
  completed:boolean

}

const tasks: Tasks[] =[
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": false
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "title": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": false
  },
  {
    "userId": 2,
    "id": 22,
    "title": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  },
]
 app.get("/tasks",(req,res)=>{
   const done = tasks.filter((item)=>{
     return item.completed == true
   })
   res.send(done)
 })

 app.post("/newtsks", (req, res)=>{
   const users: number = Number(req.headers.authorization)
   const titleTask = req.body.title
   const id = tasks.length + 1 
   const newTasks: Tasks = {
     userId:users,
     id:id,
     title:titleTask,
     completed:req.body.completed
   }
   tasks.push(newTasks)
   res.send(tasks)
 })