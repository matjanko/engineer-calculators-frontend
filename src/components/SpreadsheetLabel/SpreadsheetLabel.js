import React from "react";
import './SpreadsheetLabel.css';

const SpreadsheetLabel = ({text}) => {
    return (
        <label className="spreadsheet-label-root">
            {text}
        </label>
    )
};

export default SpreadsheetLabel
