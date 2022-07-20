import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/description" element={<Descriptionpage/>}/>
            </Routes>
        </BrowserRouter>
    )


}

export default Router