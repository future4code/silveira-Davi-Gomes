import HomePage from "../pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ReposPage from "../pages/ReposPage";


export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<HomePage/>}/> 
            <Route path="/repos"element={<ReposPage/>}/> 
        </Routes>
        </BrowserRouter>
    )
}