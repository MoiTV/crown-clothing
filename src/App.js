import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.compent.jsx';
import ShopPage from './pages/shop/shop.component';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shopPage' component={ShopPage} />
            </Switch>
        </div>
    );
};

export default App;
