import './styles.scss';
import { LOCALE } from '../../../constants/locale.js';
import React from 'react';
import Svg from '../Svg';

function Header () {
    return (
        <nav className="top-nav">
            <ul className="nav-links">
                <li className="link logo">
                    <Svg
                        height="35"
                        type="logo"
                        viewBox="0 0 40 40"
                        width="35"
                    />
                </li>
                <li className="link">
                    {LOCALE.HEADER.TOP_GAMES}
                </li>
                <li className="link">
                    {LOCALE.HEADER.TOP_STREAMS}
                </li>
            </ul>
            <div className="nav-search">
                <form className="form-search">
                    <input
                        className="nav-input"
                        placeholder={LOCALE.HEADER.SEARCH}
                        type="text"
                    />
                    <button
                        className="submit-button"
                        type="submit"
                    >
                        <Svg
                            className="submit-logo"
                            height="100%"
                            type="search"
                            viewBox="0 0 20 20"
                            width="100%"
                        />
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
