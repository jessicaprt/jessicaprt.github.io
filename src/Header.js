import React, { Component } from 'react';
import {NavBar} from './NavBar.js';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar className="Navbar" />
            </div>
        );
    }
}