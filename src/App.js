import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./style.css"
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

const App = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home /> }  path="/" />
                <Route element = { <Services /> }  path="/services" />
                <Route element = { <Contact /> }  path="/contact" />
                <Route element = { <Portfolio /> }  path="/portfolio" />
                {/* <Route element = { About }  path="/about" /> */}
           </Routes>
       </BrowserRouter>
   )
}

export default App;