import express, {Express} from "express"
import { AddressInfo} from "net"
// import createUser from ""
// import login from ""
// import recipe from ""
// import profile from ""
// import userId from ""
// import recipeId from ""


const app: Express = express()

app.use(express.json())

// app.post(/signup,createUser)
// app.post(/login, login)
// app.post(/recipe, recipe)
// app.get(/user/profile, profile)
// app.get(/user/:id, userId)
// app.get(/recipes/:id,recipeId)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }else{
        console.error(`Failure upon starting server.`);
    }
})