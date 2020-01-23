import React from 'react'
import './SpreadsheetsCategoryBox.css'
import { Grid } from '@material-ui/core'
import TitleLabel from "../TitleLabel";

export default function SpreadsheetsCategoryBox({name, children}) {

    return (
        <div>
            <div className="root">
                <TitleLabel title={name} isUnderlined={true}/>
                <Grid container spacing={2}>
                    {children}
                </Grid>
            </div>
        </div>
    )
}