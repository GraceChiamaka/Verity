import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Containers/View/Home/Home';
import OnBoarding from '../Containers/View/OnBoarding/OnBoarding';
import Register from '../Containers/View/Registration/Regsiter';
import Login from '../Containers/View/Registration/Login';
import Admin from '../Containers/View/Admin/Admin';
import User from '../Containers/View/User/User';
import Branch from '../Containers/View/Branch/Branch';
import AdminProfile from '../Containers/View/Admin/AdminProfile';

export default () => (
    <BrowserRouter>
        <div>
            <Route path='/' exact component={Home} />
            <Route path="/onboarding" component={OnBoarding} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/branch" component={Branch} />
            <Route path="/adminprofile" component={AdminProfile} />
        </div>
    </BrowserRouter>
);
