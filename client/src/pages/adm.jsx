import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import AdmComp from "../components/admComp/AdmComp";

export default function Adm(props){
    return(
        <div>
            <Header prop1={props} /> {/*This props is just for example*/}
            <AdmComp />
            <Footer />
        </div>
    )
}