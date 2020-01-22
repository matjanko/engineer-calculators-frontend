import React from 'react'
import {Box} from '@material-ui/core'
import AppsTwoToneIcon from "@material-ui/icons/AppsTwoTone";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import './SpreadsheetTile.css';

export default function SpreadsheetTile({name, path, description, standard}) {

    return (
        <Box border={1} borderColor="grey.400">
            <div className="tile">
                <div className="tile-body">
                    <Grid container alignItems={'center'}>
                        <AppsTwoToneIcon fontSize={'small'} className="tile-body-icon"/>
                        <Link to={path} className="tile-body-link">{name}</Link>
                    </Grid>
                    <div className="tile-body-description">
                        {description}
                    </div>
                </div>
                <div className="tile-footer">
                    {standard}
                </div>
            </div>
        </Box>
    )
}