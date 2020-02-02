import React from "react";
import {Box, Select, GridList} from "@material-ui/core";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import MenuItem from "@material-ui/core/MenuItem";
import SpreadsheetLabel from "../../../../components/SpreadsheetLabel";

export default function MaterialGroupBox({concretes, concrete, concreteOnChange}) {

    return (
        <GroupBox header="Materiał">
            <Box width={1}>
                <Box display='flex' alignItems='center' width={1} mb={2}>
                    <Box display="flex" flexDirection="row" width={1}>
                        <SpreadsheetLabel text='Klasa betonu'/>
                    </Box>
                    <Box display="flex" flexDirection="row-reverse">
                        <Select onChange={concreteOnChange} value={concrete}>
                            {concretes && concretes.map((item) => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>
                <Box display='flex' alignItems='center' width={1}>
                    <Box display="flex" flexDirection="row" width={1}>
                        <SpreadsheetLabel text='Rozmiar kruszywa'/>
                    </Box>
                    <Box display="flex" flexDirection="row-reverse">

                    </Box>
                </Box>
            </Box>

        </GroupBox>
    )
}