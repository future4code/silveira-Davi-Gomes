import React from 'react'
import { BrowserRouter } from "react-router-dom" 
import Router from './Router/Router'
import GlobalState from "./Global/GlobalState"







const  App = () => {
  return (
    <BrowserRouter>
      {/* GlobalState */}
      <GlobalState>
<Router/>
      </GlobalState>

    </BrowserRouter>
  )
}

export default App
