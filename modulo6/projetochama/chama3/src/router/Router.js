import HomePage from "../pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"


export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<HomePage/>}/> 
        </Routes>
        </BrowserRouter>
    )
}