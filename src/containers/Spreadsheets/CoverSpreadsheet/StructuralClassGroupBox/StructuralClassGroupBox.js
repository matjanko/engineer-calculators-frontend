import React from "react";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import {Box, Checkbox} from "@material-ui/core";
import SpreadsheetLabel from "../../../../components/SpreadsheetLabel";

export default function StructuralClassGroupBox() {

    return (
        <GroupBox header="Klasa konstrukcji">
            <Box width={1}>
                <Box display="flex" flexDirection="row" alignItems='center' width={1} md={2}>
                    <Checkbox size="small" color="primary"/>
                    <SpreadsheetLabel text='projektowany okres 100 lat'/>
                </Box>
                <Box display="flex" flexDirection="row" alignItems='center' width={1} md={2}>
                    <Checkbox size="small" color="primary"/>
                    <SpreadsheetLabel text='element mający kształt płyty'/>
                </Box>
                <Box display="flex" flexDirection="row" alignItems='center' width={1}>
                    <Checkbox size="small" color="primary"/>
                    <SpreadsheetLabel text='specjalna kontrola jakości betonu'/>
                </Box>
            </Box>
        </GroupBox>
    )
}