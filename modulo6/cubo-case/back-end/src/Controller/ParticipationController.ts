import { Request, Response } from "express"
import { deleteDTO, participationDTO, updateDTO } from "../Model/types"
import participationBusiness from "../Business/ParticipationBusiness"

export class ParticipationController {

    insert = async (req:Request,res:Response):Promise<void> => {
        const {firstName, lastName, participation} = req.body
        // console.log(req.body)
        try {
            const inputs:participationDTO = {firstName, lastName, participation}
            await participationBusiness.insert(inputs)
            res.statusMessage = 'Registro efetudado com sucesso'
            res.status(201).send()
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    select = async (req:Request,res:Response):Promise<void> => {
        try {
            const result = await participationBusiness.select()
            console.log(res.status)
            res.status(200).send(result)
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    update = async (req:Request,res:Response):Promise<void> => {
        const {firstName, lastName, participation} = req.body
        try {
            const inputs:updateDTO = {firstName,lastName, participation}
            await participationBusiness.update(inputs)
            res.statusMessage = 'Alteracao efetudada com sucesso'
            res.status(200).send()
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    delete = async (req:Request,res:Response):Promise<void> => {
        const {firstName, lastName} = req.body
        try {
            const inputs:deleteDTO = {firstName, lastName} 
            await participationBusiness.delete(inputs)
            res.statusMessage = 'Exclusao efetudada com sucesso'
            res.status(200).send()
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}

export default new ParticipationController()