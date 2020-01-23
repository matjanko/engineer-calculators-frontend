import React from "react";
import TitleLabel from "../TitleLabel";

export default function Spreadsheet({title = '', children}) {

    return (
        <div>
            {title.length > 0 ? <TitleLabel title={title} isUnderlined={true}/> : ''}
            {children}
        </div>
    )
}