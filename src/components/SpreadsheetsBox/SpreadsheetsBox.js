import React from 'react'
import './SpreadsheetsBox.css'
import { Grid } from '@material-ui/core'
import SpreadsheetTile from "../SpreadsheetTile";
import TitleLabel from "../TitleLabel";

export default function SpreadsheetsBox({name, spreadsheets}) {

    return (
        <div>
            <div className="root">
                <TitleLabel title={name} isUnderlined={true}/>
                <Grid container spacing={2}>
                    {spreadsheets.map(spreadsheet => (
                        <Grid item xs={12} sm={6} md={4} xl={4} key={spreadsheet.name}>
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