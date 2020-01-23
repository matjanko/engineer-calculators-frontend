import React from 'react'
import './SpreadsheetsList.css'
import { Grid } from '@material-ui/core'
import SpreadsheetsCategoryBox from '../SpreadsheetsCategoryBox'
import SpreadsheetTile from "../SpreadsheetTile/SpreadsheetTile";

export default function SpreadsheetsList({spreadsheets}) {

    return (
        <div className="root">
            <Grid container spacing={5}>
                {spreadsheets.map(spreadsheet => (
                    <Grid item xs={12} key={spreadsheet.name}>
                        <SpreadsheetsCategoryBox name={spreadsheet.name}>
                            {spreadsheet.sheets.map(sheet => (
                                <Grid item xs={12} sm={6} md={4} xl={4} key={sheet.name}>
                                <SpreadsheetTile
                                    name={sheet.name}
                                    path={sheet.path}
                                    description={sheet.description}
                                    standard={sheet.standard}/>
                                </Grid>
                            ))}
                        </SpreadsheetsCategoryBox>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
