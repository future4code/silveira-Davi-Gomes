import React, { useContext } from 'react'
import GlobalContext from "../../Global/GlobalContext"
import { RepositoryContainer, RepositoryInfo, RepositoryInfo1, RepositoryNotFound, UserRepositories } from './style'
import StartIcon from "../../Assets/star.png"

const UserRepo = () => {
    const { userRepo } = useContext(GlobalContext)

    if (userRepo === undefined) {
        return (
            <RepositoryNotFound>
                <h1>No Repository Found</h1>
            </RepositoryNotFound>
        )
    } else if (userRepo !== undefined) {
        const viewRepositories = userRepo.map((repo) => {
            return (
                <UserRepositories key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                    </a>
                    <RepositoryInfo>
                        <p>
                            <strong>{repo.language !== null ? repo.language : "No language specified"}</strong>
                        </p>
                    </RepositoryInfo>
                    <RepositoryInfo1>
                        <img src={StartIcon} alt="Stars count:" />
                        <p>
                            <strong>{repo.stargazers_count}</strong>
                        </p>
                    </RepositoryInfo1>
                </UserRepositories>
            )
        })

        return <RepositoryContainer>{viewRepositories}</RepositoryContainer>
    }
}

export default UserRepo