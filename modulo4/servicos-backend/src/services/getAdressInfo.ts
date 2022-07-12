import { Address } from '../type/Address';
import axios from "axios";
import { response } from "express";


export const getAdressInfo = async (cep: string): Promise<any> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const address: Address = {
            state: result.data.uf,
            city: result.data.localidade,
            district: result.data.bairro,
            street: result.data.logradouro,

        }
    }catch(error){
        console.log("Unexpected error");
    }

}