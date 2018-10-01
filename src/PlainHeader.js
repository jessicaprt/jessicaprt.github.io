import React, { Component } from 'react';
import { NavBar } from './NavBar.js';

export class PlainHeader extends Component {
    render() {
        return (
            <div className="plainHeader">
                <NavBar className="plainHeaderNav" />
            </div>
        );
    }
}