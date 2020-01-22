import React from 'react'
import spreadsheets from '../../constants/spreadsheets'
import SpreadsheetsList from '../../components/SpreadsheetsList/SpreadsheetsList';

function HomePage() {

    return (
        <div>
            <SpreadsheetsList spreadsheets={spreadsheets}/>
        </div>
    )
}

export default HomePage;