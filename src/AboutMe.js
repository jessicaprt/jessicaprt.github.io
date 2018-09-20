import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe" id="about-me">
                <Grid className="description">
                    <h1 className="Sofia-title center">- About Me -</h1>
                    <p className="center">{this.props.text}</p>
                </Grid>
            </div>
        );
    }
}