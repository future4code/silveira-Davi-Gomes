import React from 'react'
import { BrowserRouter } from "react-router-dom" 
import Router from './Router/Router'








const  App = () => {
  return (
    <BrowserRouter>
      {/* GlobalState */}
      <div>
<Router/>
      </div>

    </BrowserRouter>
  )
}

export default App
