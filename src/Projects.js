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
            return(
                <Row className="projectsContainer">
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
                        <Row className="projectsTitleContainer">
                            <div className="projectsTitleInnerContainer">                            
                                <div className="projectsLine"></div>
                                <Col sm={4} className="projectsTitleWrapper">
                                    <div className="projectsTitle Oswald-font">Projects</div></Col></div>
                        </Row>
                        
                        { this.renderProjects() }
                        
                            <Button className="projectButton Oswald-font">- View more projects -</Button>
                        <Row className="projectsFooter">
                            <div className="projectsLine projectsLineStatic"></div>
                        </Row>
                    </div>              
                </Grid>
            </div>
        );
    }
}