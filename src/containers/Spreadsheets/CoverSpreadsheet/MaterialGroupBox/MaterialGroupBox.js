import React from "react";
import {Box, Select} from "@material-ui/core";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import MenuItem from "@material-ui/core/MenuItem";
import SpreadsheetLabel from "../../../../components/SpreadsheetLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";

export default function MaterialGroupBox({concretes, concrete, concreteOnChange, aggregateSize, aggregateSizeOnChange,
                                             aggregateSizeDisabled, aggregateSizeDisabledOnChange}) {
    return (
        <GroupBox header="Materiał">
            <Box width={1}>
                <Box display='flex' alignItems='center' width={1} mb={2}>
                    <SpreadsheetLabel text='Klasa betonu'/>
                    <Select onChange={concreteOnChange} value={concrete}>
                        {concretes && concretes.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box display='flex' alignItems='center' width={1}>
                    <SpreadsheetLabel text='Rozmiar kruszywa'/>
                    <Input
                        style={{width: '80px'}}
                        endAdornment={
                            <InputAdornment position="end">
                                <SpreadsheetLabel text={'mm'}/>
                            </InputAdornment>
                        }
                        disabled={aggregateSizeDisabled}
                        value={aggregateSize}
                        onChange={aggregateSizeOnChange}
                    />
                    <Checkbox size="small" color="primary" checked={aggregateSizeDisabled}
                              onChange={aggregateSizeDisabledOnChange}/>
                </Box>
            </Box>
        </GroupBox>
    )
}