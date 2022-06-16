import { Address } from "../type/Address";
import { connection } from "./connection";

export default async function insertAdress (adress: Address) {
    const { state, city, district, street } = adress;

    await connection("users_cep").insert({
        state,
        city,
        district,
        street
    })
}