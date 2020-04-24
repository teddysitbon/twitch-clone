import './App.scss';
import Games from './components/games';
import Header from './components/common/Header';
import React from 'react';
import Sidebar from './components/common/Sidebar';

function App () {
    return (
        <div>
            <Header />
            <Sidebar />
            <Games />
        </div>
    );
}

export default App;
