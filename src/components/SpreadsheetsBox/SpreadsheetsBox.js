import React from 'react'
import './SpreadsheetsBox.css'
import { Grid } from '@material-ui/core'
import SpreadsheetTile from "../SpreadsheetTile";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function SpreadsheetsBox({name, spreadsheets}) {

    return (
        <div>
            <div className="root">
                <div className="category-title">
                    <Typography variant={'subtitle1'} gutterBottom>
                        {name}
                    </Typography>
                    <Divider/>
                </div>
                <Grid container spacing={2}>
                    {spreadsheets.map(spreadsheet => (
                        <Grid item xs={12} sm={6} md={4} xl={4}>
                            <SpreadsheetTile
                                name={spreadsheet.name}
                                path={spreadsheet.path}
                                description={spreadsheet.description}
                                standard={spreadsheet.standard}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}