import { GlobalState } from "./GlobalState/Globalstate";
import Home from "./Pages/home";



function App() {
  return (
    <GlobalState>
      <Home/>
    </GlobalState>
  );
}

export default App;
