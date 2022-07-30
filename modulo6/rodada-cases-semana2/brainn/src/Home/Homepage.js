import { Divider, PageContent } from "./style"
import LoteryArea from "../components/LoteryArea/loteryArea"
import SortingNumber from "../components/SortingNumber/SortingNumber"


const HomePage = () => {
    return (
        <PageContent>
            <LoteryArea/>
            <Divider/>
            <SortingNumber />
        </PageContent>
    )
}


export default HomePage