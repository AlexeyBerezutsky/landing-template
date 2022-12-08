import './App.css';
import { Route, Routes } from "react-router";
import React from "react";
import Welcome from "./source/pages/welcome";
import { Main } from "./pages/Main";
import { Wrap } from "./pages/Wrap";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
    return (
        <div>
            <header>
                <title>Title</title>
            </header>

            <Routes>
                <Route path="/" element={<Wrap/>}>
                    <Route index element={<Main/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="welcome" element={<Welcome/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
