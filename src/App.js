import React from "react";
import "./App.css";

const Display = (props) => {
    let {label} = props;
    return (
        <div style={{border: "1px solid", paddding: 10, backgroundColor: "#dedede", textAlign: "right"}}>
            <h1>{props.label}</h1>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Display label={10} />
        </div>
    );
};

export default App;
