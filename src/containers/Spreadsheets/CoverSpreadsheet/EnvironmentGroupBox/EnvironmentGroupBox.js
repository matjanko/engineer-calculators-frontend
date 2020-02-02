import React from "react";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import {Box, Select} from "@material-ui/core";
import SpreadsheetLabel from "../../../../components/SpreadsheetLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function EnvironmentGroupBox({exposures, exposure, exposureOnChange}) {

    return (
        <GroupBox header="Warunki środowiskowe">
            <Box width={1}>
                <Box display="flex" flexDirection="row" alignItems="center" width={1}>
                    <SpreadsheetLabel text='Klasa ekspozycji'/>
                    <Select
                        onChange={exposureOnChange}
                        value={exposure}>
                        {exposures && exposures.map((exposure) => (
                            <MenuItem key={exposure} value={exposure}>{exposure}</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Box>
        </GroupBox>
    )
}