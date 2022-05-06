import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import ListTripsPage from '../ListTripsPage'
import ApplicationFormPage from '../ApplicationFormPage'
import LoginPage from '../LoginPage'
import AdminHomePage from '../AdminHomePage'
import CreateTripPage from '../CreateTripPage'
import TripDetailsPage from '../TripDetailsPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trip/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router