import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from "../components/userPicture"
import UserDetais from '../components/userDetais';
import UserNumbers from '../components/userNumbers';
import { context } from "../context"



export default function HomePage() {
    const ctx = useContext(context)
    return (
        <Container>
            <Header />
                {ctx.userData?.name ?
            <UserContainer>
                <React.Fragment>
                    <UserPicture url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login} />
                    <UserDetais name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                    <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                </React.Fragment>
            </UserContainer>
                : undefined }
        </Container>
    );
}