import React, {useEffect, useMemo, useState} from "react";
import './App.css';
import Navbar from "./ui/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";


function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
