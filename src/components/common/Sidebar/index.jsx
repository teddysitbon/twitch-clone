import './styles.scss';
import { LOCALE } from '../../../constants/locale.js';
import React from 'react';

function Sidebar () {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">
                {LOCALE.SIDEBAR.TITLE}
            </h2>
            <ul className="list-stream"/>
        </aside>
    );
}

export default Sidebar;
