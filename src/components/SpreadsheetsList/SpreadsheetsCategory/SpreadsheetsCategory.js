import React from 'react'
import './SpreadsheetsCategory.css'
import { Grid } from '@material-ui/core'
import SpreadsheetTile from './SpreadsheetTile'


export default function SpreadsheetsCategory({name, spreadsheets}) {

    return (
        <div>
            <div className="root">
                <Grid container spacing={2}>
                    {spreadsheets.map(spreadsheet => (
                        <Grid item xs={12} sm={6} md={4} xl={4}>
                            <SpreadsheetTile
                                spreadsheetName={spreadsheet.name}
                                spreadsheetPath={spreadsheet.path}
                                description={spreadsheet.description}
                                standard={spreadsheet.standard}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}