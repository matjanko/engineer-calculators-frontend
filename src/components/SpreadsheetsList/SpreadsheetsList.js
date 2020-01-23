import React from 'react'
import './SpreadsheetsList.css'
import { Grid } from '@material-ui/core'
import SpreadsheetsBox from '../SpreadsheetsBox'

export default function SpreadsheetsList({spreadsheets}) {

    return (
        <div className="root">
            <Grid container spacing={5}>
                {spreadsheets.map(spreadsheet => (
                    <Grid item xs={12} key={spreadsheet.name}>
                        <SpreadsheetsBox name={spreadsheet.name} spreadsheets={spreadsheet.sheets}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
