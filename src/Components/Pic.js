import React from 'react';
import logo from "./logo.png";


console.log(logo);

function Pic() {
    return (
        <img style={{ width:"5%"}} src={logo} alt="logo" />
    );
}

export default Pic;