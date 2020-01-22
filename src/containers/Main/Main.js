import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from "@material-ui/core";
import { HomePage, CoverPage, ErrorPage } from '../../routes'

function Main() {

    return (
        <div>
            <BrowserRouter>
                <Container maxWidth={'md'} style={{marginTop: '80px'}}>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/zelbet/otulina' component={CoverPage}/>
                        <Route path="*" component={ErrorPage}/>
                    </Switch>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default Main;