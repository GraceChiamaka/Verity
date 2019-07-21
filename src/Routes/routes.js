import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
import UserBoarding from '../Containers/View/OnBoarding/UserBoarding';

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/onboarding" component={OnBoarding} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/userProfile" component={UserProfile} />
            <Route path="/branch" component={Branch} />
            <Route path="/adminprofile" component={AdminProfile} />
            <Route path="/network" component={GeneralNetwork} />
            <Route path="/denomination" component={Network} />
            <Route path="/group" component={Group} />
            <Route path="/requests" component={Requests} />
            <Route path="/userboarding" component={UserBoarding} />
           
        </div>
    </BrowserRouter>
);
