import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class Projects extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <Grid>
                    <div className="mainBorder"></div>
                    <div className="projectsContent">
                        <h1 className="Sofia-title center" >- Projects -</h1>
                    </div>              
                </Grid>
            </div>
        );
    }
}