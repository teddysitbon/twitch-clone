import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Games from './components/games';
import Header from './components/common/Header';
import React from 'react';
import Sidebar from './components/common/Sidebar';
import Streams from './components/streams';


function App () {
    return (
        <Router>
            <Header />
            <Sidebar />
            <Switch>
                <Route
                    component={Games}
                    exact
                    path="/"
                />
                <Route
                    component={Streams}
                    exact
                    path="/top-streams"
                />
            </Switch>
        </Router>
    );
}

export default App;
