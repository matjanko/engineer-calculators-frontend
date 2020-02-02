import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import MaterialGroupBox from "./MaterialGroupBox";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import SpreadsheetPage from "../../../components/SpreadsheetPage";
import SpreadsheetProgress from "../../../components/SpreadsheetProgress";


export default function CoverSpreadsheet() {

    const [hasError, setErrors] = React.useState(false);
    const [concretes, setConcretes] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [selectedConcrete, setSelectedConcrete] = React.useState('');

    async function fetchConcretes() {
        const response = await fetch('/api/concretes/classes');
        return await response.json()
    }

    useEffect(() => {
        fetchConcretes()
            .then(setConcretes)
            .then(() => setTimeout(() => setLoading(false), 500))
            .catch(err => setErrors(err));
    }, []);

    const handleConcreteOnChange = (event) => {
        setSelectedConcrete(event.target.value)
    };

    const handleOnClickButton = () => {
        alert("Wybrano" + selectedConcrete)
    };

    return (
        <SpreadsheetPage title={'Otulina wg PN-EN-1992-1-1'} hasError={hasError}>
            {isLoading ? <SpreadsheetProgress/> :
                <div>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <MaterialGroupBox concretes={concretes}
                                              concrete={selectedConcrete}
                                              concreteOnChange={handleConcreteOnChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>

                        </Grid>
                    </Grid>
                    <Box component="span" xs={12} md={12} lg={12}>
                        <Button onClick={handleOnClickButton}>Oblicz</Button>
                    </Box>
                </div>
            }
        </SpreadsheetPage>
    );
}