import React from "react";
import Grid from "@material-ui/core/Grid";
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import {Link} from "react-router-dom";
import './SpreadsheetName.css'

export default function SpreadsheetName({name, path}) {

    return (
        <div>
            <Grid container alignItems={'center'}>
                <AppsTwoToneIcon fontSize={'small'} className="icon"/>
                <Link to={path} className="link">{name}</Link>
            </Grid>
        </div>
    )
}