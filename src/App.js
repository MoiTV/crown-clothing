import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.compent.jsx';
import './App.css';

const hatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

const App = () => {
    return (
        <div>
            <Switch>
                <Route excat path='/' component={HomePage} />
                <Route path='/hats' component={hatsPage} />
            </Switch>
        </div>
    );
};

export default App;
