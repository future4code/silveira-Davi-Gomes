import { deleteDTO, participationDTO, updateDTO } from "../Model/types";
import BaseDataBase from "./BaseDataBase";

export class ParticipationData extends BaseDataBase {
    insert = async (inputs: participationDTO, id: string): Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_graph_data').insert({
                id: id,
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                participation: inputs.participation
            })
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    select = async (): Promise<participationDTO[]> => {
        try {
            const result = BaseDataBase.connection('cubo_graph_data').select('*')
            console.log(result)
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    update = async (inputs: updateDTO): Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_graph_data')
                .update({ participation: inputs.participation, firstName: inputs.firstName, lastName: inputs.lastName })
                .where({ id: inputs.id })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    delete = async (inputs: deleteDTO): Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_graph_data')
                .where({ firstName: inputs.firstName, lastName: inputs.lastName })
                .delete()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}



