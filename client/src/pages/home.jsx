import React from "react";
import Footer from "../components/footer";
import Main from "../components/main/main";
import Header from "../components/header";


export default function Home(props){
    return(
        <div>
            <Header />
            <Main /> 
            <Footer />
        </div>
    )
}