import React from "react";
import Footer from "./footer";
import Main from "./main/main";
import Header from "./header";
import logo from "../../images/logo325x325.png"

export default function MulCon(props){
    return(
        <div>
            <Header logo={logo} description="logo da marca Mulheres + Conectadas"/>
            <Main /> 
            <Footer logo={logo} />
        </div>
    )
}