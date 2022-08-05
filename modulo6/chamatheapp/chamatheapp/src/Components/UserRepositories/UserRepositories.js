import React, { useContext } from 'react'
import GlobalContext from "../../Global/GlobalContext"


const UserRepo = () => {
    const { userRepo } = useContext(GlobalContext)

    if (userRepo === undefined) {
        return (
            <div>
                <h1>No Repository Found</h1>
            </div>
        )
    } else if (userRepo !== undefined) {
        const viewRepositories = userRepo.map((repo) => {
            return (
                <div key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                    </a>
                    <div>
                        <p>
                            <strong>{repo.language !== null ? repo.language : "No language specified"}</strong>
                        </p>
                    </div>
                    <div>
                        {/* <img src={StartIcon} alt="Stars count:" /> */}
                        <p>
                            <strong>{repo.stargazers_count}</strong>
                        </p>
                    </div>
                </div>
            )
        })

        return <div>{viewRepositories}</div>
    }
}

export default UserRepo