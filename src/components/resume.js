import React, { Component, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import './pdf.css'
import Pdf from './pdf';

//PDFjs worker from an external cdn 
const url =
    "file:///C:/Users/nbmc1/Downloads/Normaresumepdf.pdf"

export default function Test() {

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <>
            <div className="main">
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </>
    );
}

