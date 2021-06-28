import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Register = lazy(() => import('@pages/Register'));

import Spinner from '@components/Spinner';
import { StoreProvider } from '@components/Store';



export const App = () => {
    return (
        <Router>
            <StoreProvider>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/">
                            <Register />
                        </Route>
                    </Switch>
                </Suspense>
            </StoreProvider>
        </Router>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)