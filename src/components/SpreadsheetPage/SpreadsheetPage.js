import React from "react";
import TitleLabel from "../TitleLabel";

const SpreadsheetPage = ({title = '', children, hasError = true}) => {
    return (
        <div>
            {title.length > 0 ? <TitleLabel title={title} isUnderlined={true}/> : ''}
            {hasError ? "błąd" : children}
        </div>
    )
};

export default SpreadsheetPage;