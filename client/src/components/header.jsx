import React from "react";
import logo from '../images/logo325x325.png'
export default function Header(props){
    return(
        <header>
            <img src={logo} alt="logo da marca Mulheres + Conectadas" id="logoHeader"/>
        </header>
    )
}