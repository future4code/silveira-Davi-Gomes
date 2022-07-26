import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { MovieDetailsPage } from "../pages/DetailsPage/DetailsPage.tsx"


 const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<MovieDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router