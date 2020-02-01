import React, {useEffect} from "react";
import Spreadsheet from "../../../components/Spreadsheet/Spreadsheet";
import Grid from "@material-ui/core/Grid";
import MaterialGroupBox from "./MaterialGroupBox";


const CoverSpreadsheet = () => {

    const [hasError, setErrors] = React.useState(false);
    const [concretes, setConcretes] = React.useState([]);

    const [selectedConcrete, setSelectedConcrete] = React.useState('');

    async function fetchConcretes() {
        const response = await fetch('/api/concretes/classes');
        return await response.json()
    }

    useEffect( () => {
        fetchConcretes()
            .then(setConcretes)
            .catch(err => setErrors(err));

    }, []);

    const handleConcreteOnChange = event => {
        setSelectedConcrete(event.target.value)
    };

    return (
        <Spreadsheet title={'Otulina wg PN-EN-1992-1-1'}>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <MaterialGroupBox concretes={concretes}
                                      concrete={selectedConcrete}
                                      concreteOnChange={handleConcreteOnChange}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>

                </Grid>
            </Grid>
        </Spreadsheet>
    )
};

export default CoverSpreadsheet;