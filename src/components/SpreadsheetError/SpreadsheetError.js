import React from "react";
import './SpreadsheetError.css';

const SpreadSheetError = ({errorText}) => {
    return (
        <div className="error">
            {errorText}
        </div>
    )
};

export default SpreadSheetError;