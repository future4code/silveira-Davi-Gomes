import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'


const Router = () =>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/search/history" element={<SearchHistoryPage/>}/> */}
        </Routes>
    )
}

export default Router