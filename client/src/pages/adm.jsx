import React from "react";
import Footer from "./mulCon/footer";
import Header from "./mulCon/header";
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