import React from 'react'

import { BrowserRouter } from "react-router-dom"
// import GlobalState from ""
import Router from "./Router/router"


const App = () => {
  return (
    <BrowserRouter>
      {/* div Globalstate */}
      <div>
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
