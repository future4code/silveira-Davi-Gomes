import { GlobalState } from "../Global/GlobalState";
import Router from "../router/Router";


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