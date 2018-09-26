import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col';
import { ProjectItem } from './ProjectItem.js'
import axios from 'axios';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : []
        }
    }
    componentDidMount() {
        axios.get('./contents.json')
        .then (response => {
            const projects = response.data.contents.projects;
            this.setState({ projects })
        });
    }

    renderProjects() {
        if (this.state.projects.length !== 0) {
            console.log(this.state.projects)
            return(
                <Row>
                    <Col sm={4}><ProjectItem 
                        imgUrl={ this.state.projects.A.imgUrl }
                        title={ this.state.projects.A.name } /></Col>
                    <Col sm={4}><ProjectItem 
                        imgUrl={ this.state.projects.B.imgUrl }
                        title={ this.state.projects.B.name } /></Col>
                    <Col sm={4}><ProjectItem 
                        imgUrl={ this.state.projects.C.imgUrl }
                        title={ this.state.projects.C.name } /></Col>
                </Row>
            );
        }
    }

    render() {
        return (
            <div className="projects champagneBackground" id="projects">
                <Grid>
                    <div className="projectsContent">
                        <h1 className="Oswald-font purpleFont center" >Projects</h1>
                        
                        { this.renderProjects() }
                        
                        <Button className="projectButton Oswald-font">- View more projects -</Button>
                    </div>              
                </Grid>
            </div>
        );
    }
}