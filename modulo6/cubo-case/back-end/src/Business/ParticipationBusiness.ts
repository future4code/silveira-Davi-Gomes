import { ParticipationData } from "../Data/ParticipationData";
import { deleteDTO, participationDTO, updateDTO } from "../Model/types";
import { IdGenerator } from "../services/idGenerator"

export class ParticipationBusiness {
    constructor(private participationData: ParticipationData) { }

    insert = async (inputs: participationDTO): Promise<void> => {
        console.log(inputs)
        try {

            if (!inputs.firstName || !inputs.lastName) throw new Error('Não foi passado um nome ou sobrenome')
            if (!inputs.participation) throw new Error('Não foi passada uma participação')
            const id = new IdGenerator().generateId()
            await this.participationData.insert(inputs, id)
        } catch (error: any) {
            console.log(error)
        }
    }


    select = async (): Promise<participationDTO[] | undefined> => {
        try {
            const result = await this.participationData.select()
            return result
        } catch (error: any) {
            console.log(error)
        }
    }

    update = async (inputs: updateDTO): Promise<void> => {
        try {

            if (!inputs.firstName || !inputs.lastName) throw new Error('Não foi passado um nome ou sobrenome')
            if (!inputs.participation) throw new Error('Não foi passada uma participação')
            await this.participationData.update(inputs)
        } catch (error: any) {

        }
    }

    delete = async (inputs: deleteDTO): Promise<void> => {
        console.log(inputs)
        try {
            if (!inputs.firstName || !inputs.lastName) {
                throw new Error("ta dando erro")
            }
            await this.participationData.delete(inputs)

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

export default new ParticipationBusiness(
    new ParticipationData()
)