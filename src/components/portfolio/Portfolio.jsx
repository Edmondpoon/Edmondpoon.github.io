import React from "react";
import { Back } from "../button.jsx";
import { Outlet, Link, useLocation } from "react-router-dom"
import "../custom.css";


function Portfolio() {
    let previous = useLocation();
    
    var route;
    if (previous.pathname.search(/[\w\/]*portfolio\/[\w]+/) > -1) {
        let path = previous.pathname.split("/")[2];
        route = path.charAt(0).toUpperCase() + path.slice(1);
    } else {
        route = "Portfolio";
    }

    return (
    <div className="portfolio"> 
        <div className="container">
            <Back name={ route } />
            <Outlet />
        </div>
    </div>
    );
}

export default Portfolio;
