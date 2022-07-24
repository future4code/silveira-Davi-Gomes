// import { useContext } from "react"
// import GlobalStateContext from "../../Global/GlobalStateContext"
// import { StyledFooter } from "./style"

// export const CompFooter = () => {
//     const {actualPage, set_actualPage} = useContext(GlobalStateContext)

//     const goNextPageList = (number) => {
//         set_actualPage(actualPage + number)

//         window.scrollTo(0, 0)
//     }

//     const goBackPageList = (number) => {
//         if(actualPage >= 2){
//             set_actualPage(actualPage - number)
//         }
//         window.scrollTo(0, 0)
//     }

//     return(
//         <StyledFooter>
//             <button onClick={() => goBackPageList(1)}><ion-icon name="arrow-undo-outline"/>Back</button>

//             <p>{actualPage}</p>

//             <button onClick={() => goNextPageList(1)}><ion-icon name="arrow-redo-outline"/>Next</button>
//         </StyledFooter>
//     )
// }