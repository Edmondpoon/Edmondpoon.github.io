import { useEffect, useState } from "react";

function WindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return [width, height];
}

export function useWindowDimensions() {
    const [windowDim, setDimension] = useState(WindowDimensions());
    
    useEffect(() => {
        function handleResize() {
            setDimension(WindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDim;
};
