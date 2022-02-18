import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export function Links(props) {
    let location = useLocation();
    let previous_path = location.pathname;
    let previous_name = (previous_path === "/") ? "/Home" : previous_path;

    let paths = [
        "/",
        "/resume",
        "/portfolio",
    ];

    let labels = [
        "Home",
        "Resume",
        "Portfolio",
    ];

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <ul className={ props.mobile === "true" ? "navbar-nav mx-auto" : "navbar-nav" }>
            {[...labels].map((label, index) =>
                paths[index] !== previous_path ? 
                    <li className="nav-item nav" key={ label }>
                        <NavLink className="nav-link" to={ paths[index] } state={{ prevPath: previous_path, name: capitalize(previous_name.split("/")[1]) }}>
                            { label }
                        </NavLink>
                    </li>
                :
                    <li className="nav-item nav" key={ label }>
                        <NavLink className="nav-link disabled" to={ paths[index] } style={{ cursor: "default" }}>
                            { label }
                        </NavLink>
                    </li>
            )}
        </ul>
    );
}

