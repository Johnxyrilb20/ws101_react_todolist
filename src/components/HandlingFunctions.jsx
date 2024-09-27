import { Component } from "react";
import './HandlingFunction.css'

function HandlingFunction() {

    const handlingfunctions = () => {console.log("Hello There!")}

    return (
        <div id="handlingfunction">
        <>
            <h1>This is how to handle events in Functional Componebts</h1>
            <button onClick={handlingfunctions}>Click ME!</button>
        </>
        </div>
    )
}

export default HandlingFunction