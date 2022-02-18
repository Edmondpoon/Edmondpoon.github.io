import "./custom.css";
import { Link, useLocation } from "react-router-dom";

function Back(props) {
    let previous = useLocation();
    if (!previous.state) {
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

export default Back;
