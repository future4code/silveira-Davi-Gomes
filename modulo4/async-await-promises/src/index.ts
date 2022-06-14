import express from "express";
import cors from "cors"
import { baseUrl } from "./baseurl";
import axios from "axios";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

// 1)

//a) O endpoint get/subscribers.
//b) Retorna array seria o [] no tipo de retorno na promises.

//c)
// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data;
//   };

//   const main = async (): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers();
//         console.log(subscribers)
//     } catch(error: any){
//         console.log(error.response?.data || error.message)
//     }
//   }

//   main();

// 2)

// a) Iniciamos a função nomeada usamos "async function", e a arrow function usamos "const e nome da função"

// b)
// const getSubscribers = async(): Promise<any> => {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data;
//   };

//   const main = async (): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers();
//         console.log(subscribers)
//     } catch(error: any){
//         console.log(error.response?.data || error.message)
//     }
//   }

//   main();

// 3)

type user = {
    id: string;
    name: string;
    email: string;
}

//a)Não
//b) Sim, pois queremos fazer informações específicas devemos fazer uma mapeamento e o tipo any renotrna qualquer informações. 

//c)
// const getSubscribers = async(): Promise<any> => {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data.map((res: any)=> {
//         return {
//             id: res.id,
//             name: res.name,
//             email: res.email
//         }
//     })
// }

const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
        return res.id
    })
}

// const main = async(): Promise<void> => {
//     try {
//         const subscribers = await getSubscribers();
//         console.log(subscribers)
//     } catch(error: any){
//         console.log(error.response?.data || error.message)
//     }    
// }

// main()

// 4)

//a)Funcão ascny e endpoint put. 

//b) 
// const date = Date.now()

// const news = {
//     title: "teste",
//     content: "teste",
//     date: date
// }

// const createNews =async (news:any) => {
//  return axios.put(`${baseUrl}/news`, news)   
// }

// const main = async (): Promise<void> => {
//     try {
//        await createNews(news) 
//        console.log(news)
//     } catch (error: any) {
//         console.log(error.response?.data || error.message)
//     }
// }

// main()


// 5)
// const usuario: user = {
//     id: "01",
//     name:"mariana mendes",
//     email:"mariana@gmail.com"
// }

// const usuario1: user = {
//     id: "02",
//     name:"mariana lima",
//     email:"marianalima@gmail.com"
// }

// const sendNotificantions = async (ids: user[]): Promise<void> => {
//    for (const id of ids) {
//     try {
//         await axios.post(`${baseUrl}/notifications`, {
//             subscriberId: id,
//             message: "oiiiiii",
//           })
//         .then(() => console.log(`mensagem enviada para ${id}`))
//           .catch(() => console.log("error"))
//     } 
//       catch (error: any) {
//         console.log(`Error no usuário ${id}`)
//      } 
//     }
//   };

//   const main = async(): Promise<void> => {
//     try {
//         const users = await getSubscribers()
//         await sendNotificantions(users)

//     }catch (error: any){
//         console.log(error.response?.data || error.message)
//     }
//   }

//   main()

// 6)

//a) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises.

//b)Esse método recebe um array de Promises e retorna outra Promise, que resolve em um array de respostas


//c)
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})