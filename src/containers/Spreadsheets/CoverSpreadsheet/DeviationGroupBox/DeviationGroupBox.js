import React from "react";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import {Box, Checkbox} from "@material-ui/core";
import SpreadsheetLabel from "../../../../components/SpreadsheetLabel";

export default function DeviationGroupBox() {

    return (
        <GroupBox header="Odchyłka wykonawcza">
            <Box width={1}>
                <Box display="flex" flexDirection="row" alignItems='center' width={1} md={2}>
                    <Checkbox size="small" color="primary"/>
                    <SpreadsheetLabel text='system zapewnienia jakości'/>
                </Box>
                <Box display="flex" flexDirection="row" alignItems='center' width={1} md={2}>
                    <Checkbox size="small" color="primary"/>
                    <SpreadsheetLabel text='bardzo czułe urządzenie pomiarowe'/>
                </Box>
            </Box>
        </GroupBox>
    )
}