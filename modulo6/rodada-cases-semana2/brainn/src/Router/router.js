import { Routes, Route } from "react-router-dom"
import ErrorPage from "../Error/ErrorPage"
import HomePage from "../Home/Homepage"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}
export default Router