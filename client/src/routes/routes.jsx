import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Adm from "../pages/adm.tsx";

const Rotas = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/adm" element={<Adm />} />
        </Routes>
       </BrowserRouter>
   )
}

export default Rotas;