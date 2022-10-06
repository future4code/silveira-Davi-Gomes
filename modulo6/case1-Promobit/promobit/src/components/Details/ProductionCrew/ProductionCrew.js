import { Elenco } from "./styled"




export const ProductionCrew = ({ crew }) => {
    const crewMembers = crew && {
        producer: crew.filter((member) => member.department === "Production")[0],
        writer: crew.filter((member) => member.department === "Writing")[0],
        director: crew.filter((member) => member.job === "Director")[0],
        designer: crew.filter((member) => member.department === "Art")[0],
        sound: crew.filter((member) => member.department === "Sound")[0]
    }

    return (
        <div>
            {crewMembers &&
                <Elenco>

                    <a>{crewMembers.producer ? `${crewMembers.producer.name}` : "Produtor desconhecido"}</a>,
                    <a>{crewMembers.producer?.job}</a>,



                    <a>{crewMembers.writer ? `${crewMembers.writer.name}` : "Roteirista desconhecido"}</a>,
                    <a>{crewMembers.writer?.job}</a>,



                    <a>{crewMembers.director ? `${crewMembers.director.name}` : "Diretor desconhecido"}</a>,
                    <a>{crewMembers.director?.job}</a>,



                    <a>{crewMembers.designer ? `${crewMembers.designer.name}` : "Designer desconhecido"}</a>,
                    <a>{crewMembers.designer?.job}</a>,



                    <a>{crewMembers.sound ? `${crewMembers.sound.name}` : "Produtor de som desconhecido"}</a>,
                    <a>{crewMembers.sound?.job}</a>.

                </Elenco>
            }</div>
    )
}