import { ListOfReposContainer, Repo, Section, Title } from "./styles"
import GitHub from "../../assets/github.png"
import { useNavigate } from "react-router-dom"




const ReposContainer = props =>{
    const navigate = useNavigate()
    return (
        <Section>
            <Title><img src={GitHub} onClick={() => navigate("/")}></img>repositórios de {(props.name)?.split(' ')[0]} </Title>
        <ListOfReposContainer>
            {(props?.repos).map(repo =>(
                <Repo>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                    </a>
                    <p>{repo?.description} </p>
                </Repo>
            ))}
        </ListOfReposContainer>
        </Section>
    )
}

export default ReposContainer