import React, { Component } from 'react';

export class Footer extends Component {
    renderDate() {
        var d = new Date();
        return (<div className="contactContent">&copy; Jessica Prieto - { d.getFullYear() }</div>);
    }

    render() {
        return (
            <div className="footer mainFooter">
                    <div className="whiteDivider"></div>
                    { this.renderDate() }
            </div>
        );
    }
}