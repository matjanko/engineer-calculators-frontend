import React from "react";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import {Box, Select} from "@material-ui/core";
import SpreadsheetLabel from "../../../../components/SpreadsheetLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function ReinforcingBarGroupBox({bar, bars, barOnChange}) {

    return (
        <GroupBox header="Pręty zbrojeniowe">
            <Box width={1}>
                <Box display="flex" flexDirection="row" alignItems="center" width={1}>
                    <SpreadsheetLabel text='Średnica pręta'/>
                    <Select
                        onChange={barOnChange}
                        value={bar}>
                        {bars && bars.map((bar) => (
                            <MenuItem key={bar} value={bar}>{bar}</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Box>
        </GroupBox>
    )
}