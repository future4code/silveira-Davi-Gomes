import React, { useContext } from "react"
import GlobalContext from "../../Global/GlobalContext"


const UserCard = () => {
    const { userData } = useContext(GlobalContext)

    if (userData === undefined) {
        return (
            <div>
                <h2>User Not Found </h2>
            </div>
        )
    } else if (userData !== undefined) {
        const viewUser = userData.map((user) => {
            return (
                <div key={user.id}>
                    {/* <ProfilePicture src={user.avatar_url} alt={user.login} /> */}
                    <h1>{user.name}</h1>
                    <h2>{user.login}</h2>
                    <div href={user.html_url} target="_blank" rel="noreferrer">See more</div>
                    <div>{user.bio !== null ? user.bio : ""}</div>
                    <div><span>{user.followers}</span> followers <span>{user.following}</span>  following</div>
                    <div>{user.company !== null ? user.company : "No registered company"}</div>
                    <div>{user.location !== null ? user.location : "No location registered"}</div>
                </div>
            )
        })
        return viewUser
    }



}


export default UserCard