import React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgb(38, 46, 59)',
    }
}));

function StyledAppBar({title}) {

    const styles = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={styles.root}>
                <Toolbar>
                    <Grid justify="center" container>
                        <Typography variant="h6" noWrap>
                            {title}
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default StyledAppBar;
