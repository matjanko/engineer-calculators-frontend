import React from 'react'
import { Box } from '@material-ui/core'
import SpreadsheetName from "./SpreadsheetName";

export default function SpreadsheetTile({spreadsheetName, spreadsheetPath}) {

    return (
        <Box border={1} borderColor="grey.400">
            <SpreadsheetName name={spreadsheetName} path={spreadsheetPath}/>
        </Box>
    )
}