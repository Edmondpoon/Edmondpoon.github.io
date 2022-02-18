import { React, useState } from "react";
import { Links } from "./NavLinks.jsx";
import { NavLink } from "react-router-dom";
import { useWindowDimensions } from "./window.jsx";


function Nav() {
    const [ w, h ] = useWindowDimensions();
    const [mobileNav, setMobile] = useState(false);

    function swapNav() {
        setMobile(!mobileNav);
    }
    
    if (w > 500) {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                        <NavLink style={{ fontSize: "25px", zIndex: 2 }} className="navbar-brand mr-auto" to="/">
                            Edmond Poon
                        </NavLink>
                        <Links mobile="false" />
                    </div>
                </nav>
            </div>
        );
    } else {
        return (

            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand mr-auto nav" to="/">
                            Edmond Poon
                        </NavLink>
                        <button
                            className="btn btn-warning"
                            onClick={ swapNav }
                            style={{ zIndex: 2 }}
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>
                <nav className="navbar navbar-expand navbar-dark bg-dark mobile" style={{ height: `${mobileNav ? 100 : 0}px` }} >
                    <div className="container-fluid mobileNav" style={{ opacity: `${mobileNav ? 1 : 0}` }}>
                        <Links mobile="true" />
                    </div>
                </nav>
            </div>
        );              
    }
}

export default Nav;
