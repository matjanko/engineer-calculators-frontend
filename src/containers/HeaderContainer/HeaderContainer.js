import React from 'react'
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core'

function HeaderContainer() {

    const title = 'KALKULATORY';

    return (
        <div>
            <AppBar position="fixed">
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

export default HeaderContainer;