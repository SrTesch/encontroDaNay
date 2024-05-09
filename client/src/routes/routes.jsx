import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MulCon from "../pages/mulCon/mulCon";
import Imersao from "../pages/imersao/imersao";
import Adm from "../pages/adm";

const Rotas = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/mulheresConectadas" element={<MulCon />}/>
            <Route path="/imersão" element={<Imersao />}/>
            
            <Route path="/adm" element={<Adm />} />
        </Routes>
       </BrowserRouter>
   )
}

export default Rotas;