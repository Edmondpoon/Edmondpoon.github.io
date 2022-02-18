import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoChevronLeft, GoChevronRight, GoMarkGithub } from "react-icons/go";
import { IoDocumentText } from "react-icons/io5";
import { BsLinkedin, BsFillFolderFill } from "react-icons/bs";
import { FaArrowCircleUp } from "react-icons/fa";
import { useWindowDimensions } from "./window.jsx";
import "./custom.css";


export function Create_button(props) {
    let [w, h] = useWindowDimensions();
    let Class = "btn btn-outline-warning btn-lg cool-btn ";
    Class += (props.mod ? props.mod : "");
    let Styles = { margin: (props.mod ? "0px" : `${w / 36}px`) };

    if (!props.meta) {
        return (
            <a 
                className={ Class }
                target="_blank"
                rel="noopener noreferrer"
                href={ props.destination }
                style={ Styles }
            >
                { props.label === "GitHub" ? <GoMarkGithub /> : <BsLinkedin /> } &nbsp; { props.label }
            </a>
        );
    } else {
        let [current_dest, current_name] = props.meta;
        return (
            <Link 
                className={ Class }
                to={ props.destination }
                state={{ prevPath: current_dest, name: current_name }}
                style={ Styles }
            >
                { props.label === "Portfolio" ? <BsFillFolderFill /> : <IoDocumentText /> } &nbsp; { props.label }
            </Link>
        );
    }
}

export function Transition(props) {
    return (
        <div 
            style={{ float: props.direction, position: `${ props.direction === "right" ? "absolute" : "" }`, left: `${ props.direction === "right" ? "78%" : ""}`  }}
            className="translate"
            onClick={ props.handle_click }
        >
            { props.direction === "left" ? <GoChevronLeft /> : <GoChevronRight /> }
        </div>
    );
}

export function Scroll(props) {
    const [visible, setVisible] = useState(false);
    let [w, h] = useWindowDimensions();
    if (w <= 500) {
        return null;
    }

    const changeVisibility = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("scroll", changeVisibility);

    return (
        <div className="btn btn-outline-warning scrollToTop" style={{ display: visible ? "inline" : "none",  }}>
            { <FaArrowCircleUp 
                onClick={ scrollTop }
            /> }
            
        </div>
    );
}

export function Back(props) {
    let previous = useLocation();
    let [w, h] = useWindowDimensions();
    if (!previous.state || w <= 500) {
        return null;
    }

    return (
        <Link 
            to={ previous.state.prevPath } 
            className="link"
            state={{ prevPath: previous.pathname, name: props.name }}
            style={ props.style ? props.style : {} }
        > 
            { "<--  " + previous.state.name } 
        </Link>
    );
}
