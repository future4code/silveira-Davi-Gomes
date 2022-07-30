import { BrowserRouter } from "react-router-dom"
import GlobalState from "./Global/GlobalState"
import Router from "./Router/router"


const App = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Router/>
      </GlobalState>
    </BrowserRouter>
  )
}

export default App
