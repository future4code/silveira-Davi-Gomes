import { Router } from "./router/Router";
import {ContextProvider} from "./context/index"

function App() {
  return (
  <ContextProvider>
    <Router/>
  </ContextProvider>
  );
}

export default App;
