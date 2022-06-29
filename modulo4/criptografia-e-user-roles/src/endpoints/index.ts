import { getUserInformation } from '../endpoints/getInformation';
import { login } from '../endpoints/login';
import { singUp } from '../endpoints/singUp';
import { genSaltSync, hashSync } from 'bcryptjs';
import { app } from "../app"


// 1
//a)
//b)

export class hasManager {
    generateHash = (plainText: string): string => {
        const cost: number = 12
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }
    comparaHash = (plainText: string, cypherText: string): boolean => {
        return this.comparaHash(plainText, cypherText)
    }
}

// 2)

//a) Round é o trempo de execução, é salt gera alearoriamente na senha no algoritmo.
//b) 

app.post("/user/signup", singUp)

//c)

app.post("/user/login", login)

// 3)

//a) ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal";
//b) types e uuid
//c) singUp
//d) login.ts

// 4)

app.get("/user/profile", getUserInformation)