import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.compent.jsx';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sing-in-and-sign-up.component';
import Header from './components/header/header.component';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />{' '}
                <Route path='/shop' component={ShopPage} />{' '}
                <Route path='/contact' component={ContactPage} />{' '}
                <Route path='/signIn' component={SignInAndSignUp} />{' '}
            </Switch>{' '}
        </Fragment>
    );
};

export default App;
