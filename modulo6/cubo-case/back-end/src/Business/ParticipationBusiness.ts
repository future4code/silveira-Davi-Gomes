import { ParticipationData } from "../Data/ParticipationData";
import { deleteDTO, participationDTO, updateDTO } from "../Model/types";


export class ParticipationBusiness {
    constructor(private participationData: ParticipationData) { }

    insert = async (inputs: participationDTO): Promise<void> => {
        console.log(inputs)
        if (!inputs.firstName || !inputs.lastName) throw new Error('Não foi passado um nome ou sobrenome')
        if (!inputs.participation) throw new Error('Não foi passada uma participação')

        await this.participationData.insert(inputs)
    }


    select = async (): Promise<participationDTO[]> => {
        return this.participationData.select()
    }

    update = async (inputs: updateDTO): Promise<void> => {
        if (!inputs.firstName || !inputs.lastName) throw new Error('Não foi passado um nome ou sobrenome')
        if (!inputs.participation) throw new Error('Não foi passada uma participação')
        await this.participationData.update(inputs)
    }

    delete = async (inputs: deleteDTO): Promise<void> => {
        if (!inputs.firstName || !inputs.lastName) throw new Error('Não foi passado um nome ou sobrenome')
        await this.participationData.delete(inputs)
    }
}

export default new ParticipationBusiness(
    new ParticipationData()
)