import './App.css';
import { Route, Routes } from "react-router";
import React from "react";
import Welcome from "./source/pages/welcome";
import { Main } from "./pages/Main";
import { Wrap } from "./pages/Wrap";
import About from "./source/pages/about";
import PrivacyPolicy from "./source/pages/privacy-policy";

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
