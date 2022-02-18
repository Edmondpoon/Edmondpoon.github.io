import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { Back } from "./button.jsx";
import { useWindowDimensions } from "./window.jsx";
import "./custom.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

function Resume() { 
    const [numPages, setNumPages] = useState(null);
    const [resume] = useState("./resume.pdf");
    const [w, h] = useWindowDimensions();
    let previous = useLocation();

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div className="resume">
            <Back name="Resume" style={{ left: "72px" }} />
            <div className="container">
                {w > 500 &&
                    <a className="btn btn-lg btn-dark pdf" href={process.env.PUBLIC_URL + "/resume.pdf"}> View pdf directly </a>
                }
                <div>
                    <Document 
                        loading=""
                        file={ resume } 
                        options={ options } 
                        onLoadSuccess={ onDocumentLoadSuccess }
                    >
                        {
                          Array.from(
                            new Array(numPages),
                            (el, index) => (
                              <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                              />
                            ),
                          )
                        }
                    </Document>
                </div>
            </div>
        </div>
    );
}

export default Resume;

