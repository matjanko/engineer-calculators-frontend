import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './TitleLabel.css';

export default function TitleLabel({title, isUnderlined = false}) {

    return (
        <div className="title">
            <Typography variant={'subtitle1'} gutterBottom>
                {title}
            </Typography>
            {isUnderlined ? <Divider/> : ''}
        </div>
    )
}