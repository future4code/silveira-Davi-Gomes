import React from "react"
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import {DetailsPage} from "../pages/DetailsPage/DetailsPage"


// export const Router = () => {
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/" >
//                     <HomePage />
//                 </Route>
//                 <Route exact path="/details/:id">
//                     <DetailsPage/>
//                 </Route>
//             </Switch>
//         </BrowserRouter>
//     )
// }














const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/details/:id" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )


}

export default Router