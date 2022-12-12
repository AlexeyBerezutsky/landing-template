import { Main } from "./pages/Main";
import { Wrap } from "./pages/Wrap";
import About from "./pages/About";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Welcome } from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrap/>}>
                    <Route index element={<Main/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="welcome" element={<Welcome/>}/>
                    {/*<Route path="*" element={<NoMatch />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
