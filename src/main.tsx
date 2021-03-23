import * as React from "react";
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Store } from "redux";
import { IttyniState } from "./store";
import { History } from "history";
//provisoire Login signup page

// import aministration component 

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";


import { routes } from './routes';

import ittyni  from "./ittyni";



interface MainProps {
    store: Store<IttyniState>;
    history: History
}

const Main: React.FC<MainProps> = ({ store, history }) => {

    const {Article} = ittyni.ui;
    
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route path={routes.home.path} component={routes.home.component} />
                        </Switch>
                    </Router>
                </Provider>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default Main;