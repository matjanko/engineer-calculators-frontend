import React from "react";
import Spreadsheet from "../../../components/Spreadsheet/Spreadsheet";
import Grid from "@material-ui/core/Grid";
import GroupBox from "../../../components/GroupBox";

export default function CoverSpreadsheet() {

    return (
        <Spreadsheet title={'Otulina wg PN-EN-1992-1-1'}>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <GroupBox header="Materiał">

                    </GroupBox>
                    <GroupBox header="Materiał">

                    </GroupBox>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>

                    <GroupBox header="Materiał">

                    </GroupBox>
                    <GroupBox header="Materiał">

                    </GroupBox>
                    <GroupBox header="Materiał">

                    </GroupBox>
                </Grid>
            </Grid>
        </Spreadsheet>
    )
}