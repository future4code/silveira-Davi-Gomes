import { GlobalState } from "../Global/GlobalState";
import  Router  from "../router/Router";
// import { StyledGlobal } from "./style";

function App() {
    return (
        <div>
            <GlobalState>
                <Router />
            </GlobalState>
        </div>
    );
}

export default App; 