import React, { Component } from 'react';
import {NavBar} from './NavBar.js';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className="navBlock navTitle purpleFont">Jessica Prieto</p>
                <NavBar className="Navbar nav" />
            </div>
        );
    }
}