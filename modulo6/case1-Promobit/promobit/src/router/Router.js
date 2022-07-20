import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import {DetailsPage} from "../pages/DetailsPage"


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