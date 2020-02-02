import React from "react";
import TitleLabel from "../TitleLabel";
import SpreadSheetError from "../SpreadsheetError";

const SpreadsheetPage = ({title = '', children, hasError = true}) => {
    const errorText = 'Wystąpił nieoczekiwany błąd serwera. Kalkulator jest niedostępny';

    return (
        <div>
            {title.length > 0 ? <TitleLabel title={title} isUnderlined={true}/> : ''}
            {hasError ? <SpreadSheetError errorText={errorText}/> : children}
        </div>
    )
};

export default SpreadsheetPage;