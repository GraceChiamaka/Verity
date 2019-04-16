import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Containers/View/Home/Home';
import OnBoarding from '../Containers/View/OnBoarding/OnBoarding';
import Login from '../Containers/View/Registration/Login';

export default () => (
    <BrowserRouter>
        <div>
            <Route path='/' exact component={Home} />
            <Route path="/onboarding" component={OnBoarding} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
);
