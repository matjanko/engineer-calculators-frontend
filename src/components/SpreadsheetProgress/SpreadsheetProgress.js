import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import './SpreadsheetProgress.css';

const SpreadsheetProgress = () => {

    return (
        <div className="loader">
            <CircularProgress/>
        </div>
    )
};

export default SpreadsheetProgress;