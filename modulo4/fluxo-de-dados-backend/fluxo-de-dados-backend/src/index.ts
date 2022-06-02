import express, { Request, Response } from "express"
import cors from "cors"
import { products, Products } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/test", (req, res) => {
  res.send("API esta fincionando")
})

app.post("/products", (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const price: number = +req.body.price
  let newError: number = 400
  const productToEdit = products.find(product => product.id == id)
  try {
    if (!req.body.name || !req.body.price) {
      newError = 401
      throw new Error("um dado não foi recebido")

    }
    if (typeof (req.body.name) !== "string") {
      newError = 422
      throw new Error("Name não e uma string")
    }
    if (typeof (req.body.price) !== "number") {
      newError = 422
      throw new Error("price não e um number")
    }
    if (req.body.price <= 0) {
      newError = 422
      throw new Error("price menor ou igual a zero")
    }
    const newProducts: Products = {
      id: id,
      name: name,
      price: price
    }
    products.push(newProducts)
    res.send(products)

  }
  catch (error: any) {
    if (newError == 200)
      res.status(500).send("Erro inesperado,tente novamente")
    else
      res.status(newError).send(error.message)
  }
})

app.get("/products", (req, res) => {
  res.send(products)
})

app.put("/products/:id", (req, res) => {
  const id = req.params.id
  let newError: number = 400
  const productToEdit = products.find(product => product.id == id)

  try {
    if (!req.body.price) {
      newError = 401
      throw new Error("price não foi recebido")
    }
    if (typeof (req.body.price) !== "number") {
      newError = 422
      throw new Error("price não e um number")
    }
    if (req.body.price <= 0) {
      newError = 422
      throw new Error('Price menor ou igual a zero')
    }
    if (!id) {
      newError = 404
      throw new Error('Id não foi recebido')
    }
    if (!productToEdit) {
      newError = 404
      throw new Error('Product não encontrado')
    }
  
  const editProducts = products.map(products => products.id == id ?
    {
      ...products,
      price:req.body.price
    }:products)
    res.send(editProducts)
    } catch(error: any){
      if(newError == 200)
      res.status(500).send("Erro inesperado, tente novamente mais tarde")
      else
      res.status(newError).send(error.menssage)
    }
})
app.delete('/delete/products/:id', (request, response) => {
  const id = request.params.id
  let newError: number = 400
  const deleteProducts = products.findIndex((products) => products.id == id)

  try {
      if (!id) {
          newError = 404
          throw new Error('Id não foi recebido')
      }
      if (!deleteProducts) {
          newError = 404
          throw new Error('Product não encontrado')

      }
      const editProducts = products.map(products => products.id == id ?
          {
              ...products,
              price: request.body.price
          }
          : products)
      response.send(editProducts)
  } catch (error: any) {
      if (newError == 200)
          response.status(500).send('Erro inesperado, tente novamente')

      products.splice(deleteProducts, 1)

      response.send(products)
  }
});