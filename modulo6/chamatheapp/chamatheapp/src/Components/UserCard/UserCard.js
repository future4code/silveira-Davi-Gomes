import React, { useContext } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { Bio, Icon, Info, ProfilePicture, SeeMoreLink, UserContainer, UserNotFound } from "./style"
import FollowersIcon from "../../Assets/followers-icon.png"
import CompanyIcon from "../../Assets/company-icon.png"
import LocalIcon from "../../Assets/local-icon.png"

const UserCard = () => {
    const { userData } = useContext(GlobalContext)

    if (userData === undefined) {
        return (
            <UserNotFound>
                <h2>User Not Found </h2>
            </UserNotFound>
        )
    } else if (userData !== undefined) {
        const viewUser = userData.map((user) => {
            return (
                <UserContainer key={user.id}>
                    <ProfilePicture src={user.avatar_url} alt={user.login} />
                    <h1>{user.name}</h1>
                    <h2>{user.login}</h2>
                    <SeeMoreLink href={user.html_url} target="_blank" rel="noreferrer">See more</SeeMoreLink>
                    <Bio>{user.bio !== null ? user.bio : ""}</Bio>
                    <Info><Icon src={FollowersIcon} alt="Followers icon" /><span>{user.followers}</span> followers <span>{user.following}</span>  following</Info>
                    <Info><Icon src={CompanyIcon} alt={user.company} />{user.company !== null ? user.company : "No registered company"}</Info>
                    <Info><Icon src={LocalIcon} alt={user.location} />{user.location !== null ? user.location : "No location registered"}</Info>
                </UserContainer>
            )
        })
        return viewUser
    }
}


export default UserCard