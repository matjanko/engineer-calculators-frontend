import React from "react";
import './GroupBox.css';
import Box from "@material-ui/core/Box";

export default function GroupBox({header, children}) {

    return (
        <div className="group-box">
            <Box border={1} borderColor="lightgray">
                <div className="header">{header}</div>
                <div className="content">
                    {children}
                </div>
            </Box>
        </div>
    )
}