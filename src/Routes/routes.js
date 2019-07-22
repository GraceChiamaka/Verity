import React from 'react';
import {Private, Public} from '../config/authRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../Containers/View/Home/Home';
import OnBoarding from '../Containers/View/OnBoarding/OnBoarding';
import Register from '../Containers/View/Registration/Regsiter';
import Login from '../Containers/View/Registration/Login';
import Admin from '../Containers/View/Admin/Admin';
import User from '../Containers/View/User/User';
import UserProfile from '../Containers/View/User/userProfile';
import Branch from '../Containers/View/Branch/Branch';
import AdminProfile from '../Containers/View/Admin/AdminProfile';
import GeneralNetwork from '../Containers/View/Network/GeneralNetwork';
import Network from '../Containers/View/Network/denominationNetwork';
import Group from '../Containers/View/Group/Group';
import Requests from '../Containers/View/Requests/Requests';

export default () => (
    <BrowserRouter>
        <Switch>
            <Public exact path="/" component={Home} />
            <Public exact path="/onboarding" component={OnBoarding} />
            <Public exact path="/register" component={Register} />
            <Public exact path="/login" component={Login} />
            <Private exact path="/admin" component={Admin} />
            <Private exact path="/user" component={User} />
            <Private exact path="/userProfile" component={UserProfile} />
            <Private exact path="/branch" component={Branch} />
            <Private exact path="/adminprofile" component={AdminProfile} />
            <Private exact path="/network" component={GeneralNetwork} />
            <Private exact path="/denomination" component={Network} />
            <Private exact path="/group" component={Group} />
            <Private exact path="/requests" component={Requests} />
        </Switch>
    </BrowserRouter>
);
