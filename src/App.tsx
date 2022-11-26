import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { QueHago } from "./components/QueHago";
import { Contacto } from "./components/QueHago copy";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <h1>Web Alvaro</h1>
            <QueHago></QueHago>
            <Portfolio></Portfolio>
            <Contacto></Contacto>
        </div>
    );
}

export default App;
