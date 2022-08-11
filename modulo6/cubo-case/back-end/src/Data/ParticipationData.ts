import { deleteDTO, participationDTO, updateDTO } from "../Model/types";
import BaseDataBase from "./BaseDataBase";

export class ParticipationData extends BaseDataBase {
    insert = async (inputs: participationDTO): Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_graph_data').insert(inputs)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    select = async (): Promise<participationDTO[]> => {
        try {
            return BaseDataBase.connection('cubo_graph_data').select('*')
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    update = async (inputs: updateDTO): Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_graph_data')
                .update({ participation: inputs.participation })
                .where({ firstName: inputs.firstName, lastName: inputs.lastName })
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



