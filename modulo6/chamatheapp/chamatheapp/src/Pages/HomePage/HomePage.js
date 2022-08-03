import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            {/* Header */}
            <div>
eu sou o header
            </div>
            {/* Main */}
            <div>
eu sou a main
            </div>
        </div>
    )
}
export default HomePage