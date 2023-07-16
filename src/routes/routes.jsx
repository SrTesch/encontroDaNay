import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../components/home";

const Rotas = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} exact />
        </Routes>
       </BrowserRouter>
   )
}

export default Rotas;