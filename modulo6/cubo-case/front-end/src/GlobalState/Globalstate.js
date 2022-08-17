import { useEffect, useState } from "react"
import { requestDelete, requestInsert, requestPut, requestSelect } from "../Services/requests"
import { ParticipationContext } from "./Context"


export const GlobalState = (props) => {
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [selectedPersonData, setSelectedPersonData] = useState()
    const [message, setMessage] = useState(false)
    const [loader, setloader] = useState(true)

    useEffect(()=> { requestSelect(getAll,setloader) },[])

    const getAll = (data) => {
        let updatedList = updatedIndexFn(data)
        setList(updatedList)
    }

    const add = (data) => {
        message && showMessage()
        if(checkTotalParticipation(list,data.participation) <= 100) {
            let updatedList = [...list,data]
            updatedList = updatedIndexFn(updatedList)
            setList(updatedList)
            requestInsert(data)
        }else {
            showMessage()
        }
    }

    const del = () => {
        message && showMessage()
        let updatedList = list.filter(a => 
            (a.fristName !== selectedPersonData.fristName && a.lastName !== selectedPersonData.lastName)
            )
        updatedList = updatedIndexFn(updatedList)
        setList(updatedList)
        requestDelete(selectedPersonData)
    }

    const showEditFn = () => {
        setEdit(edit === false ? true : false)
    }

    const showMessage = () => {
        setMessage(message === false ? true : false)

    }

    const editTableDataFn = (fristName,lastName,participation) => {
        setSelectedPersonData({fristName,lastName,participation})
    }

    const editParticipation = (participation) => {
            message && showMessage()
            let updatedEditData = selectedPersonData
            updatedEditData.participation = +participation
            const updatedlst = list.map(people => 
                (people.fristName ===  updatedEditData.fristName && 
                people.lastName === updatedEditData.lastName) ?
                {
                    id:people.id, 
                    fristName:people.fristName,
                    lastName:people.lastName, 
                    participation: updatedEditData.participation
                } :
                people
            )
        const totalParticipation = checkTotalParticipation(updatedlst,0)
        totalParticipation <= 100 && setList(updatedlst) 
        totalParticipation <= 100 && requestPut(updatedEditData)
        totalParticipation > 100 && showMessage()
    }

    const updatedIndexFn = (list) => {
        return list.map((element,index) => {
            element.id = index + 1
            element.participation = +element.participation
            return element
        })
    }
    
    const checkTotalParticipation = (list,newParticipation) => {
        const totalParticipation = list.reduce((acc,curr) => {
            acc += curr.participation
            return acc
        },0)
        return Number(newParticipation) + totalParticipation
    }

    const params = {
        list,
        add,
        del,
        edit,
        showEditFn,
        editTableDataFn,
        editParticipation,
        message, 
        setMessage,
        loader
    }

    return (
        <ParticipationContext.Provider value={params}>
            {props.children}
        </ParticipationContext.Provider>
    )
}