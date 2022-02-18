import React from "react";
import Radium from "radium";
import "../custom.css";
import { Link } from "react-router-dom"
import { 
    description, 
    titles, 
    languages, 
    names,
    previews,
} from "./info";

const individual = {
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "17px",
    color: "#000000",
    ':hover': {
        color: "#0000FF",
        fontSize: "19px",
    },
};

function Projects() {
    var Lnk = Radium(Link);

    const image = previews();
    const language = languages();
    const name = names();
    const title = titles();
    const data = description();

    
    return (
        <div className="row">
            <h1 className="text-center mt-5 title"> Projects </h1>
              {[...title].map((title, index) => 
                    <div className="card mx-auto mt-4" style={{ width: "18rem", borderRadius: "8px" }} key={ title }>
                        <video className="display" autoPlay loop muted>
                            <source src={ image[title] } type="video/mp4" />
                        </video>
                        <div className="card-body" style={{ textAlign: "center" }}>
                            <Lnk to={ "/portfolio/" + title } className="card-titles" style={ individual } state={{ prevPath: "/portfolio", name: "Portfolio", type: title }}>
                                { name[title] }
                            </Lnk>
                            <br/>
                            <p className="card-text" style={{ height: "50px"}}>
                                { data[title] }
                            </p>

                            <div className="card-footer" style={{ width: "18rem", right: "29px", top: "17px", position: "relative" }}>
                                <small className="text-muted"> { "Written with " + language[title] } </small>
                            </div>
                        </div>
                    </div>
              )}
        </div>
    );
}

export default Radium(Projects);
