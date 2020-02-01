import React from "react";
import {Select} from "@material-ui/core";
import GroupBox from "../../../../components/GroupBox/GroupBox";
import MenuItem from "@material-ui/core/MenuItem";

export default function MaterialGroupBox({concretes, concrete, concreteOnChange}) {

    return (
        <GroupBox header="Materiał">
            <Select onChange={concreteOnChange} value={concrete}>
                {concretes && concretes.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
            </Select>
        </GroupBox>
    )
}