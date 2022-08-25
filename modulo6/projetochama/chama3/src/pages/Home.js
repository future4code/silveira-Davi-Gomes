import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from "../components/userPicture"
import UserDetais from '../components/userDetais';
import UserNumbers from '../components/userNumbers';


export default function HomePage() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url="https://avatars.githubusercontent.com/u/98953119?v=4" alternativeText="image" />
            <UserDetais name="davi araujo" login="araujod08" bio="texto bio"/>
            <UserNumbers/>
            </UserContainer>
        </Container>
    );
}