import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: '100%',
        height: '80px',
        backgroundColor: 'rgb(239, 239, 239)',
        textAlign: 'center',
    },
    footer: {
      marginTop: '15px'
    }
});

function StyledFooter({text}) {

    const styles = useStyles();

    return (
        <div className={styles.root} style={{marginTop: 'auto'}}>
            <p className={styles.footer}>{text}</p>
        </div>
    )
}

export default StyledFooter;