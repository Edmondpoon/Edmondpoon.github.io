import React from "react";
import { Create_button } from "./button.jsx";
import { useWindowDimensions } from "./window.jsx";
import {
    home_info,
} from "./portfolio/info.jsx";


function Home() {
    const [w, h] = useWindowDimensions();

    return (
    <div className="home">
        <div className="text-center container">
            <img src={ process.env.PUBLIC_URL + "/images/pic.jpeg" } alt="..." width={ w / 2 } height={ h * 3 / 4 }/>
            <br /> <br />
            <p 
                style={{
                    width: "75%", 
                    left: "12.5%",
                    textAlign: "left",
                    position: "relative",
                    fontSize: `${w / 57.6}px`,
                    color: "white",
                }}
            > 
                { home_info() } 
            </p>

            <div className="buttons">
                <Create_button meta={["/", "Home"]} destination="/portfolio" label="Portfolio" />
                <Create_button destination="https://github.com/Edmondpoon" label="GitHub" />
                <Create_button destination="https://www.linkedin.com/in/edmond-poon-446b0a20b/" label="LinkedIn" />
                <Create_button meta={["/", "Home"]} destination="/resume" label="Resume" />
            </div>
        </div>
    </div>);
}

export default Home;
