import { EditInputs } from "../Components/Editsinputs/EditInputs";
import Inputs from "../Components/Inputs/inputs";
import { PieChart } from "../Components/PieChart/PieChart";
import Table from "../Components/Table/table";
import * as  s  from "./style";

export default function Home () {
    return(
        <>
            <s.BlueBox>
                <Inputs/>
            </s.BlueBox>
            <s.Container>
                <Table/>
                <PieChart/>
            </s.Container>
            <s.ContainerEdit>
                <EditInputs/>
            </s.ContainerEdit>
        </>
    )
} 