



export const ProductionCrew = ({ crew }) => {
    const crewMembers = crew && {
        producer: crew.filter((member) => member.department === "Production")[0],
        writer: crew.filter((member) => member.department === "Writing")[0],
        director: crew.filter((member) => member.job === "Director")[0],
        designer: crew.filter((member) => member.department === "Art")[0],
        sound: crew.filter((member) => member.department === "Sound")[0]
    }

    return (
        <>{crewMembers &&
            <div >
                <div>
                    <p>{crewMembers.producer ? `${crewMembers.producer.name}` : "Produtor desconhecido"}</p>
                    <p>{crewMembers.producer?.job}</p>
                </div>

                <div>
                    <p>{crewMembers.writer ? `${crewMembers.writer.name}` : "Roteirista desconhecido"}</p>
                    <p>{crewMembers.writer?.job}</p>
                </div>

                <div>
                    <p>{crewMembers.director ? `${crewMembers.director.name}` : "Diretor desconhecido"}</p>
                    <p>{crewMembers.director?.job}</p>
                </div>

                <div>
                    <p>{crewMembers.designer ? `${crewMembers.designer.name}` : "Designer desconhecido"}</p>
                    <p>{crewMembers.designer?.job}</p>
                </div>

                <div>
                    <p>{crewMembers.sound ? `${crewMembers.sound.name}` : "Produtor de som desconhecido"}</p>
                    <p>{crewMembers.sound?.job}</p>
                </div>
            </div>
        }</>
    )
}