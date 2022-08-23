import { FiSearch } from "react-icons/fi/index"
import { HeaderInput, HeaderInputContainer, HeaderSearchButton, HeaderSection, HeaderTitle } from "./styles"


const Header = () => (
    <HeaderSection>
        <HeaderTitle>git profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput />
            <HeaderSearchButton>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
)

export default Header;