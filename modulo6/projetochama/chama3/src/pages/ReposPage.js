import React, { useContext } from 'react'
import { context } from "../context"
import Container from '../components/container/index'
import ReposContainer from '../components/reposContainer'



const ReposPage = props => {
    const ctx = useContext(context)
    return (
        <Container>
            <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
        </Container>
    )
}
export default ReposPage