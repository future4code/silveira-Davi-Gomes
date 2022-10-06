import {Container, ProfilePicture} from "./styles"


const userPicture = props =>(
<Container>
    <ProfilePicture src={props.url} alt={props.alternativeText} />
</Container>
)

export default userPicture;