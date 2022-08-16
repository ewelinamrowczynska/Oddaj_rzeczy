import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";



function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/log-in" element={<LogIn/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
