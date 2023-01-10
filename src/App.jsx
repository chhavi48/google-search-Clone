import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:query/:startIndex" element={<SearchResult />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App;
